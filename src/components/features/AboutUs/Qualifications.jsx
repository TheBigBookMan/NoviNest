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
        transition: { duration: 2, ease: "easeOut" },
    },
};

const Qualifications = () => {
    const qualificationsRef = useRef(null);
    const isInView = useInView(qualificationsRef, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={qualificationsRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={listVariants}
            className="flex flex-col gap-6  p-4"
        >
            <p className="text-xl font-cinzel">QUALIFICATIONS AND TRAININGS</p>

            <motion.ul
            variants={listVariants}
            className="flex flex-col gap-4 pl-6"
            >
                {[
                    "Autism Diagnostic Observation Schedule, Second Edition (ADOS-2) Training",
                    "Specialist Vulnerable Witness Forensic Interview Training",
                    "Master of Psychology (Clinical), Flinders University",
                    "Bachelor of Psychology (Honours), Flinders University",
                ].map((text, i) => (
                    <motion.li key={i} variants={itemVariants} className="list-disc text-sm">
                        {text}
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
    )
}

export default Qualifications;