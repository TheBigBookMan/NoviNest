import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon, ListBulletIcon, UserIcon, BookOpenIcon, AtSymbolIcon } from '@heroicons/react/24/outline';
import {FacebookLogo, InstagramLogo, LinkedinLogo, CurrencyDollarSimple} from "@phosphor-icons/react";

const MobileNav = () => {
    const [navOpen, setNavOpen] = useState(false);
    const {pathname} = useLocation();

    const openInstagram = () => {
        const username = 'novinestpsychology';
        const appLink = `instagram://user?username=${username}`;
        const webLink = `https://www.instagram.com/${username}/`;
        window.open(appLink, '_blank');
        setTimeout(() => window.open(webLink, '_blank'), 500);
    };

    return (
        <div className='flex md:hidden  w-full justify-between items-center '>
            <Link to='/'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-xl font-cinzel tracking-widest text-slate-100'>Novi Nest</h1>
                    <p className="text-xs font-cinzel tracking-widest text-slate-100">Psychology</p>
                </div>
            </Link>

            <div className="flex justify-end text-2xl h-full">

                <div onClick={() => setNavOpen(!navOpen)} className=" w-[48px] h-[44px] flex flex-col relative hover:cursor-pointer">
                    <div className={`w-[34px] h-[2px] bg-slate-300 absolute  right-1 transition-all duration-300  ${navOpen ? 'top-5 rotate-45' : 'top-4 '}`}></div>
                    <div className={`w-[34px] h-[2px] bg-slate-300 absolute  right-1 transition-all duration-300 ${navOpen ? 'top-5 -rotate-45' : 'top-6'}`}></div>
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
                            <Link onClick={() => setNavOpen(false)} to="/" className={`py-4 border-b rounded-xl justify-between flex items-center px-4 ${pathname === '/' ? 'bg-[#858D7E] text-white' : 'hover:bg-[#858D7E] hover:text-white'} `} aria-current={pathname === '/' ? 'page' : undefined}>
                                <p>Home</p>
                                <HomeIcon className='w-8' />
                            </Link>

                            <Link onClick={() => setNavOpen(false)} to="/services" className={`py-4 border-b rounded-xl justify-between flex items-center px-4  ${pathname === '/services' ? 'bg-[#858D7E] text-white' : 'hover:bg-[#858D7E] hover:text-white'}`} aria-current={pathname === '/services' ? 'page' : undefined}>
                                <p>Services</p>
                                <ListBulletIcon className='w-8' />
                            </Link>

                            <Link onClick={() => setNavOpen(false)} to="/about-us" className={`py-4 border-b rounded-xl justify-between flex items-center px-4  ${pathname === '/about-us' ? 'bg-[#858D7E] text-white' : 'hover:bg-[#858D7E] hover:text-white'}`} aria-current={pathname === '/about-us' ? 'page' : undefined}>
                                <p>About Us</p>
                                <UserIcon className='w-8' />
                            </Link>

                            <Link onClick={() => setNavOpen(false)} to="/fees" className={`py-4 border-b rounded-xl justify-between flex items-center px-4  ${pathname === '/fees' ? 'bg-[#858D7E] text-white' : 'hover:bg-[#858D7E] hover:text-white'}`} aria-current={pathname === '/fees' ? 'page' : undefined}>
                                <p>Fees</p>
                                <CurrencyDollarSimple size={32} />
                            </Link>
                            
                            <Link onClick={() => setNavOpen(false)} to="/blog" className={`py-4 border-b rounded-xl justify-between flex items-center px-4  ${pathname === '/blog' ? 'bg-[#858D7E] text-white' : 'hover:bg-[#858D7E] hover:text-white'}`} aria-current={pathname === '/blog' ? 'page' : undefined}>
                                <p>Blog</p>
                                <BookOpenIcon className='w-8' />
                            </Link>

                            <Link onClick={() => setNavOpen(false)} to="/contact" className={`py-4 border-b rounded-xl justify-between flex items-center px-4  ${pathname === '/contact' ? 'bg-[#858D7E] text-white' : 'hover:bg-[#858D7E] hover:text-white'}`} aria-current={pathname === '/contact' ? 'page' : undefined}>
                                <p>Contact</p>
                                <AtSymbolIcon className='w-8' />
                            </Link>

                            <div className='flex gap-4 py-4 items-center justify-center w-full'>
                                <a href='https://facebook.com' target='_blank' rel="noopener noreferrer" aria-label="Facebook">
                                    <FacebookLogo size={38} color='#00000' />
                                </a>

                                <a href='https://linkedin.com' target='_blank' rel="noopener noreferrer" aria-label="Linkedin">
                                    <LinkedinLogo size={38} color='#00000' />
                                </a>
                                
                                <a onClick={openInstagram} >
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