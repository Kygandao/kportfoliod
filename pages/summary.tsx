import Bar from "../components/Bar"
import { languages, tools } from "../data"

const summary = () => {
    return (
        <div className='px-6 py-2 '>
            <div className='grid gap-5 px-4 pt-1 bg-gray-300 md:grid-cols-2 dark:bg-gray-900' style={{marginLeft:'-1rem', marginRight:'-1rem'}}>
                <div id='education'>
                    <h5 className='my-2 text-lg font-semibold text-green-900 font-rock dark:text-white'>Education</h5>
                    <div>
                        <div className='p-1 my-1 space-x-5 bg-gray-200 rounded-md dark:bg-gray-800'>
                            <h5 className='my-1 font-semibold'>Cognizant ProActive Java Boot Camp</h5>
                            <p>Southern Methodist University - Expected March 2022</p>
                        </div>
                        <div className='p-1 my-1 space-x-5 bg-gray-200 rounded-md dark:bg-gray-800'>
                            <h5 className='my-1 font-semibold'>Web Development: Boot Camp Certificate</h5>
                            <p>University of Oregon</p>
                        </div>
                        <div className='p-1 my-1 space-x-5 bg-gray-200 rounded-md dark:bg-gray-800'>
                            <h5 className='my-1 font-semibold'>Graphic Design</h5>
                            <p>The Art Institutes International Minnesota</p>
                        </div>
                    </div>
                </div>
                <div id='experience'>
                    <h5 className='my-2 text-lg font-semibold text-green-900 font-rock dark:text-white'>Work History</h5>
                    <div>
                        <div className='p-1 my-1 space-x-5 bg-gray-200 rounded-md dark:bg-gray-800'>
                            <h5 className='my-1 font-semibold'>Insurance Account Representative</h5>
                            <p>State Farm Insurance 2016 April - Current</p>
                        </div>
                        <div className='p-1 my-1 space-x-5 bg-gray-200 rounded-md dark:bg-gray-800'>
                            <h5 className='my-1 font-semibold'>Lead Utility Locator</h5>
                            <p>USIC, LLC 2012 January - 2016 April</p>
                        </div>
                    </div>
                </div>
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
        </div>
    )
}

export default summary
