import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
    {
        title: "1. Complimentary 15-Minute Phone Consultation",
        content: [
            "A no-obligation chat to explore your concerns, answer your questions, and determine whether our service is the right fit. This is a space for open discussion, and there is absolutely no pressure to proceed.",
        ],
    },
    {
        title: "2. Consent and Information Sharing",
        content: [
            "If you choose to move forward, we'll send a consent form and invite you to share any relevant school reports, medical letters, or previous assessments, so we can gain a well-rounded understanding of your child before we meet.",
        ],
    },
    {
        title: "3. Online Parent Interview",
        content: [
            "This in-depth session explores your child's development, wellbeing, learning style, and current challenges.",
            "If your child is supported by teachers or allied health professionals, we may request your consent to consult with them to gain further insight.",
            "Note: In rare cases, this interview may highlight that an assessment is not clinically appropriate at this time. If so, we'll explain our reasoning and this session will be billed as a standalone appointment at the standard rate. You will not be charged for the full package.",
        ],
    },
    {
        title: "4. Face-to-Face Assessment",
        content: [
            "Your child will meet with us in person for the assessment session(s). We aim to create a relaxed environment to help them feel comfortable and at ease. Our approach is always adapted to suit your child's developmental stage, learning style, and individual needs.",
        ],
    },
    {
        title: "5. Integration and Report Preparation",
        content: [
            "We collate data from assessments, interviews, and observations to create an accurate, detailed report with clear findings and tailored recommendations.",
        ],
    },
    {
        title: "6. Feedback and Support",
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
        <div className="flex flex-col px-4 py-10 gap-4 bg-[#858D7E] text-slate-100 text-sm">
            <p className="font-cinzel text-xl">What to Expect</p>
            <p>At Novi Nest, we aim to make the assessment process clear from the start. Here's what you can expect:</p>

            <div ref={ref} className="flex flex-col gap-6 mt-4">
                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: i * 0.3, ease: "easeOut" }}
                        className="bg-[#F5F5F3] text-[#333] rounded-lg shadow-md p-4"
                    >
                        <p className="text-[#B25D3E] font-semibold mb-2">{step.title}</p>

                        <div className="flex flex-col gap-2 leading-relaxed">
                            {step.content.map((line, j) => (
                                <p key={j} className={line.startsWith("Note") ? "italic" : ""}>
                                    {line}
                                </p>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Expect;