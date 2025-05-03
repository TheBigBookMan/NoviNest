import { useState } from 'react';
import { ArrowPathIcon, CheckIcon } from '@heroicons/react/24/solid';

const ContactSection = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        childName: '',
        childAge: '',
        message: '',
        otherAssessment: '',
    });
    const [emailStatus, setEmailStatus] = useState('idle');

    const handleChange = (field) => (e) => {
        setForm({ ...form, [field]: e.target.value });
    };

    const sendForm = (e) => {
        e.preventDefault();
        setEmailStatus('sending');

        // Simulate sending
        setTimeout(() => {
            setEmailStatus('success'); 
        }, 2000);
    };

    return (
        <div className=" p-6 pb-12 rounded-lg shadow-xl w-full max-w-3xl mx-auto">
            <div className="flex flex-col gap-2 mb-4">
                <h2 className="text-2xl font-cinzel">Book a Free Discovery Call</h2>
                <p>Schedule a complimentary 15-minute phone consultation to explore how we can help.</p>
            </div>

            <form onSubmit={sendForm} className="flex flex-col gap-4 text-sm">
                <div>
                    <label className="block mb-1 font-medium">Parent/Carer Full Name</label>
                    <input
                        type="text"
                        value={form.name}
                        onChange={handleChange('name')}
                        className="rounded-lg border border-gray-300 bg-white p-3 w-full shadow-sm focus:border-[#858D7E] focus:ring-[#858D7E] focus:outline-none focus:ring-1 transition"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Email Address</label>
                    <input
                        type="email"
                        value={form.email}
                        onChange={handleChange('email')}
                        className="rounded-lg border border-gray-300 bg-white p-3 w-full shadow-sm focus:border-[#858D7E] focus:ring-[#858D7E] focus:outline-none focus:ring-1 transition"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Phone Number</label>
                    <input
                        type="text"
                        value={form.phone}
                        onChange={handleChange('phone')}
                        className="rounded-lg border border-gray-300 bg-white p-3 w-full shadow-sm focus:border-[#858D7E] focus:ring-[#858D7E] focus:outline-none focus:ring-1 transition"
                    />
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <label className="block mb-1 font-medium">Your Child's First Name</label>
                        <input
                            type="text"
                            value={form.childName}
                            onChange={handleChange('childName')}
                            className="rounded-lg border border-gray-300 bg-white p-3 w-full shadow-sm focus:border-[#858D7E] focus:ring-[#858D7E] focus:outline-none focus:ring-1 transition"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block mb-1 font-medium">Your Child's Age</label>
                        <input
                            type="text"
                            value={form.childAge}
                            onChange={handleChange('childAge')}
                            placeholder="e.g. 6 years old"
                            className="rounded-lg border border-gray-300 bg-white p-3 w-full shadow-sm focus:border-[#858D7E] focus:ring-[#858D7E] focus:outline-none focus:ring-1 transition"
                        />
                    </div>
                </div>

                <div>
                    <label className="block mb-1 font-medium">Assessment Type</label>
                    <div className="flex flex-col gap-2 pl-1">
                        <label><input type="checkbox" className="mr-2" />Cognitive / IQ Assessment</label>
                        <label><input type="checkbox" className="mr-2" />Educational / Learning Assessment</label>
                        <label><input type="checkbox" className="mr-2" />Full Psychoeducational Assessment</label>
                        <label><input type="checkbox" className="mr-2" />Not sure yet</label>
                        <label className="flex flex-col mt-1">
                        <span className="mb-1">Other (please specify):</span>
                        <input
                            type="text"
                            value={form.otherAssessment}
                            onChange={handleChange('otherAssessment')}
                            className="rounded-lg border border-gray-300 bg-white p-3 w-full shadow-sm focus:border-[#858D7E] focus:ring-[#858D7E] focus:outline-none focus:ring-1 transition"
                        />
                        </label>
                    </div>
                </div>

                <div>
                    <label className="block mb-1 font-medium">What would you like to ask or share?</label>
                    <textarea
                        rows={5}
                        value={form.message}
                        onChange={handleChange('message')}
                        className="rounded-lg border border-gray-300 bg-white p-3 w-full shadow-sm focus:border-[#858D7E] focus:ring-[#858D7E] focus:outline-none focus:ring-1 transition resize-none"
                    />
                </div>

                <div className="mt-2 text-sm text-gray-600">
                Your information will be kept confidential and used only for this consultation. You can also email us at{" "}
                    <a href="mailto:hello@novinestpsychology.com.au" className="underline text-[#B25D3E]">
                        hello@novinestpsychology.com.au
                    </a>.
                </div>

                <div className="flex flex-col gap-2 mt-4">
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
                                I'll review your information and get in touch via email shortly to schedule a time for your free 15-minute consultation. I look forward to connecting with you and learning more about how I can support your child.
                            </p>
                        </div>
                    )}
                </div>
            </form>

            <div className="mt-8 text-xs text-gray-500 border-t pt-4">
                <p className="font-semibold mb-1">Please note:</p>
                <p className="mb-1">
                    Novi Nest Psychology is not a crisis service and does not offer emergency support.
                </p>

                <ul className="list-disc ml-5 space-y-1">
                    <li>Lifeline - 13 11 14</li>
                    <li>Kids Helpline - 1800 55 1800</li>
                    <li>Emergency Services - 000</li>
                </ul>
            </div>
        </div>
    );
};

export default ContactSection;