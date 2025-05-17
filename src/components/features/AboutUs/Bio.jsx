import portrait from '/public/portrait.jpg';
import { motion } from "framer-motion";

const Bio = () => {
    return (
        <article id="bio-article" aria-labelledby="bio-heading" className='flex flex-col gap-8 p-4'>
            <div className="flex flex-col items-center gap-8 mb-12">
                <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-cinzel text-[#B25D3E] leading-tight">
                        Hi!<br/> I'm Ksenia,
                    </h2>
                    <p className="text-lg font-playfair text-[#4B5563] leading-relaxed mt-2">
                        a clinical psychologist and the founder of Novi Nest Psychology.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="relative w-full max-w-xs md:max-w-md rounded-2xl "
                >
                    <img 
                        src={portrait} 
                        className="rounded-2xl shadow-xl  w-full"
                        alt="Portrait of Ksenia - founder of Novi Nest Psychology"
                    />
                </motion.div>
            </div>

            <div className='flex flex-col gap-12 text-sm'>
                <div className='flex flex-col'>
                    <p className="text-base italic leading-relaxed">
                        I started this practice because I am deeply committed to helping families make sense of the unique minds of the children they care for. My goal is to empower young people to recognise and embrace their strengths, building the confidence and understanding they need to thrive.
                    </p>

                    <div className="flex justify-center items-end w-full gap-12 h-[40px]">
                        <span className='w-[8px] h-[8px] rounded-full bg-[#B25D3E]'></span>
                        <span className='w-[8px] h-[8px] rounded-full bg-[#B25D3E]'></span>
                        <span className='w-[8px] h-[8px] rounded-full bg-[#B25D3E]'></span>
                    </div>
                </div>

                <div className='flex flex-col gap-4 leading-relaxed'>
                    <p>I am a clinical psychologist with a background in both therapeutic and assessment-based roles across public and private sectors. My professional journey began as a youth worker, supporting children and adolescents living in residential care. As an early career psychologist, I worked with young people in the private practice space, before dedicating several years to the child protection system, both in a hospital-based role and working directly with families and children within the department. These experiences have shaped not only my clinical skills, but also my deep sense of empathy and commitment to supporting young people navigating complex systems.</p>

                    <p>The name Novi Nest holds both personal and symbolic meaning. “Novi” means “new” in several European languages—a quiet nod to my heritage and my last name, Zinoviev. Novi Nest represents a place of new beginnings: where understanding grows, and change becomes possible. Like a nest, it offers a safe and steady foundation—where children and families are supported as they prepare for what comes next.</p>

                    <p>After relocating from Adelaide to Sydney in early 2025, I feel incredibly fortunate to be able to offer support to the children and families here. It's a privilege to help ensure every young person receives the understanding, support, and opportunities they deserve to thrive in their learning and development.</p>
                </div>
            </div>
        </article>
    )
}

export default Bio;