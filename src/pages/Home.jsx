import Footer from "../components/common/Footer/Footer";
import Landing from "../components/features/HomePage/Landing";
import Info from "../components/features/HomePage/Info";
import Differences from "../components/features/HomePage/Differences";
import Services from "../components/features/HomePage/Services";
import BookSession from "../components/common/BookSession/BookSession";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
    const [openBooking, setOpenBooking] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <div className='flex flex-col w-full h-full p-4 relative'>
            <AnimatePresence>
                {openBooking && (
                    <BookSession onClose={() => setOpenBooking(false)} />
                )}
            </AnimatePresence>

            <div onClick={() => setOpenBooking(!openBooking)} className="fixed bottom-2 left-2 z-48 w-[120px] h-[60px] ">
                {showButton && (
                    <motion.div
                        
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full w-full  hover:cursor-pointer flex items-center justify-center rounded-xl ${openBooking ? 'bg-[#606759]' : 'bg-[#858D7E] hover:bg-[#606759]'}`}
                    >
                        <p className="text-white">Book Session</p>
                    </motion.div>
                )}
            </div>

            <Landing />

            <Info />

            <Differences />

            <Services />

            <Footer />
        </div>
    )
}

export default Home;