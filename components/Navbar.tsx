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
                <span onClick={()=>{setActiveNav(name)}}>{name}</span>
            </a>
        </Link>
        )
    )
}

const Navbar = () => {
    
    const [activeNav, setActiveNav] = useState<string>('')
    
    const {pathname} = useRouter()

    useEffect(() => {
        if(pathname === '/')setActiveNav('About')
        if(pathname === '/projects')setActiveNav('Projects')
        if(pathname === '/skills')setActiveNav('Skills')
    }, [])
    
    return (
        <div>
            <span className='font-semibold text-green-500'>{activeNav}</span>
            <div className='flex space-x-2 text-red-500'>
                <NavItem 
                    activeNav={activeNav} 
                    setActiveNav={setActiveNav} 
                    name='About' 
                    route='/' />
                <NavItem
                    activeNav={activeNav} 
                    setActiveNav={setActiveNav} 
                    name='Projects' 
                    route='/projects' />
                <NavItem 
                    activeNav={activeNav} 
                    setActiveNav={setActiveNav} 
                    name='Skills' 
                    route='/skills' />
            </div>
        </div>
    )
}

export default Navbar
