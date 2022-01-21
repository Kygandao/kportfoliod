import Image from 'next/image'
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'
import { AiOutlinePaperClip } from 'react-icons/ai'

import{ useTheme } from 'next-themes'

const Infobar = () => {

    const {theme, setTheme} = useTheme();

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

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
            <h1 className='flex items-center justify-center my-3 lg:text-2xl font-rock md:text-2xl '>
                <span className='mr-1'>Kygan</span>
                <span className='text-green-900 dark:text-green-700'>Dao</span>
            </h1>
            <p className='px-2 py-1 my-3 text-sm bg-gray-300 rounded-xl dark:bg-gray-800'>Web Developer</p>
            <a href='/resume/KDResume1.22.pdf' download='KyganDaoResume.pdf' className='flex items-center justify-center px-2 py-1 my-3 text-sm bg-gray-300 rounded-xl hover:bg-gray-400 dark:bg-gray-800 dark:hover:bg-gray-600'><AiOutlinePaperClip className='w-4' />Download Resume</a>
            
            <div className='flex w-9/12 mx-auto my-5 text-green-900 justify-evenly md:w-full dark:text-white'>
                <a href='https://github.com/Kygandao' target='_blank' rel='noreferrer noopener'><AiOutlineGithub className='w-10 h-10 cursor-pointer hover:text-black' /></a>
                <a href='https://www.linkedin.com/in/kygan-dao/' target='_blank' rel='noreferrer noopener'><AiOutlineLinkedin className='w-10 h-10 cursor-pointer hover:text-black' /></a>
            </div>
            
            {/* LOCATION */}
            <div className='py-4 my-5 bg-gray-300 dark:bg-gray-800' style={{marginLeft:'-.5rem', marginRight:'-.5rem'}}>
                <div className='flex items-center justify-center'>
                    <MdLocationOn />
                    <span className='px-2 text-sm'>Portland, Oregon</span>
                </div>
                <p className='my-1 text-sm'>kygandao23@gmail.com</p>
                <p className='my-1 text-sm'>503.440.8672</p>
            </div>
            {/*click to open system email */}
            <button onClick={sendEmail} className='w-8/12 px-3 py-1 my-1 text-white bg-gradient-to-r from-gray-800 to-green-900 rounded-xl hover:text-gray-400 hover:bg-black'>Email Me</button>
            <button onClick={changeTheme} className='w-8/12 px-3 py-1 my-1 text-white bg-gradient-to-r from-gray-800 to-green-900 rounded-xl hover:text-gray-400'>Change Theme</button>
        </div>
    )
}

export default Infobar

//TODO: CREATE TOGGLE THEME BUTTON FUNCTIONALITY??

