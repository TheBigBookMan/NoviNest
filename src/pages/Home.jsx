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
        
            const distanceFromBottom = Math.max(0, fullHeight - (scrollY + viewportHeight));
        
            setAtBottom(distanceFromBottom < 150);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className='flex flex-col w-full h-full relative bg-[#F5F5F3]'>
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
                        className="fixed bottom-6 md:bottom-12 left-2 md:left-12 z-50 h-[60px] w-fit text-sm md:text-base px-2 hover:cursor-pointer flex items-center justify-center rounded-xl bg-[#404f3f] hover:bg-[#3a4048]"
                    >
                        <p className="text-white" aria-label="Book an assessment button">Book an Assessment</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <Landing />

            <div className="relative w-full py-16 bg-[#F5F5F3]  overflow-hidden p-6 lg:px-40 ">
                <video
                    controls
                    playsInline
                    muted
                    preload="auto"
                    className="w-full h-auto rounded-2xl shadow-xl"
                    >
                    <source src="novi-intro.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <Info />

            <Differences />
                
            <div className="px-6 py-12 flex justify-center md:hidden">
                <div className="relative w-full max-w-xs  bg-[#C4D7B2] rounded-t-[160px] rounded-b-2xl shadow-xl overflow-hidden aspect-w-4 aspect-h-3">
                    <img 
                        src="ksenia-drawing.jpg" 
                        alt="Portrait of Ksenia writing - founder of Novi Nest Psychology"
                        className="w-full h-full object-cover rounded-t-[160px]  shadow-lg"
                    />
                </div>
            </div>

            <Services />

            <Contact />

            <Footer />
        </section>
    )
}

export default Home;