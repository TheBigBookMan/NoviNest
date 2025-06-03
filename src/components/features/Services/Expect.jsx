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

const Expect = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <article id="expect-article" aria-labelledby="expect-heading" className="md:hidden flex flex-col px-4 py-10 gap-6 bg-[#858D7E] text-slate-100 text-base">
            <h2 id="expect-heading" className="font-cinzel text-xl">What to Expect</h2>
            <p className="leading-relaxed">
                At <strong>Novi Nest</strong>, we aim to make the assessment process clear from the start. Here's what you can expect:
            </p>

            <ol ref={ref} className="relative flex flex-col gap-8 mt-4 pl-6 border-l-2 border-[#F5F5F3]/50">
                {steps.map((step, i) => (
                    <motion.li
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                        className="relative flex gap-4"
                    >
                        {/* Numbered circle */}
                        <div className="absolute -left-[33px] top-1 w-7 h-7 flex items-center justify-center rounded-full bg-[#B25D3E] text-white text-base font-bold shadow-md">
                            {i + 1}
                        </div>

                        {/* Dot on timeline */}
                        <div className="absolute -left-[4px] top-2 w-2 h-2 bg-[#B25D3E] rounded-full"></div>

                            {/* Card content */}
                            <div className="bg-[#F5F5F3] text-[#333] rounded-lg shadow-md p-4 w-full">
                                <h3 className="text-[#B25D3E] font-semibold mb-2">{step.title}</h3>
                                <div className="flex flex-col gap-2 leading-relaxed">
                                    {step.content.map((line, j) => (
                                        <p key={j} className={line.startsWith("Note") ? "italic" : ""}>
                                            {line}
                                        </p>
                                    ))}
                            </div>
                        </div>
                    </motion.li>
                ))}
            </ol>
        </article>
    );
};

export default Expect;