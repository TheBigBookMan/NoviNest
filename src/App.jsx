import { useEffect } from 'react';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';
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
        <div className='flex flex-col min-w-screen min-h-screen text-[#333333] font-poppins'>
            <Navbar />
            <ScrollToTop />
            
            <Routes>

                <Route path='/' index element={<Home />} />
                <Route path='/services' element={<Services />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/fees' element={<Fees />} />

            </Routes>
        </div>
    )
}

export default App;