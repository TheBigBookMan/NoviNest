import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: "easeOut" },
    },
};

const Differences = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.article
            id="differences-article"
            aria-labelledby="differences-heading"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col h-fit px-4 py-16 md:my-20 md:px-16 bg-[#858D7E] text-[#F5F5F3] shadow-lg max-w-5xl mx-auto md:rounded-2xl"
        >
            <h2
                id="differences-heading"
                className="text-4xl md:text-5xl font-cinzel font-bold text-[#F5F5F3] mb-12 text-center"
            >
                Our Differences
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    {
                        title: "Child-Centered Approach",
                        description: "We put your child at the heart of everything we do.",
                    },
                    {
                        title: "Empowerment Through Understanding",
                        description:
                        "We are passionate about creating an environment where children and families feel heard and supported.",
                    },
                    {
                        title: "Accessibility",
                        description:
                        "We make assessments easier by meeting children where they are.",
                    },
                    {
                        title: "Collaborative Care",
                        description:
                        "We partner with educators for your child's success.",
                    },
                ].map((item, idx) => (
                    <motion.li
                        key={idx}
                        variants={itemVariants}
                        className="flex flex-col bg-[#F5F5F3] text-[#333] rounded-xl p-6 shadow-md border-l-4 border-[#B25D3E] transition-all hover:bg-[#f0f0ea]"
                    >
                        <h3 className="italic text-xl text-[#B25D3E] mb-2">{item.title}</h3>
                        <p className="text-[#4B5563] leading-relaxed text-sm">
                        {item.description}
                        </p>
                    </motion.li>
                ))}
            </ul>
        </motion.article>
    );
};

export default Differences;