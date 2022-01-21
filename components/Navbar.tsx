import { FunctionComponent, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavItem:FunctionComponent<{
    activeNav: string,
    setActiveNav: Function,
    name: string,
    route: string
}> = ({activeNav, setActiveNav, name, route}) => {
    return (
        activeNav !== name && (
            <Link href={route}>
            <a>
                <span className=' hover:text-green-800 hover:underline dark:text-white' onClick={()=>{setActiveNav(name)}}>{name}</span>
            </a>
        </Link>
        )
    )
}

const Navbar = () => {
    
    const [activeNav, setActiveNav] = useState<string>('')
    
    const { pathname } = useRouter()

    useEffect(() => {
        if(pathname === '/')setActiveNav('About Me')
        if(pathname === '/projects')setActiveNav('Projects')
        if(pathname === '/summary')setActiveNav('Summary')
    }, [])
    
    return (
        <div className='flex justify-between px-3 py-2 my-2'>
            <span className='text-xl font-semibold text-green-900 border-b-2 border-green-900 dark:text-white dark:border-white'>{activeNav}</span>
            <div className='flex space-x-2 text-gray-700'>
                <NavItem 
                    activeNav={activeNav} 
                    setActiveNav={setActiveNav} 
                    name='About Me' 
                    route='/' />
                <NavItem
                    activeNav={activeNav} 
                    setActiveNav={setActiveNav} 
                    name='Projects' 
                    route='/projects' />
                <NavItem 
                    activeNav={activeNav} 
                    setActiveNav={setActiveNav} 
                    name='Summary' 
                    route='/summary' />
            </div>
        </div>
    )
}

export default Navbar
