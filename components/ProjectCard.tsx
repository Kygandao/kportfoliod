import { FunctionComponent, useState } from "react";
import { IProjects } from "../type";
import { GrGithub } from 'react-icons/gr';
import { CgWebsite } from 'react-icons/cg';
import { CgCloseO } from 'react-icons/cg';
import Image from 'next/image'
import { motion } from "framer-motion";
import { animateDelayFadeUp, animateFadeUp } from "../animation";

const ProjectCard:FunctionComponent<{
    project:IProjects
}> = ({
    project:{
        name,
        description,
        image_path,
        deployed_url,
        github_url,
        //category, later use of category for filter method 
        tech_tags
    }
}) => {

    const [showProjectDetails, setShowProjectDetails] = useState(false)
    
  return (
    <div>
        <Image src={image_path} alt={name} onClick={() => setShowProjectDetails(true)} className='cursor-pointer' width='300' height='150' layout='responsive' />
        <p className='my-2 text-base text-center'>{name}</p> 

        {
            showProjectDetails && (

        <div id='leftSide' className='absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-300 rounded-lg md:grid-cols-2 gap-x-6 dark:bg-gray-800 dark:text-white'>
            <motion.div variants={animateDelayFadeUp} initial='initial' animate='animate'>

                <motion.div variants={animateFadeUp}>
                    <Image src={image_path} alt={name}  className='rounded-lg' width='300' height='150' layout='responsive'/>
                </motion.div>
                
                <div className='flex justify-center my-4 space-x-2'>
                    <motion.a variants={animateFadeUp} href={github_url} target='_blank' rel='noreferrer noopener' className='flex items-center px-3 py-1 space-x-2 text-green-900 hover:text-green-600 dark:text-white dark:hover:text-green-600'>
                        <GrGithub />
                        <span>
                            GitHub
                        </span>
                    </motion.a>
                    <motion.a variants={animateFadeUp} href={deployed_url} target='_blank' rel='noreferrer noopener' className='flex items-center px-3 py-1 space-x-2 text-green-900 hover:text-green-600 dark:text-white dark:hover:text-green-600'>
                        <CgWebsite />
                        <span>
                            Site
                        </span>
                    </motion.a>
                </div>
            </motion.div>
        

        <motion.div id='rightSide' variants={animateDelayFadeUp} initial='initial' animate='animate'>
            <motion.h3 variants={animateFadeUp} className='mb-2 text-green-900 lg:text-2xl dark:text-white md:text-lg sm:text-lg'>{name}</motion.h3>
            <motion.p variants={animateFadeUp} className='mb-2 text-base'>{description}</motion.p>
            <motion.div variants={animateFadeUp} className='flex flex-wrap mt-5 space-x-2 text-sm'>
                {
                    tech_tags.map(tech => 
                    <span key={tech} className='px-2 py-1 my-1 bg-gray-200 rounded-xl dark:bg-gray-700'>
                        {tech_tags}
                    </span>)
                }
            </motion.div>
            <button>
                <CgCloseO size={20} className='absolute text-green-900 top-2 right-2 hover:text-green-600' onClick={() => setShowProjectDetails(false)}/>
            </button>
        </motion.div>
    </div>
    )}
</div>
    
  )
};

export default ProjectCard;
