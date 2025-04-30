import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
        staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
};

const Differences = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 }); 

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col h-fit p-4  pt-20 bg-[#F5F5F3] "
        >
            <p className="text-3xl font-cinzel font-bold text-[#858D7E]">Our Differences</p>

            <div className="flex flex-col gap-6 mt-4 text-sm">
                {[
                {
                    title: "Child-Centered Approach",
                    description: "We put your child at the heart of everything we do.",
                },
                {
                    title: "Empowerment Through Understanding",
                    description: "We are passionate about creating an environment where children and families feel heard and supported.",
                },
                {
                    title: "Accessibility",
                    description: "We make assessments easier by meeting children where they are.",
                },
                {
                    title: "Collaborative Care",
                    description: "We partner with educators for your child's success.",
                },
                ].map((item, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="flex flex-col"
                    >
                        <p className="italic text-[#B25D3E]">{item.title}</p>
                        <p className='text-[#4B5563] leading-relaxed'>{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Differences;