import { useEffect } from 'react';
import Navbar from './components/common/Navbar/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import {Routes, Route, useLocation } from 'react-router-dom';
import Fees from './pages/Fees';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [pathname]);

    return null;
};

function App() {
    return (
        <main className='flex flex-col min-w-screen min-h-screen text-[#333333] font-poppins bg-white'>
            <Navbar />
            <ScrollToTop />
            
            <Routes>

                <Route path='/' index element={<Home title="Home - Novi Nest" description="Welcome to Novi Nest" />} />
                <Route path='/services' element={<Services title="Services - Novi Nest" description="Services Novi Nest offers" />} />
                <Route path='/about-us' element={<AboutUs title="About Us - Novi Nest" description="Who Novi Nest is" />} />
                <Route path='/blog' element={<Blog title="Blog - Novi Nest" description="Look at our blog posts" />} />
                <Route path='/contact' element={<Contact title="Contact - Novi Nest" description="How to contact Novi Nest" />} />
                <Route path='/fees' element={<Fees title="Fees - Novi Nest" description="Fees for Novi Nest services" />} />

            </Routes>
        </main>
    )
}

export default App;