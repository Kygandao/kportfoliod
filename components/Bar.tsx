import { FunctionComponent } from "react"
import { ISkills } from "../type"
import { motion } from 'framer-motion'

const Bar:FunctionComponent<{
    data:ISkills
}> = ({data:{name, level, Icon}}) => {
    
    const animationVariants = {
        initial: {width: 0},
        animate: {
            width: level,
            transition: {
                duration: 0.75,
                type: 'spring',
                damping: 10,
                stiffness: 100
            },
        }
    }
    return (
        <div className='my-1 text-white bg-gray-300 rounded-full shadow-xl bg-opacity-60 dark:bg-gray-600'>
            <motion.div id='level' className='flex items-center px-4 py-1 bg-green-900 rounded-full dark:bg-black'
            style={{width: level}}
            variants={animationVariants}
            initial='initial'
            animate='animate'>
                <Icon className='mr-2 space-x-3' />
                {name}
            </motion.div>
        </div>
    )
}

export default Bar
