import Bar from "../components/Bar"
import { languages } from "../data"

const summary = () => {
    return (
        <div className='px-6 py-2'>
            <div className='grid gap-5 md:grid-cols-2'>
                <div id='education'>
                    <h5 className='my-2 text-lg font-semibold text-green-900 font-rock'>Education</h5>
                    <div>
                        <h5 className='my-2 text-lg font-semibold'>Cognizant ProActive Java Boot Camp</h5>
                        <p className='my-1'>Southern Methodist University - Expected March 2022</p>
                        <h5 className='my-2 text-lg font-semibold'>Boot Camp Certificate: Web Development</h5>
                        <p className='my-1'>University of Oregon</p>
                        <h5 className='my-2 text-lg font-semibold'>Graphic Design</h5>
                        <p className='my-1'>The Art Institutes International Minnesota</p>
                    </div>
                </div>
                <div id='experience'>
                    <h5 className='my-2 text-lg font-semibold text-green-900 font-rock'>Work History</h5>
                    <div>
                        <h5 className='my-2 text-lg font-semibold'>Insurance Account Representative</h5>
                        <p className='my-1'>State Farm Insurance 2016 April - Current</p>
                        <h5 className='my-2 text-lg font-semibold'>Lead Utility Locator</h5>
                        <p className='my-1'>USIC, LLC 2012 January - 2016 April</p>
                    </div>
                </div>
            </div>

            <div className='grid gap-5 md:grid-cols-2'>
                <div id='tools'>
                    <h5 className='my-2 text-lg font-semibold text-green-900 font-rock'>Languages & Frameworks</h5>
                    <div className='my-2'>
                        {
                            languages.map(language => (
                                <Bar data={language} key={language.name} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default summary
