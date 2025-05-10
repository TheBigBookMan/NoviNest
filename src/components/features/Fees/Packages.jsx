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
        <article id="fees-packages-article" aria-labelledby="fees-packages-heading" className="flex flex-col p-4 py-12 gap-2">
            <h3 id="fees-packages-heading" className="font-cinzel text-lg">Our Packages</h3>

            <motion.ul
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
                    <motion.li
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
                    </motion.li>
                ))}
            </motion.ul>
        </article>
    );
};

export default Packages;