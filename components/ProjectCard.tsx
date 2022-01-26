import { FunctionComponent, useState } from "react";
import { IProjects } from "../type";
import { GrGithub } from 'react-icons/gr';
import { CgWebsite } from 'react-icons/cg';
import { CgCloseO } from 'react-icons/cg'

const ProjectCard:FunctionComponent<{
    project:IProjects
}> = ({
    project:{
        name,
        description,
        image_path,
        deployed_url,
        github_url,
        category,
        tech_tags
    }
}) => {

    const [showProjectDetails, setShowProjectDetails] = useState(false)
    
  return (
    <div>
        <img src={image_path} alt={name} className='cursor-pointer' onClick={() => setShowProjectDetails(true)}/>
        <p className='my-2 text-center'>{name}</p>

        {
            showProjectDetails && (


        <div id='leftSide' className='absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-300 rounded-lg md:grid-cols-2 gap-x-6 dark:bg-gray-800 dark:text-white'>
            <div>
                <img src={image_path} alt={name} className='rounded-lg'/>
                <div className='flex justify-center my-4 space-x-2'>
                    <a href={github_url} className='flex items-center px-3 py-1 space-x-2 text-green-900 hover:text-green-600 dark:text-white dark:hover:text-green-600'>
                        <GrGithub />
                        <span>
                            GitHub
                        </span>
                    </a>
                    <a href={deployed_url} className='flex items-center px-3 py-1 space-x-2 text-green-900 hover:text-green-600 dark:text-white dark:hover:text-green-600'>
                        <CgWebsite />
                        <span>
                            Site
                        </span>
                    </a>
                </div>
            </div>
        

        <div id='rightSide'>
            <h3 className='mb-2 text-green-900 lg:text-2xl dark:text-white md:text-lg sm:text-lg'>{name}</h3>
            <p className='mb-2 text-base'>{description}</p>
            <div className='flex flex-wrap mt-5 space-x-2 text-sm'>
                {
                    tech_tags.map(tech => 
                    <span key={tech} className='px-2 py-1 my-1 bg-gray-200 rounded-xl dark:bg-gray-700'>
                        {tech_tags}
                    </span>)
                }
            </div>
            <button>
                <CgCloseO size={20} className='absolute text-green-900 top-2 right-2 hover:text-green-600' onClick={() => setShowProjectDetails(false)}/>
            </button>
        </div>
    </div>
    )}
</div>
    
  )
};

export default ProjectCard;
