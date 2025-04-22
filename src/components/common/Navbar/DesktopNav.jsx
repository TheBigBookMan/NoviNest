import { Link, useLocation } from "react-router-dom";
import {FacebookLogo, InstagramLogo, LinkedinLogo} from "@phosphor-icons/react";
import logo from '../../../assets/Logo-large.png';

const DesktopNav = () => {
    const {pathname} = useLocation();

    return (
        <div className='hidden md:flex justify-between w-full'>
            <Link to='/'>
                <img src={logo} className='w-20' />
            </Link>

            <div className="flex gap-4 w-full">
                <div className='flex justify-around items-center gap-4 w-full'>
                    <Link to='/'>
                        <p className={`${pathname === '/' ? 'font-bold' : 'text-black'}`}>Home</p>
                    </Link>

                    <Link to='/services'>
                        <p className={`${pathname === '/services' ? 'font-bold' : 'text-black'}`}>Services</p>
                    </Link>

                    <Link to='/about-us'>
                        <p className={`${pathname === '/about-us' ? 'font-bold' : 'text-black'}`}>About Us</p>
                    </Link>

                    <Link to='/resources'>
                        <p className={`${pathname === '/resources' ? 'font-bold' : 'text-black'}`}>Resources</p>
                    </Link>

                    <Link to='/contact'>
                        <p className={`${pathname === '/contact' ? 'font-bold' : 'text-black'}`}>Contact</p>
                    </Link>
                </div>

                <div className='flex gap-1  items-center justify-center '>
                    <a href='facebook.com' target='_blank' >
                        <FacebookLogo size={38} color='#00000' />
                    </a>

                    <a href='linkedin.com' target='_blank' >
                        <LinkedinLogo size={38} color='#00000' />
                    </a>
                    
                    <a href='isntagram.com' target='_blank' >
                        <InstagramLogo size={38} color='#00000' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DesktopNav;