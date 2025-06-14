import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const PackageItem = ({ title, description, includes }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <article
            id={title.split(' ').join('-').toLowerCase()}
            aria-labelledby={`${title.split(' ').join('-').toLowerCase()}-heading`}
            className="flex flex-col gap-4 text-sm border-b pb-4 scroll-mt-24 md:gap-6 md:text-base"
        >
            <h3 id={`${title.split(' ').join('-').toLowerCase()}-heading`} className="font-playfair text-lg text-[#B25D3E] md:text-xl">
                {title}
            </h3>
            <p className="leading-relaxed text-[#4B5563] md:text-base">
                {description}
            </p>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between cursor-pointer mt-4"
            >
                <span
                    aria-expanded={isOpen ? "true" : "false"}
                    aria-controls={`${title.split(' ').join('-').toLowerCase()}-includes`}
                    className="italic font-cinzel text-base"
                >
                    Includes
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-4 w-4 text-[#858D7E]"
                >
                    <ChevronDownIcon />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.ul
                        id={`${title.split(' ').join('-').toLowerCase()}-includes`}
                        key="includes"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="flex flex-col pl-6 gap-3 overflow-hidden text-[#4B5563]"
                        aria-labelledby={`${title.split(' ').join('-').toLowerCase()}-heading`}
                    >
                        {includes.map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                className="list-disc"
                            >
                                <span>{item}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </article>
    );
};

const AssessmentPackagesDesktop = () => {
    const packages = [
        {
            title: "Cognitive Assessment",
            description:
                "We use the Wechsler Intelligence Scale for Children - Fifth Edition (WISC-V) to assess a child's cognitive strengths and areas of difficulty across a range of thinking skills. This includes verbal reasoning, visual-spatial skills, working memory, processing speed, and fluid reasoning. At Novi Nest Psychology, we currently offer the WISC-V for children and adolescents aged 6 to 16 years, and all 10 subtests are administered to provide a comprehensive profile reflecting each child's cognitive abilities.",
            includes: [
                "Parent interview",
                "1:1 child assessment session utilising the WISC-V",
                "In-depth scoring and professional interpretation",
                "Comprehensive written report",
                "Online feedback session with parents/caregivers",
                "Feedback session with child/adolescent (if appropriate)",
            ],
        },
        {
            title: "Academic Assessment",
            description:
                "We use the Wechsler Individual Achievement Test - Third Edition (WIAT-III) to explore how your child is performing in key areas of learning. Core subtests assess essential academic skills such as reading, writing, and mathematics. Additional subtests can be included based on the referral question or your concerns, allowing us to tailor the assessment to your child's unique needs and provide meaningful, targeted recommendations.",
            includes: [
                "Parent interview",
                "Interview with an educator",
                "1:1 child assessment session utilising the WIAT-III",
                "In-depth scoring and professional interpretation",
                "Comprehensive written report",
                "Online feedback session with parents/caregivers",
                "Feedback session with child/adolescent (if appropriate)",
            ],
        },
        {
            title: "Full Psychoeducational Assessment",
            description:
                "A combined cognitive and academic assessment, offering a complete picture of your child's learning profile and support needs.",
            includes: [
                "Parent interview",
                "Interview with an educator",
                "1-2 1:1 child assessment sessions, incorporating both the WISC-V and WIAT-III",
                "In-depth scoring and professional interpretation",
                "Comprehensive written report",
                "Online feedback session with parents/caregivers",
                "Feedback session with child/adolescent (if appropriate)",
            ],
        },
    ];

    return (
        <article
            id="assessment-packages-article"
            aria-labelledby="assessment-packages-heading"
            className="flex flex-col px-4 py-16 gap-8 md:px-12 lg:px-24 max-w-6xl mx-auto"
        >
            <h2
                id="assessment-packages-heading"
                className="font-cinzel text-xl md:text-3xl text-[#B25D3E]"
            >
                Assessment Packages
            </h2>

            {packages.map((pkg, idx) => (
                <PackageItem key={idx} {...pkg} />
            ))}
        </article>
    );
};

export default AssessmentPackagesDesktop;