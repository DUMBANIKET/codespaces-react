import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import {Tilt} from "react-tilt";
import { styles } from "../styles";


const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
  }) => {
    return (
     <div className=''>
       <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary bg-black hover:bg-white hover:text-black
         background-animate
         cursor-pointer p-5 rounded-2xl sm:w-[360px] w-full'
        >
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />
  
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img 
                  src={"https://img.icons8.com/3d-fluency/94/github.png"}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </div>
  
          <div className='mt-5'>
            <h3 className=' font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>
  
          <div className='mt-4 flex flex-wrap gap-2 '>
            {tags.map((tag) => (
              <div className="bg-black rounded-2xl">
                <p
                key={`${name}-${tag.name}`}
                className={`text-[14px]  mx-2 ${tag.color}`}
              >
                #{tag.name}
              </p></div>
            ))}
          </div>
        </Tilt>
      </motion.div>
     </div>
    );
  };


export default function Project() {
  
  const projects = [
    {
      name: "IDK",
      description:
        "yeh badd me likh duga",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: "https://th.bing.com/th/id/OIP.EMHLwRlGYdd2PCwYam-zxwHaEj?pid=ImgDet&rs=1",
      source_code_link: "https://github.com/",
    },
    {
      name: "IDK",
      description:
        "yeh badd me likh duga",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: "https://images.alphacoders.com/587/587355.jpg",
      source_code_link: "https://github.com/",
    },
    {
      name: "IDK",
      description:
        "yeh badd me likh duga",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: "https://wallpapercave.com/wp/wp4180312.jpg",
      source_code_link: "https://github.com/",
    },
  ];
  return (
   <>
   <div className='mt-10  ' id='project'>
   <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
   </div>
    
   </>
  )
}
