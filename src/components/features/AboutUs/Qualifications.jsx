import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const listVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.4, ease: "easeOut" },
    },
};

const Qualifications = () => {
    const qualificationsRef = useRef(null);
    const isInView = useInView(qualificationsRef, { once: true, amount: 0.2 });

    return (
        <motion.section className="w-full bg-[#F5F5F3] px-6 sm:px-12 md:px-24 lg:px-40 py-16 md:py-24" id="qualifications">
            <div className="max-w-6xl xl:max-w-5xl 2xl:max-w-4xl mx-auto">
                <motion.article
                    id="qualifications-article"
                    aria-labelledby="qualifications-heading"
                    ref={qualificationsRef}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={listVariants}
                    className="flex flex-col gap-12 md:flex-row text-slate-800 bg-white rounded-2xl shadow-xl px-6 sm:px-10 md:px-16 py-12"
                >
                    <div className="md:w-1/3">
                        <h3 id="qualifications-heading" className="text-2xl sm:text-3xl font-cinzel text-[#B25D3E] mb-6 md:mb-0">
                            Qualifications<br className="hidden md:block" /> & Trainings
                        </h3>
                    </div>

                    <motion.ul
                        variants={listVariants}
                        className="flex flex-col gap-6 md:w-2/3 list-disc list-inside"
                    >
                        {["Autism Diagnostic Observation Schedule, Second Edition (ADOS-2) Training",
                            "Specialist Vulnerable Witness Forensic Interview Training",
                            "Master of Psychology (Clinical), Flinders University",
                            "Bachelor of Psychology (Honours), Flinders University"
                        ].map((text, i) => (
                            <motion.li
                                key={i}
                                variants={itemVariants}
                                className="leading-relaxed text-base text-[#4B5563] pl-4 border-l-4 border-[#B25D3E] bg-[#F9FAFB] p-4 rounded-lg shadow-sm hover:shadow-md transition"
                            >
                                <span>{text}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.article>
            </div>
        </motion.section>
    );
};

export default Qualifications;