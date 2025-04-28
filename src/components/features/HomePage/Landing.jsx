import nestSVG from '../../../assets/nest-svg.svg';
import { motion } from 'framer-motion';

const Landing = () => {
    return (
        <div className='flex flex-col h-screen justify-center items-center  p-4'>
            <div className='flex flex-col gap-4 -mt-60 items-center'>
                <img src={nestSVG} className='h-[220px] w-[280px]' />

                <motion.p
                    initial={{opacity: 0, x: 20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, ease: 'easeOut'}}
                    className='font-playfair text-3xl '>
                        Helping young minds flourish, grow with confidence and step into <i>brighter futures</i>
                </motion.p>
            </div>
        </div>
    )
}

export default Landing;