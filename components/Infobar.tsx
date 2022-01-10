import Image from 'next/image'
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'
import { AiOutlinePaperClip } from 'react-icons/ai'

const Infobar = () => {

    const sendEmail = () => {
        window.open('mailto:kygandao23@gmail.com')
    }

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
            <h1 className='my-3 tracking-wider lg:text-xl font-rock md:text-2xl sm:text-2xl'>
                <span className='mr-1'>Kygan</span>
                <span className='text-green-900'>Dao</span>
            </h1>
            <p className='px-2 py-1 my-3 text-sm bg-gray-300 rounded-xl'>Web Developer</p>
            <a href='' download='nameOfFile' className='flex items-center justify-center px-2 py-1 my-3 text-sm bg-gray-300 rounded-xl hover:bg-gray-400'><AiOutlinePaperClip className='w-4' />Download Resume</a>
            
            <div className='flex w-9/12 mx-auto my-5 text-green-900 justify-evenly md:w-full'>
                <a href='https://github.com/Kygandao' target='_blank' rel='noreferrer noopener'><AiOutlineGithub className='w-10 h-10 cursor-pointer hover:text-black' /></a>
                <a href='https://www.linkedin.com/in/kygan-dao/' target='_blank' rel='noreferrer noopener'><AiOutlineLinkedin className='w-10 h-10 cursor-pointer hover:text-black' /></a>
            </div>
            
            {/* LOCATION */}
            <div className='py-4 my-5 bg-gray-300' style={{marginLeft:'-1rem', marginRight:'-1rem'}}>
                <div className='flex items-center justify-center'>
                    <MdLocationOn />
                    <span className='px-2 text-sm'>Portland, Oregon</span>
                </div>
                <p className='my-1 text-sm'>kygandao23@gmail.com</p>
                <p className='my-1 text-sm'>503.440.8672</p>
            </div>
            {/*click to open system email */}
            <button className='w-8/12 px-3 py-1 my-1 text-white bg-gradient-to-r from-gray-800 to-green-900 rounded-xl hover:text-gray-400 hover:bg-black' onClick={sendEmail}>Email Me</button>
            <button className='w-8/12 px-3 py-1 my-1 text-white bg-gradient-to-r from-gray-800 to-green-900 rounded-xl hover:text-gray-400'>Toggle Theme</button>
        </div>
    )
}

export default Infobar

//TODO: CREATE TOGGLE THEME BUTTON FUNCTIONALITY??


