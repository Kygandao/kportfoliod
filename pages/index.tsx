import { GetServerSidePropsContext, GetStaticPathsContext, GetStaticPropsContext } from 'next'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'

const index = () => {

  return (
    <div>
      <h5>Highly motivated, knowledgeable, versatile, and continually
          improving Full Stack Developer dedicated to practicing Agile
          Methodologies to develop high quality applications.
      </h5>
      <div>
        <h6>What I Offer</h6>
        <div>
          {
            services.map(service => (
              <ServiceCard service={service} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default index

//AS REFERENCE

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