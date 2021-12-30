import Infobar from '../components/Infobar'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <div className='grid grid-cols-12 gap-6 px-5 lg:px-40 my-14 md:px-40 sm:px-20'>

    <div className='col-span-12 p-4 text-center bg-gray-200 rounded-sm shadow-2xl lg:col-span-3'>
      <Infobar />
    </div>
    
    <div className='flex flex-col col-span-12 bg-gray-200 rounded-sm shadow-2xl lg:col-span-9'>
      <Navbar />
      <Component {...pageProps} />
    </div>
    
  </div> 
  )
}

export default MyApp
