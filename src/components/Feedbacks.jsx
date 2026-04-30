"use client";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

const FeedbackCard = ({index, quote, name})=>{
  return(
    <motion.div 
      variants={fadeIn('', 'spring', index * .5, .75)}
      whileHover={{ y: -10, rotateX: 4, rotateY: -4 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className="group relative w-full xs:w-[320px] [transform-style:preserve-3d]"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#915eff]/30 via-transparent to-[#00cea8]/10 opacity-70 blur-xl transition group-hover:opacity-100" />
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black-200/95 p-8 shadow-[0_25px_80px_-30px_rgba(0,0,0,0.75)] backdrop-blur-sm">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(145,94,255,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(0,206,168,0.08),transparent_30%)]" />
        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="text-[56px] font-black leading-none text-[#915eff] drop-shadow-[0_0_18px_rgba(145,94,255,0.35)]">“</p>
            <p className="mt-2 text-[15px] leading-7 text-[#e6e2ff]">
              {quote}
            </p>
          </div>
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#915eff]/30 bg-[#915eff]/15 text-base font-black text-[#d8c9ff] shadow-[0_10px_30px_-12px_rgba(145,94,255,0.7)]">
            {getInitials(name)}
          </div>
        </div>
        <div className="relative mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
          <div className="h-px flex-1 bg-gradient-to-r from-[#915eff]/60 to-transparent" />
          <div className="flex flex-col text-right">
            <p className="text-[15px] font-semibold tracking-[0.02em] text-white">
              {name}
            </p>
            <p className="text-[11px] uppercase tracking-[0.25em] text-secondary">
              Client Review
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Feedbacks = ({ copy, testimonials }) => {
  return (
    <div className="mt-12 overflow-hidden rounded-[24px] bg-black-100" >
      <div className="h-1 w-full bg-gradient-to-r from-[#915eff] via-[#7b61ff] to-[#00cea8]" />
      <div className={`${styles.padding} bg-tertiary rounded-b-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>{copy.intro}</p>
          <h2 className={styles.sectionHeadText}>{copy.title}</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index)=>{
          return(
            <FeedbackCard key={testimonial.name} {...testimonial} index={index}/>
          )
        })}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, '')