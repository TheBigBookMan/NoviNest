import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowPathIcon, CheckIcon  } from '@heroicons/react/24/solid'; 
import emailjs from "@emailjs/browser";

const BookSession = ({onClose}) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        childName: '',
        childAge: '',
        message: '',
        otherAssessment: '',
        assessmentType: [],
    });
    const [emailStatus, setEmailStatus] = useState('idle');
    const [errors, setErrors] = useState({});

    const handleChange = (field) => (e) => {
        setForm({ ...form, [field]: e.target.value });
    };

    const handleCheckboxChange = (value) => {
        setForm((prev) => {
            const alreadySelected = prev.assessmentType.includes(value);
            return {
                ...prev,
                assessmentType: alreadySelected
                    ? prev.assessmentType.filter((v) => v !== value)
                    : [...prev.assessmentType, value],
            };
        });
    };
    
    const sendForm  = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!form.name) newErrors.name = "Full name is required.";
        if (!form.email) newErrors.email = "Email is required.";
        if (!form.phone) newErrors.phone = "Phone number is required.";
        if (!form.childName) newErrors.childName = "Child's name is required.";
        if (!form.childAge) newErrors.childAge = "Child's age is required.";

        if (form.assessmentType.length === 0 && !form.otherAssessment.trim()) {
            newErrors.assessmentType = "Please select or specify at least one assessment type.";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setEmailStatus('sending');

        const emailData = {
            parent_name: form.name,
            email: form.email,
            phone: form.phone,
            child_name: form.childName,
            child_age: form.childAge,
            assessment_type: [
                ...form.assessmentType,
                form.otherAssessment && `Other: ${form.otherAssessment}`
            ].filter(Boolean).join(', '),
            message: form.message || 'N/A'
        };
    
        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                emailData,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log("Email sent successfully:", result.text);
                    setEmailStatus('success');
                },
                (error) => {
                    console.log("Failed to send email:", error.text);
                    alert("Failed to send message.");
                    setEmailStatus('idle');
                }
            );
    }

    return (
        <motion.div
            initial={{opacity: 0, y: 40}}
            animate={{opacity: 1, y: 0}}
            exit={{ opacity: 0, y: 40 }}
            transition={{duration: 0.25, ease: 'easeOut'}}
            className="fixed flex flex-col bottom-20 p-4 bg-slate-200 rounded-lg shadow-xl w-[95%] ml-2 max-h-[74vh] overflow-y-auto">
            <div className='flex flex-col gap-2'>
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-2xl font-cinzel">Book an Assessment</h2>
                        <p className="text-sm">Schedule a free 15-minute chat</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-sm text-[#C4A5A5] font-semibold hover:underline"
                    >
                        Close
                    </button>
                </div>
                
                <form onSubmit={sendForm} className="flex flex-col gap-4">
                    <div>
                        <label className="block mb-1 font-medium">Parent/Carer Full Name <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            value={form.name}
                            onChange={handleChange('name')}
                            className="rounded-lg border border-gray-300 bg-white p-3 w-full shadow-sm focus:border-[#858D7E] focus:ring-[#858D7E] focus:outline-none focus:ring-1 transition"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Email Address <span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            value={form.email}
                            onChange={handleChange('email')}
                            className="rounded-lg border border-gray-300 bg-white p-3 w-full shadow-sm focus:border-[#858D7E] focus:ring-[#858D7E] focus:outline-none focus:ring-1 transition"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Phone Number <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            value={form.phone}
                            onChange={handleChange('phone')}
                            className="rounded-lg border border-gray-300 bg-white p-3 w-full shadow-sm focus:border-[#858D7E] focus:ring-[#858D7E] focus:outline-none focus:ring-1 transition"
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <label className="block mb-1 font-medium">Your Child's First Name <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                value={form.childName}
                                onChange={handleChange('childName')}
                                className="rounded-lg border border-gray-300 bg-white p-3 w-full shadow-sm focus:border-[#858D7E] focus:ring-[#858D7E] focus:outline-none focus:ring-1 transition"
                            />
                            {errors.childName && <p className="text-red-500 text-xs mt-1">{errors.childName}</p>}
                        </div>

                        <div className="flex-1">
                            <label className="block mb-1 font-medium">Your Child's Age <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                value={form.childAge}
                                onChange={handleChange('childAge')}
                                placeholder="e.g. 6 years old"
                                className="rounded-lg border border-gray-300 bg-white p-3 w-full shadow-sm focus:border-[#858D7E] focus:ring-[#858D7E] focus:outline-none focus:ring-1 transition"
                            />
                            {errors.childAge && <p className="text-red-500 text-xs mt-1">{errors.childAge}</p>}
                        </div>
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">
                            Assessment Type <span className="text-red-500">*</span>
                        </label>
                        <div className="flex flex-col gap-2 pl-1">
                            <label>
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    onChange={() => handleCheckboxChange("Cognitive / IQ Assessment")}
                                    checked={form.assessmentType.includes("Cognitive / IQ Assessment")}
                                />
                                Cognitive / IQ Assessment
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    onChange={() => handleCheckboxChange("Educational / Learning Assessment")}
                                    checked={form.assessmentType.includes("Educational / Learning Assessment")}
                                />
                                Educational / Learning Assessment
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    onChange={() => handleCheckboxChange("Full Psychoeducational Assessment")}
                                    checked={form.assessmentType.includes("Full Psychoeducational Assessment")}
                                />
                                Full Psychoeducational Assessment
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    onChange={() => handleCheckboxChange("Not sure yet")}
                                    checked={form.assessmentType.includes("Not sure yet")}
                                />
                                Not sure yet
                            </label>
                            <label className="flex flex-col mt-1">
                                <span className="mb-1">Other (please specify):</span>
                                <input
                                    type="text"
                                    value={form.otherAssessment}
                                    onChange={handleChange('otherAssessment')}
                                    className="rounded-lg border border-gray-300 bg-white p-3 w-full shadow-sm focus:border-[#858D7E] focus:ring-[#858D7E] focus:outline-none focus:ring-1 transition"
                                />
                            </label>
                            {errors.assessmentType && (
                                <p className="text-red-500 text-xs mt-1">{errors.assessmentType}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">What would you like to ask or share?</label>
                        <textarea
                            rows={4}
                            value={form.message}
                            onChange={handleChange('message')}
                            className="rounded-lg border border-gray-300 bg-white p-3 w-full shadow-sm focus:border-[#858D7E] focus:ring-[#858D7E] focus:outline-none focus:ring-1 transition resize-none"
                        />
                    </div>

                    <div className="flex flex-col gap-2 mt-2">
                        <button
                            type="submit"
                            disabled={emailStatus !== 'idle'}
                            className="bg-[#6A7F96] hover:bg-[#596c81] text-white font-semibold px-5 py-2 rounded-lg shadow-md transition flex items-center justify-center min-w-[100px]"
                        >
                            {emailStatus === 'sending' ? (
                                <ArrowPathIcon className="h-5 w-5 animate-spin" />
                            ) : emailStatus === 'success' ? (
                                <CheckIcon className="h-5 w-5" />
                            ) : (
                                'Send'
                            )}
                        </button>

                        {emailStatus === 'success' && (
                            <div className="text-sm text-gray-700 mt-2">
                                <p className="font-semibold">Thank you for your enquiry!</p>
                                <p>
                                I'll review your information and get in touch via email shortly to schedule a time for your free 15-minute consultation.
                                </p>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </motion.div>
    )
}

export default BookSession;