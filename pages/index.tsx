import { GetServerSidePropsContext, GetStaticPathsContext, GetStaticPropsContext } from 'next'
import OfferCard from '../components/OfferCard'
import { services } from '../data'

const index = () => {

  return (
    <div className='flex flex-col px-6 pt-1'>
      <h5 className='my-3 font-medium text-center'>Highly motivated, knowledgeable, versatile, and continually
          improving Full Stack Developer dedicated to practicing Agile Methodologies to develop high quality applications.
      </h5>
      <div className='p-4 mt-5 bg-gray-300 dark:bg-gray-800' style={{marginLeft:'-1rem', marginRight:'-1rem'}}>
        <h6 className='my-3 text-lg font-semibold text-green-900 font-rock dark:text-white'>What I Offer</h6>
        <div className='grid gap-4 lg:grid-cols-2'>
          {
            services.map(service => (
              <div className='bg-gray-200 rounded-md lg:col-span-1 dark:bg-gray-900'>
                <OfferCard service={service} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
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