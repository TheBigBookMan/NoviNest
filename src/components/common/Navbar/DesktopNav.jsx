import { Link, useLocation } from "react-router-dom";
import {FacebookLogo, InstagramLogo, LinkedinLogo} from "@phosphor-icons/react";

const DesktopNav = () => {
    const {pathname} = useLocation();

    return (
        <div className='hidden md:flex justify-between w-full'>
            <Link to='/' className='flex flex-col items-center justify-center min-w-[120px]'>
                {/* <img src="nest-svg.svg" className='w-16' /> */}
                <p className='text-lg font-cinzel tracking-widest text-slate-100 '>Novi Nest</p>
                <p className='text-xs font-cinzel tracking-widest text-slate-100 '>Psychology</p>
            </Link>

            <div className="flex gap-4 w-full">
                <div className='flex justify-around items-center gap-4 w-full'>
                    <Link to='/'>
                        <p className={`transition ${pathname === '/' 
                            ? 'underline underline-offset-2 decoration-slate-300 text-slate-300 font-bold' 
                            : 'text-white hover:text-slate-300'}`}>
                            Home
                        </p>
                    </Link>

                    <Link to='/services'>
                        <p className={`transition ${pathname === '/services' 
                            ? 'underline underline-offset-2 decoration-slate-300 text-slate-300 font-bold' 
                            : 'text-white hover:text-slate-300'}`}>
                            Services
                        </p>
                    </Link>

                    <Link to='/about-us'>
                        <p className={`transition ${pathname === '/about-us' 
                            ? 'underline underline-offset-2 decoration-slate-300 text-slate-300 font-bold' 
                            : 'text-white hover:text-slate-300'}`}>
                            About Us
                        </p>
                    </Link>

                    <Link to='/fees'>
                        <p className={`transition ${pathname === '/fees' 
                            ? 'underline underline-offset-2 decoration-slate-300 text-slate-300 font-bold' 
                            : 'text-white hover:text-slate-300'}`}>
                            Fees
                        </p>
                    
                    </Link>

                    <Link to='/blog'>
                        <p className={`transition ${pathname === '/blog' 
                            ? 'underline underline-offset-2 decoration-slate-300 text-slate-300 font-bold' 
                            : 'text-white hover:text-slate-300'}`}>
                            Blog
                        </p>
                    </Link>

                    <Link to='/contact'>
                        <p className={`transition ${pathname === '/contact' 
                            ? 'underline underline-offset-2 decoration-slate-300 text-slate-300 font-bold' 
                            : 'text-white hover:text-slate-300'}`}>
                            Contact
                        </p>
                    </Link>
                </div>

                <div className='flex gap-1  items-center justify-center '>
                    <a href='https://www.facebook.com/share/192fXWnwC3/?mibextid=wwXIfr' target='_blank' >
                        <FacebookLogo size={38} color='#ffffff'  />
                    </a>

                    <a href='https://www.linkedin.com/company/novi-nest-psychology/' target='_blank' >
                        <LinkedinLogo size={38} color='#ffffff' />
                    </a>
                    
                    <a href='https://www.instagram.com/novinestpsychology/' target='_blank' >
                        <InstagramLogo size={38} color='#ffffff' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DesktopNav;