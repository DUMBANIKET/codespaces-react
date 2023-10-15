import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import {Tilt} from "react-tilt";
import { styles } from "../styles";





const ServiceCard = ({ index, title, icon }) => (

    <div className="flex flex-wrap justify-center ">
        <Tilt className='xs:w-[250px] w-full '>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        // className=' w-full  green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        className="  w-full
       
        bg-gradient-to-r
         from-blue-600
        via-red-500
        to-yellow-500
        p-[1px] rounded-[20px] shadow-card
        background-animate"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-black rounded-[20px] w-72 py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-22 h-20 object-contain'
          />
  
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
    </div>
  
  );


export default function About() {
    const services = [
        {
          title: "Algorithms",
          icon: "./images/glass3.png",
        },
        {
          title: "Web Devlopment",
          icon: "./images/glass1.png",
        },
        {
          title: "Full Stack Dev.",
          icon: "./images/glass4.png",
        },
        {
          title: "Content Creation",
          icon: "./images/glass2.png",
        },
       
      ];
  return (
   <>
    <div className='' id='about'>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Im Aniket Singh a passionate developer who love's to contibute to open source and collaborate and Learn new thing's.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div></div>
   </>
  )
}
