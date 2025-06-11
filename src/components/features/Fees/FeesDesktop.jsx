import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { Link } from 'react-router-dom';
import Contact from "../../common/Contact/Contact";
import Footer from "../../common/Footer/Footer";

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
        transition: { duration: 1.2, ease: "easeOut" },
    },
};

const FeesDesktop = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const packages = [
        { label: "Cognitive Assessment Package", price: "$1,440" },
        { label: "Academic Assessment Package", price: "$1,560" },
        { label: "Full Psychoeducational Assessment Package", price: "$2,400" },
        { label: "Consultation with Schools or Allied Health Providers", price: "$60 per 15 minutes" },
    ];

    return (
        <>
            <section className="hidden md:flex flex-col items-center px-6 pt-12 w-full max-w-7xl mx-auto text-slate-800 text-sm gap-24">

                {/* Fee Intro */}
                <div className="flex flex-col items-start gap-6 max-w-3xl">
                    <h2 className="text-3xl font-cinzel text-[#858D7E]">A Note on Fees</h2>
                    <p>
                        At Novi Nest Psychology, our flat-rate assessment packages reflect the time, care,
                        and clinical expertise that go into every stage of the process — from your first
                        phone call to the personalised report and feedback session.
                    </p>
                    <p>
                        We believe in transparent pricing and strive to balance excellence with accessibility.
                    </p>
                </div>

                {/* Hourly Rate */}
                <div className="flex flex-col gap-4 text-slate-100 bg-[#858D7E] p-8 rounded-xl shadow-md max-w-3xl border-l-4 border-[#B25D3E]">
                    <h3 className="text-xl font-bold ">Hourly rate: $240</h3>
                    <p className='italic'>
                        (Set below the Australian Psychological Society's recommended fee of $311. Our goal
                        is to offer high-quality, specialist care while remaining mindful of affordability.)
                    </p>
                    <p>
                        A deposit of <span className='font-bold'>$240</span> is required to confirm a booking.
                        This covers the initial parent interview.
                    </p>
                    <p>
                        Payment plans are available. Final reports will be provided only once full payment is received.
                    </p>
                </div>

                {/* Packages */}
                <div className="flex flex-col items-center gap-10 w-full">
                    <h3 className="text-2xl font-cinzel text-[#858D7E]">Our Packages</h3>

                    <motion.div
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl"
                    >
                        {packages.map((pkg, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition"
                            >
                                <HashLink
                                smooth
                                to={`/services#${pkg.label.split(' ').slice(0, -1).join('-').toLowerCase()}`}
                                scroll={el => {
                                    setTimeout(() => {
                                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }, 100);
                                }}
                                >
                                    <p className="text-lg font-semibold underline mb-2 text-[#4B5563]">{pkg.label}</p>
                                    <p className="text-[#B25D3E] font-bold">{pkg.price}</p>
                                </HashLink>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Outreach Section */}
                <div className="flex flex-col gap-6 bg-[#F5F5F3] p-8 rounded-xl shadow-md max-w-3xl border-l-4 border-[#B25D3E]">
                    <h3 className="font-cinzel text-lg text-[#858D7E]">Outreach and Travel</h3>
                    <p>
                        We offer mobile assessments, typically conducted at your child's school or learning centre.
                    </p>
                    <ul className='list-disc pl-6 space-y-2'>
                        <li><strong>Within 10 km:</strong> No travel fee (e.g., Mosman, Cremorne, Chatswood).</li>
                        <li><strong>Beyond 10 km:</strong> $1/km (round trip) from Neutral Bay.</li>
                        <li><strong>Tolls and Parking:</strong> Added to the invoice at cost.</li>
                    </ul>
                    <p>
                        All travel arrangements and fees are confirmed in advance. Unsure if your area is local?
                        Reach out for a quick estimate.
                    </p>
                </div>

                <Contact />
            </section>

            {/* Full-width Footer */}
            <footer className="w-full hidden md:flex">
                <Footer />
            </footer>
        </>
    );
};

export default FeesDesktop;