import ProjectCard from "../components/ProjectCard"
import { projects } from "../data"

const Projects = () => {
    return (
        <div className='p-4 text-xl'>
            <nav>
                Navbar
            </nav>
            <div className='grid grid-cols-12 gap-3 my-3'>
                {
                projects.map(project => (
                    <div className='col-span-12 p-2 lg:col-span-4 sm:col-span-6 '>
                        <ProjectCard project={project} key={project.name}/>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Projects
