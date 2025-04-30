import Contact from "../components/common/Contact/Contact";
import Footer from "../components/common/Footer/Footer";
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
        transition: { duration: 1.25, ease: "easeOut" },
    },
};

const AboutUs = () => {
    const qualificationsRef = useRef(null);
    const isInView = useInView(qualificationsRef, { once: true, amount: 0.2 });

    return (
        <div className='flex flex-col gap-12'>
            <div className='flex flex-col gap-12  p-4'>
                
                <div className="flex flex-col gap-4">
                    <p className='text-3xl font-cinzel'>Hi!<br/> I'm Ksenia,</p>
                    <p className='text-xl font-playfair'> a clinical psychologist and the founder of Novi Nest Psychology.</p>
                </div>

                <p>INSERT PICTURE HERE</p>

                <div className='flex flex-col gap-4 text-sm'>
                    <p className='font-playfair text-base'>I started this practice because I'm passionate about helping families make sense of the unique minds of the children they love and care for, while empowering young people to embrace their strengths.</p>

                    <p>The name <i>Novi Nest</i> holds both personal and symbolic meaning. “Novi” means “new” in several European languages—a quiet nod to my heritage and my last name, Zinoviev. Novi Nest represents a place of new beginnings: where understanding grows, and change becomes possible. Like a nest, it offers a safe and steady foundation—where children and families are supported as they prepare for what comes next.</p>

                    <p>With experience across both therapeutic and assessment-based roles in public and private sectors, my early career experience working with children and families has given me not only expertise in child development, but also a deep sense of compassion for young people and their inner worlds. I've seen firsthand how powerful the right support can be in shaping a child's future.</p>

                    <p>I approach the assessment process with warmth, curiosity, and a deep respect for each child's unique experience. I believe in the importance of collaborating with the people included in a child's inner circle: parents, educators, other professionals. Only when we all come together can we ensure that every young person receives the understanding, support, and opportunities they need to thrive—something every child deserves.</p>
                </div>
            </div>

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
                        <motion.li key={i} variants={itemVariants} className="list-disc">
                            {text}
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>

            <Contact />

            <Footer />
        </div>
    )
}

export default AboutUs;