import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../../../assets/Logo-large.png';
import { Link, useLocation } from "react-router-dom";
import { HomeIcon, ListBulletIcon, UserIcon, BookOpenIcon, AtSymbolIcon } from '@heroicons/react/24/outline';
import {FacebookLogo, InstagramLogo, LinkedinLogo} from "@phosphor-icons/react";

const MobileNav = () => {
    const [navOpen, setNavOpen] = useState(false);
    const {pathname} = useLocation();

    return (
        <div className='flex md:hidden  w-full justify-between'>
            <Link to='/'>
                <img src={logo} className='w-12 h-12 rounded-full' />
            </Link>

            <div className="flex justify-end text-2xl">

                <div onClick={() => setNavOpen(!navOpen)} className="border-2 border-slate-700 w-[48px] h-[44px] flex flex-col relative hover:cursor-pointer">
                    <div className={`w-[34px] h-[2px] bg-black absolute  right-1 transition-all duration-300  ${navOpen ? 'top-5 rotate-45' : 'top-4 '}`}></div>
                    <div className={`w-[34px] h-[2px] bg-black absolute  right-1 transition-all duration-300 ${navOpen ? 'top-5 -rotate-45' : 'top-6'}`}></div>
                </div>

                <AnimatePresence>
                    {navOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="flex flex-col border-2 h-auto w-full absolute top-20 bg-white shadow-lg p-4 z-50 right-0"
                        >
                            <Link onClick={() => setNavOpen(false)} to="/" className={`py-6 border-b justify-between flex items-center pr-4 ${pathname === '/' ? 'bg-slate-300' : 'hover:bg-slate-300'} `}>
                                <p>Home</p>
                                <HomeIcon className='w-8' />
                            </Link>

                            <Link onClick={() => setNavOpen(false)} to="/services" className={`py-6 border-b justify-between flex items-center pr-4 hover:bg-slate-300 ${pathname === '/services' ? 'bg-slate-300' : 'hover:bg-slate-300'}`}>
                                <p>Services</p>
                                <ListBulletIcon className='w-8' />
                            </Link>

                            <Link onClick={() => setNavOpen(false)} to="/about-us" className={`py-6 border-b justify-between flex items-center pr-4 hover:bg-slate-300 ${pathname === '/about-us' ? 'bg-slate-300' : 'hover:bg-slate-300'}`}>
                                <p>About Us</p>
                                <UserIcon className='w-8' />
                            </Link>
                            
                            <Link onClick={() => setNavOpen(false)} to="/resources" className={`py-6 border-b justify-between flex items-center pr-4 hover:bg-slate-300 ${pathname === '/resources' ? 'bg-slate-300' : 'hover:bg-slate-300'}`}>
                                <p>Resources</p>
                                <BookOpenIcon className='w-8' />
                            </Link>

                            <Link onClick={() => setNavOpen(false)} to="/contact" className={`py-6 border-b justify-between flex items-center pr-4 hover:bg-slate-300 ${pathname === '/contact' ? 'bg-slate-300' : 'hover:bg-slate-300'}`}>
                                <p>Contact</p>
                                <AtSymbolIcon className='w-8' />
                            </Link>

                            <div className='flex gap-4 py-4 items-center justify-center w-full'>
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
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default MobileNav;