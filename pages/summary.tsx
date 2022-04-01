import Bar from "../components/Bar"
import { languages, tools } from "../data"
import { animate, motion } from 'framer-motion'
import { animateFadeUp, animateRoute } from "../animation"

const summary = () => {

    
    
    return (
        <motion.div variants={animateRoute} initial='initial' animate='animate' exit='exit' className='px-6 py-2 '>
            <div className='grid gap-5 px-4 pt-1 md:grid-cols-2 dark:bg-gray-900 dark:bg-opacity-0' style={{marginLeft:'-1rem', marginRight:'-1rem'}}>
                <motion.div
                variants={animateFadeUp}
                initial='initial'
                animate='animate'
                id='education'>
                    <h5 className='my-2 text-lg font-semibold text-green-900 font-rock dark:text-white'>Education</h5>
                    <div>
                        <div className='p-1 my-1 space-x-5 bg-gray-300 rounded-md shadow-xl dark:bg-black bg-opacity-60'>
                            <h5 className='my-1 font-semibold'>Java Development</h5>
                            <p className='italic'>Southern Methodist University</p>
                        </div>
                        <div className='p-1 my-1 space-x-5 bg-gray-300 rounded-md shadow-xl dark:bg-black bg-opacity-60'>
                            <h5 className='my-1 font-semibold'>Web Development</h5>
                            <p className='italic'>University of Oregon</p>
                        </div>
                        <div className='p-1 my-1 space-x-5 bg-gray-300 rounded-md shadow-xl dark:bg-black bg-opacity-60'>
                            <h5 className='my-1 font-semibold'>Graphic Design</h5>
                            <p className='italic'>The Art Institutes International Minnesota</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                variants={animateFadeUp}
                initial='initial'
                animate='animate'
                id='experience'>
                    <h5 className='my-2 text-lg font-semibold text-green-900 font-rock dark:text-white'>Work History</h5>
                    <div>
                        <div className='p-1 my-1 space-x-5 bg-gray-300 rounded-md shadow-xl dark:bg-black bg-opacity-60'>
                            <h5 className='my-1 font-semibold'>Insurance Account Representative</h5>
                            <p className='italic'>State Farm Insurance: April 2016 - Current</p>
                        </div>

                        <div className='p-1 my-1 space-x-5 bg-gray-300 rounded-md shadow-xl dark:bg-black bg-opacity-60'>
                            <h5 className='my-1 font-semibold'>Digital Graphics & Print Designer</h5>
                            <p className='italic'>Kygan Dao Art: April 2013 - Current</p>
                        </div>
                        
                        <div className='p-1 my-1 space-x-5 bg-gray-300 rounded-md shadow-xl dark:bg-black bg-opacity-60'>
                            <h5 className='my-1 font-semibold'>Lead Utility Locator</h5>
                            <p className='italic'>USIC, LLC: January 2012 - April 2016</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className='grid gap-5 md:grid-cols-2'>
                <div id='languages'>
                    <h5 className='my-2 text-lg font-semibold text-green-900 font-rock dark:text-white'>Languages & Frameworks</h5>
                    <div className='my-2'>
                        {
                            languages.map(language => (
                                <Bar data={language} key={language.name} />
                            ))
                        }
                    </div>
                </div>
                <div id='tools'>
                <h5 className='my-2 text-lg font-semibold text-green-900 font-rock dark:text-white'>Tools & Software</h5>
                    <div className='my-2'>
                        {
                            tools.map(tool => (
                                <Bar data={tool} key={tool.name} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default summary
