import nestSVG from '../../../assets/nest-svg.svg';
import { motion } from 'framer-motion';

const Landing = () => {
    return (
        <section  className='flex flex-col h-screen justify-center items-center  p-4' aria-labelledby="landing-section">
            <div className='flex flex-col gap-4 -mt-60 items-center'>
                <img src={nestSVG} alt="Novi Nest Psychology logo" className='h-[220px] w-[280px]' />

                <motion.h1
                    initial={{opacity: 0, x: 20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, ease: 'easeOut'}}
                    className='font-playfair text-3xl '>
                        Helping young minds flourish, grow with confidence and step into <i>brighter futures</i>
                </motion.h1>
            </div>
        </section>
    )
}

export default Landing;