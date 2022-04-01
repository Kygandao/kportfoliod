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
            <Image src='/images/GITHUBsmpfp.png' alt='profile picture' className='mx-auto rounded-full' width={128} height={175} priority layout='intrinsic' />
            
            <h1 className='flex items-center justify-center my-3 lg:text-2xl font-rock md:text-2xl '>
                <span className='mr-1 text-black dark:text-white'>Kygan</span>
                <span className='text-green-900 dark:text-white'>Dao</span>
            </h1>
            <p className='px-2 py-1 my-3 text-sm bg-gray-300 shadow-xl bg-opacity-40 rounded-xl dark:bg-black' style={{marginLeft:'-.5rem', marginRight:'-.5rem'}}>Full Stack Developer</p>
            
            <div className='px-2 py-2 my-3 bg-gray-300 shadow-xl bg-opacity-40 dark:bg-black rounded-xl' style={{marginLeft:'-.5rem', marginRight:'-.5rem'}}>
                <div className='flex items-center justify-center'>
                    <MdLocationOn />
                    <span className='px-2 text-sm'>Portland, Oregon</span>
                </div>
                <p className='my-1 text-sm'>kygandao23@gmail.com</p>
                <p className='my-1 text-sm'>503.440.8672</p>
            </div>
            
            <div className='flex w-9/12 mx-auto my-5 text-green-900 justify-evenly md:w-full dark:text-white'>
                <a href='https://github.com/Kygandao' target='_blank' rel='noreferrer noopener'><AiOutlineGithub className='w-10 h-10 cursor-pointer hover:text-green-600 dark:hover:text-gray-800' /></a>
                <a href='https://www.linkedin.com/in/kygan-dao/' target='_blank' rel='noreferrer noopener'><AiOutlineLinkedin className='w-10 h-10 cursor-pointer hover:text-green-600 dark:hover:text-gray-800' /></a>
            </div>
            <div className='flex flex-col items-center'>
            <button onClick={sendEmail} className='w-8/12 px-3 py-1 my-1 text-white bg-green-900 shadow-xl rounded-xl hover:bg-green-700 dark:bg-black dark:hover:bg-gray-800'>Email Me</button>
            
            <a href='/resume/KyganDaoResume4.1.pdf' download='KyganDaoResume.pdf' className='w-8/12 px-3 py-1 my-1 text-white bg-green-900 shadow-xl rounded-xl hover:bg-green-700 dark:bg-black dark:hover:bg-gray-800'>Download Resume</a>
            
            <button onClick={changeTheme} className='w-8/12 px-3 py-1 my-1 text-white bg-green-900 shadow-xl rounded-xl hover:bg-green-700 dark:bg-black dark:hover:bg-gray-800'>Change Theme</button>
            </div>
        </div>
    )
}

export default Infobar