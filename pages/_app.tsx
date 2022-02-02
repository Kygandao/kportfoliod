import Infobar from '../components/Infobar'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router}) {
  return (
    <ThemeProvider attribute='class'>
      <div className='grid grid-cols-12 gap-6 px-5 lg:px-40 my-14 md:px-40 sm:px-20'>

        <div className='col-span-12 p-4 text-center bg-gray-200 rounded-lg shadow-2xl bg-opacity-80 lg:col-span-3 dark:bg-black dark:bg-opacity-80'>
        <Infobar />
        </div>
        
        <div className='flex flex-col col-span-12 bg-gray-200 rounded-lg shadow-2xl bg-opacity-80 lg:col-span-9 dark:bg-black dark:bg-opacity-80'>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route}/>
        </AnimatePresence>
        
        </div>
        
    
      </div> 
    </ThemeProvider>
  )
}

export default MyApp
