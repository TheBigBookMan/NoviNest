import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HashLink } from "react-router-hash-link";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
        staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 1.5, ease: "easeOut" },
    },
};

const Packages = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <div className="flex flex-col p-4 py-12 gap-2">
            <p className="font-cinzel text-lg">Our Packages</p>

            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-col gap-6 text-sm"
            >
                {[
                    {
                        label: "Cognitive Assessment Package",
                        price: "$1,440",
                    },
                    {
                        label: "Academic Assessment Package",
                        price: "$1,560",
                    },
                    {
                        label: "Full Psychoeducational Assessment Package",
                        price: "$2,400",
                    },
                    {
                        label: "Consultation with Schools or Allied Health Providers",
                        price: "$60 per 15 minutes",
                    },
                ].map((pkg, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="leading-relaxed"
                    >   
                        <HashLink 
                            smooth 
                            to={`/services#${pkg.label.split(' ').slice(0, -1).join('-').toLowerCase()}`} 
                            scroll={el => {
                                setTimeout(() => {
                                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }, 100);
                            }}
                            className='flex'
                        >
                            <p><span  className='underline'>{pkg.label}</span> - <span className="text-[#B25D3E] font-semibold ">{pkg.price}</span></p>
                        </HashLink>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Packages;