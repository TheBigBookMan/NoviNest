import Footer from "../components/common/Footer/Footer";
import Landing from "../components/features/HomePage/Landing";
import Info from "../components/features/HomePage/Info";
import Differences from "../components/features/HomePage/Differences";
import Services from "../components/features/HomePage/Services";
import BookSession from "../components/common/BookSession/BookSession";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import Contact from "../components/common/Contact/Contact";

const Home = () => {
    const [openBooking, setOpenBooking] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [atBottom, setAtBottom] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const fullHeight = document.body.scrollHeight;
        
            const distanceFromBottom = fullHeight - (scrollY + viewportHeight);
        
            setAtBottom(distanceFromBottom < 150);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className='flex flex-col w-full h-full relative'>
            <AnimatePresence>
                {openBooking && (
                    <BookSession onClose={() => setOpenBooking(false)} />
                )}
            </AnimatePresence>
            
            <AnimatePresence>
                {showButton && !atBottom && (
                    <motion.div
                        key="book-button"
                        onClick={() => setOpenBooking(!openBooking)}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="fixed bottom-2 left-2 z-48 h-[60px] w-[160px] px-2 hover:cursor-pointer flex items-center justify-center rounded-xl bg-[#B25D3E] hover:bg-[#606759]"
                    >
                        <p className="text-white">Book a Session</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <Landing />

            <Info />

            <Differences />

            <Services />

            <Contact />

            <Footer />
        </div>
    )
}

export default Home;