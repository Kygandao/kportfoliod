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
            <h1 className='my-3 text-3xl font-medium tracking-wider'>
                <span>Kygan</span>
                Dao
            </h1>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-full'>Web Developer</p>
            <a href='' download='nameOfFile' className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full'><IoIosPaper className='w-6 h-6' />Download Resume</a>
            {/* ADD ICONS FOR LINKED IN AND GITHUB */}
            <div className='flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full'>
                <a href=''><AiOutlineGithub className='w-10 h-10 cursor-pointer' /></a>
                <a href=''><AiOutlineLinkedin className='w-10 h-10 cursor-pointer' /></a>
            </div>
            
            {/* LOCATION */}
            <div>
                <div>
                    {/*add location icon here */}
                    <MdLocationOn />
                    <span>Portland, Oregon</span>
                </div>
                <p>kygandao23@gmail.com</p>
                <p>503.440.8672</p>
            </div>
            {/*click to open system email */}
            <button>Email Me</button>
            <button>Toggle Theme</button>
        </div>
    )
}

export default Infobar
