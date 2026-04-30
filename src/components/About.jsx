"use client";

import React from 'react';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc' 

const ServiceCard = ({index, title, icon})=>{
  return(
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      whileHover={{ y: -8, rotateX: 6, rotateY: -6 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className='xs:w-[250px] w-full [transform-style:preserve-3d]'
    >
      <div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='h-16 w-16 object-contain' />
          <h3 className='text-center text-white text-[20px] font-bold '>{title}</h3>
        </div>
      </div>
    </motion.div>
  )
}

const About = ({ copy, services }) => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.heroSubText}`}>{copy.intro}</p>
      <h2 className={`${styles.heroHeadText}`}>{copy.title}</h2>
    </motion.div>
    <motion.p variants={fadeIn('','',0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        {copy.description}
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, 'about');