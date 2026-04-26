import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const ServiceItem = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <article className="md:hidden flex flex-col pb-2 border-b" aria-labelledby={`service-${title.replace(/\s+/g, '-').toLowerCase()}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center py-2 cursor-pointer"
            >
                <h3 id={`service-${title.replace(/\s+/g, '-').toLowerCase()}`} className="italic text-[#B25D3E] text-left">{title}</h3>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-5 w-5 text-[#858D7E]"
                >
                    <ChevronDownIcon />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="overflow-hidden"
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-[#4B5563] px-2 pt-2 leading-relaxed"
                        >
                            {description}
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </article>
    );
};

const Services = () => {
    const services = [
        {
            title: "Cognitive Assessment",
            description:
                "A cognitive assessment evaluates intellectual ability, providing insight into visual spatial abilities, verbal skills, ability to remember information, and processing speed.",
        },
        {
            title: "Academic Assessment",
            description:
                "An academic assessment assesses key areas of academic functioning, including reading, writing, and mathematics abilities to pinpoint learning difficulties and identify educational support required.",
        },
        {
            title: "Full Psychoeducational Assessment",
            description:
                "A full psychoeducational assessment combines cognitive and academic assessments to provide a full picture of your child's learning profile, strengths, and support needs.",
        },
        {
            title: "Giftedness Assessment",
            description:
                "A giftedness assessment evaluates advanced cognitive ability and identifies areas of high potential. It provides insight into a child’s unique learning profile, supporting appropriate academic extension, school placement decisions, and tailored educational planning.",
        },
        {
            title: "ADHD Assessment",
            description:
                "An ADHD assessment explores attention, impulse control, and executive functioning. Using a combination of standardised measures and behavioural information, it helps determine whether a child meets criteria for Attention-Deficit/Hyperactivity Disorder and outlines practical strategies to support functioning at home and school.",
        },
        {
            title: "Autism Assessment",
            description:
                "An autism assessment evaluates social communication, behaviour patterns, and sensory processing. It provides a comprehensive understanding of a child’s strengths and differences, supporting diagnostic clarity and guiding appropriate supports and interventions.",
        },
    ];

    return (
        <article id="services-article" aria-labelledby="services-heading" className="flex flex-col h-fit bg-[#F5F5F3] px-4 sm:px-8 md:px-16 py-20 max-w-5xl">
            <h2 id="services-heading" className="text-3xl font-bold text-[#858D7E] font-cinzel">Our Services</h2>

            <ul className="md:hidden flex flex-col gap-4 mt-4 text-sm">
                {services.slice(0, 6).map((service, idx) => (
                    <li key={idx}>
                        <ServiceItem title={service.title} description={service.description} />
                    </li>
                ))}
            </ul>

            {/* Desktop version */}
            <div className="hidden md:grid grid-cols-2 gap-6 mt-8">
                {services.map((service, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#B25D3E] text-[#4B5563]">
                        <h3 className="text-[#B25D3E] text-lg font-semibold mb-2">{service.title}</h3>
                        <p className="text-sm leading-relaxed">{service.description}</p>
                    </div>
                ))}
            </div>
        </article>
    );
};

export default Services;