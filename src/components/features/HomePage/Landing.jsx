import { motion } from 'framer-motion';

const Landing = () => {
    return (
        <article 
            id="landing-article" 
            className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden -mt-20" 
            aria-labelledby="landing-heading"
        >
            <img 
                src="ksenia-sitting.jpg"
                alt="Novi Nest founder Ksenia sitting on a backdrop" 
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

            <motion.h1
                id="landing-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="relative z-20 font-playfair text-3xl md:text-5xl text-left -mt-20 text-slate-100 px-4 md:px-40"
            >
                Helping young minds flourish, with assessments that guide <i>brighter futures</i>
            </motion.h1>
        </article>
    );
};

export default Landing;