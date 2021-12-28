import Image from 'next/image'
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'
import { IoIosPaper } from 'react-icons/Io'

const Infobar = () => {
    return (
        <div>
            <Image
            src='/GITHUBsmpfp.png'
            alt='profile picture'
            width={128}
            height={175}
            priority
            className='mx-auto rounded-full'
            />
            <h1 className='my-3 text-3xl tracking-wider font-rock'>
                <span className='text-green-800 mr-1'>Kygan</span>
                <span>Dao</span>
            </h1>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-xl'>Web Developer</p>
            <a href='' download='nameOfFile' className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-xl'><IoIosPaper className='w-4' />Download Resume</a>
            
            <div className='flex w-9/12 mx-auto my-5 text-green-800 justify-evenly md:w-full'>
                <a href=''><AiOutlineGithub className='w-10 h-10 cursor-pointer' /></a>
                <a href=''><AiOutlineLinkedin className='w-10 h-10 cursor-pointer' /></a>
            </div>
            
            {/* LOCATION */}
            <div className='my-5 py-4 bg-gray-200' style={{marginLeft:'-1rem', marginRight:'-1rem'}}>
                <div className='flex items-center justify-center'>
                    <MdLocationOn />
                    <span className='px-2'>Portland, Oregon</span>
                </div>
                <p className='my-1'>kygandao23@gmail.com</p>
                <p className='my-1'>503.440.8672</p>
            </div>
            {/*click to open system email */}
            <button className='bg-green-800 w-8/12 rounded-xl py-1 px-3 text-white my-1'>Email Me</button>
            <button className='bg-green-800 w-8/12 rounded-xl py-1 px-3 text-white my-1'>Toggle Theme</button>
        </div>
    )
}

export default Infobar
