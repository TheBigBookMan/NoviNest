import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
    {
        title: "Complimentary 15-Minute Phone Consultation",
        content: [
        "A no-obligation chat to explore your concerns, answer your questions, and determine whether our service is the right fit. This is a space for open discussion, and there is absolutely no pressure to proceed.",
        ],
    },
    {
        title: "Consent and Information Sharing",
        content: [
        "If you choose to move forward, we'll send a consent form and invite you to share any relevant school reports, medical letters, or previous assessments, so we can gain a well-rounded understanding of your child before we meet.",
        ],
    },
    {
        title: "Online Parent Interview",
        content: [
        "This in-depth session explores your child's development, wellbeing, learning style, and current challenges.",
        "If your child is supported by teachers or allied health professionals, we may request your consent to consult with them to gain further insight.",
        "Note: In rare cases, this interview may highlight that an assessment is not clinically appropriate at this time. If so, we'll explain our reasoning and this session will be billed as a standalone appointment at the standard rate. You will not be charged for the full package.",
        ],
    },
    {
        title: "Face-to-Face Assessment",
        content: [
        "Your child will meet with us in person for the assessment session(s). We aim to create a relaxed environment to help them feel comfortable and at ease. Our approach is always adapted to suit your child's developmental stage, learning style, and individual needs.",
        ],
    },
    {
        title: "Integration and Report Preparation",
        content: [
        "We collate data from assessments, interviews, and observations to create an accurate, detailed report with clear findings and tailored recommendations.",
        ],
    },
    {
        title: "Feedback and Support",
        content: [
        "Within 2-3 weeks of your child's final assessment session, we'll meet with you online to walk through the report. This is a collaborative conversation where we'll explain the results in clear, practical terms and answer any questions you may have.",
        "Further school collaboration or written input (e.g., feedback to teachers, letters of support, team meetings) can be arranged at our standard rates.",
        ],
    },
];

const ExpectDesktop = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <article
            id="expect-article"
            aria-labelledby="expect-heading"
            className="hidden md:flex flex-col gap-10  text-slate-800 p-12 rounded-2xl shadow-xl w-full max-w-5xl mx-auto"
        >
            <h2 id="expect-heading" className="font-cinzel text-3xl text-[#B25D3E] mb-4">
                What to Expect
            </h2>
            <p className="text-base leading-relaxed">
                At <strong>Novi Nest</strong>, we aim to make the assessment process clear from the start. Here's what you can expect:
            </p>

            <div ref={ref} className="grid grid-cols-2 gap-8 mt-4">
                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                        className="bg-white p-6 rounded-xl border-l-4 border-[#B25D3E] shadow-md"
                    >
                        <div className="flex items-start gap-3">
                            <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#B25D3E] text-white text-sm font-bold">
                                {i + 1}
                            </div>
                            <h3 className="text-[#B25D3E] font-semibold text-lg">
                                {step.title}
                            </h3>
                        </div>

                        <div className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-[#4B5563]">
                        {step.content.map((line, j) => (
                            <p key={j} className={line.startsWith("Note") ? "italic" : ""}>
                            {line}
                            </p>
                        ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </article>
    );
};

export default ExpectDesktop;
