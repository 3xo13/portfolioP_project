"use client";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({experience}) => {
    return (
        <VerticalTimelineElement
      className="experience-timeline__element"
            contentStyle={{
                background: 'transparent',
                color: '#fff',
                boxShadow: 'none',
                padding: 0,
            }}
            contentArrowStyle={{
                borderRight: '7px solid rgba(145, 94, 255, 0.35)'
            }}
            date=""
            iconStyle={{
                background: experience.iconBg,
                boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 18px 40px -20px rgba(0,0,0,0.8)'
            }}
            icon={
              <div className="flex h-full w-full items-center justify-center rounded-full">
                {experience.icon ? (
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="h-[60%] w-[60%] object-contain"
                  />
                ) : (
                  <span className="text-sm font-black uppercase tracking-[0.2em] text-white">
                    {experience.iconLabel}
                  </span>
                )}
              </div>
            }>
            <div className="experience-card-content overflow-hidden rounded-[24px] border border-white/10 bg-[#1a1630]/95 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.85)] backdrop-blur-sm">
              <div className="h-1 w-full bg-gradient-to-r from-[#915eff] via-[#7b61ff] to-[#00cea8]" />
              <div className="p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#b69dff]">
                      {experience.company_name}
                    </p>
                    <h3 className="mt-2 text-[22px] font-bold text-white sm:text-[24px]">
                      {experience.title}
                    </h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-secondary">
                    {experience.date}
                  </span>
                </div>
                <p className="mt-4 text-[15px] leading-7 text-secondary">
                  {experience.summary}
                </p>
                <ul className="mt-5 space-y-3">
                  {(experience.points ?? []).map((point, index) => (
                    <li key={`${experience.title}-${index}`} className="flex gap-3 text-[14px] leading-6 text-white/90">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#00cea8] shadow-[0_0_14px_rgba(0,206,168,0.7)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
        </VerticalTimelineElement>
    )
};

const Experience = ({ copy, experiences }) => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.heroSubText} uppercase `}>{copy.intro}</p>
      <h2 className={`${styles.heroHeadText}`}>{copy.title}</h2>
    </motion.div>
    <div className="experience-timeline mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
};

export default SectionWrapper(Experience, 'work');