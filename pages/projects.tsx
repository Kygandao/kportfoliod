import { motion } from "framer-motion"
import { useState } from "react"
import { animateDelayFadeUp, animateFadeUp, animateRoute } from "../animation"
import ProjectCard from "../components/ProjectCard"
import ProjectsNavbar from "../components/ProjectsNavbar"
import { projects } from "../data"
import { Category } from "../type"

const Projects = () => {
    const [projectsFilter, setProjectsFilter] = useState(projects);
    const [active, setActive] = useState('All')
    const [showProjectDetails, setShowProjectDetails] = useState<number | null>(null)
    
    const handleProjectFilter = (category:Category | 'All') => {
        if(category === 'All') {
            setProjectsFilter(projects);
            setActive(category)
            return;
        }
        const newProjectsArr = projects.filter(project => project.category.includes(category));
        setProjectsFilter(newProjectsArr);
        setActive(category);
    }
    
    return (
        <motion.div variants={animateRoute} initial='initial' animate='animate' exit='exit' className='p-4 px-5 py-2 overflow-y-scroll text-xl' style={{height:'65vh' }}>
            <ProjectsNavbar handleProjectFilter={handleProjectFilter} active={active} />
            
            <motion.div
            variants={animateDelayFadeUp}
            initial='initial'
            animate='animate'
            className='relative grid grid-cols-12 gap-3 my-3'>
                {
                projects.map(project => (
                    <motion.div
                    variants={animateFadeUp}
                    key={project.name}
                    className='col-span-12 p-2 bg-gray-300 rounded-lg dark:bg-gray-800 lg:col-span-4 sm:col-span-6'>
                        <ProjectCard
                        project={project}
                        showProjectDetails={showProjectDetails}
                        setShowProjectDetails={setShowProjectDetails}/>
                    </motion.div>
                ))
                }
            </motion.div>
        </motion.div>
    )
}

export default Projects
