import Infobar from '../components/Infobar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <div className='grid grid-cols-12 gap-6 px-5 lg:px-40 my-14 md:px-40 sm:px-20'>

    <div className='col-span-12 p-4 text-center bg-gray-200 rounded-sm lg:col-span-3'>
      <Infobar />
    </div>
    
    <div className='col-span-12 bg-gray-200 rounded-sm lg:col-span-9'>
      <Component {...pageProps} />
    </div>
    
  </div> 
  )
}

export default MyApp
