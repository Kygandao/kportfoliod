import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <div className='grid grid-cols-12 gap-6 px-5 lg:px-48 my-14'>

    <div className='col-span-12 p-4 text-center bg-white rounded-sm lg:col-span-3'>
      Infobar
    </div>
    
    <div className='col-span-12 bg-white rounded-sm lg:col-span-9'>
      <Component {...pageProps} />
    </div>
    
  </div> 
  )
}

export default MyApp
