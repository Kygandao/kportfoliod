import { GetServerSidePropsContext, GetStaticPathsContext, GetStaticPropsContext } from 'next'
import OfferCard from '../components/OfferCard'
import { services } from '../data'
import { motion } from 'framer-motion'
import { animateDelayFadeUp, animateFadeUp, animateRoute } from '../animation'

const index = () => {

  return (
    <motion.div variants={animateRoute} initial='initial' animate='animate' exit='exit' className='flex flex-col px-6 pt-1'>
      <h5 className='my-3 text-lg text-center'>Tech Savvy and analytical professional with hands-on experience in design, installation, testing, and maintenance of software systems.
      </h5>
      <div className='p-4' style={{marginLeft:'-1rem', marginRight:'-1rem'}}>
        <h6 className='my-3 text-lg font-semibold text-green-900 font-rock dark:text-white'>What I Offer</h6>
        
        <motion.div
        variants={animateDelayFadeUp}
        initial='initial'
        animate='animate'
        className='grid gap-4 lg:grid-cols-2'>
          {
            services.map(service => (
              <motion.div 
              variants={animateFadeUp}
              className='bg-gray-300 rounded-md shadow-xl bg-opacity-60 lg:col-span-1 dark:bg-black' key={service.title}>
                <OfferCard service={service}/>
              </motion.div>
            ))
          }
        </motion.div>
      </div>
    </motion.div>
  )
}

export default index

//AS REFERENCE FOR DATA CALL

//getServerSideProps

// export const getServerSideProps = async (context:GetServerSidePropsContext) => {

//   //request to 'services' data file, then pass them as props
//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log('SERVER DATA', services)

//   return {
//     props:{
//       services: data.services
//     }
//   }
// }

//getting STATIC props for this page

// export const getStaticProps = async (context:GetStaticPropsContext) => {

//   //request to 'services.ts' data file, then pass them as props
//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log('SERVER DATA', services)

//   return {
//     props:{
//       services: data.services
//     }
//   }
// }