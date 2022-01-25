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


        <div id='leftSide' className='grid md:grid-cols-2'>
            <div>
                <img src={image_path} alt={name}/>
                <div>
                    <a href={github_url}>
                        <GrGithub />
                        <span>
                            GitHub
                        </span>
                    </a>
                    <a href={deployed_url}>
                        <CgWebsite />
                        <span>
                            Site
                        </span>
                    </a>
                </div>
            </div>
        

        <div id='rightSide'>
            <h3>{name}</h3>
            <h4>{description}</h4>
            <div>
                {
                    tech_tags.map(tech => 
                    <span key={tech}>
                        {tech_tags}
                    </span>)
                }
            </div>
            <button>
                <CgCloseO size={20} className='text-green-900' onClick={() => setShowProjectDetails(false)}/>
            </button>
        </div>
    </div>
    )}
</div>
    
  )
};

export default ProjectCard;
