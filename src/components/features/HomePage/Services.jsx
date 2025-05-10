import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const ServiceItem = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <article className="flex flex-col pb-2 border-b" aria-labelledby={`service-${title.replace(/\s+/g, '-').toLowerCase()}`}>
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
    ];

    return (
        <section aria-labelledby="services-heading" className="flex flex-col h-fit bg-[#F5F5F3] px-4 py-20 ">
            <h2 className="text-3xl font-bold text-[#858D7E] font-cinzel">Our Services</h2>

            <ul className="flex flex-col gap-4 mt-4 text-sm">
                {services.map((service, idx) => (
                    <li key={idx}>
                        <ServiceItem key={idx} title={service.title} description={service.description} />
                    </li>
                ))}
            </ul>

            <aside className="mt-6 italic text-sm text-[#4B5563]">
                *Coming Soon! Autism and ADHD diagnostic assessments*
            </aside>
        </section>
    );
};

export default Services;