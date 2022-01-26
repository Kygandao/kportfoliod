import ProjectCard from "../components/ProjectCard"
import { projects } from "../data"

const Projects = () => {
    return (
        <div className='p-4 px-5 py-2 overflow-y-scroll text-xl' style={{height:'65vh' }}>
            <nav>
                Navbar
            </nav>
            <div className='relative grid grid-cols-12 gap-3 my-3'>
                {
                projects.map(project => (
                    <div className='col-span-12 p-2 bg-gray-300 rounded-lg dark:bg-gray-800 lg:col-span-4 sm:col-span-6'>
                        <ProjectCard project={project} key={project.name}/>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Projects
