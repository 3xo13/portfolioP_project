"use client";

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa6';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({index, name, description, tags, image, source_code_link})=> {
  return(
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      whileHover={{ y: -10, rotateX: 4, rotateY: -4 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className='bg-tertiary p-5 rounded-2xl w-full sm:w-[360px] [transform-style:preserve-3d]'
    >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl '/>
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              onClick={() => window.open(source_code_link, '_blank')}
            >
              <FaGithub className='h-5 w-5 text-white' aria-hidden='true' />
            </div>
          </div>
        </div>
        <div>
          <h3 className='text-white font-bold text-[24px] mt-2'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map(tag => (
            <p key={tag.name} className={ `text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      
    </motion.div>
  )
}

const Works = ({ copy, projects }) => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.heroSubText} uppercase `}>{copy.intro}</p>
      <h2 className={`${styles.heroHeadText}`}>{copy.title}</h2>
    </motion.div>
    <div className='flex w-full'>
    <motion.p 
      variants={fadeIn('', '', 0.1, 1)}
      className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] '
    >
      {copy.description}
    </motion.p>
    </div>
    <div className='mt-20 flex flex-wrap gap-7'>
      {projects.map((project, index)=>(
        <ProjectCard key={`project-${index}`} index={index} {...project} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Works, '')