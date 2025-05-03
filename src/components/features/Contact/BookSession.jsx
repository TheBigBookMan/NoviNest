import { useState } from 'react';
import { ArrowPathIcon, CheckIcon } from '@heroicons/react/24/solid';
import emailjs from "@emailjs/browser";

const BookSession = () => {
    const [sessionDetails, setSessionDetails] = useState({
        email: '',
        name: '',
        message: ''
    });
    
    const [emailStatus, setEmailStatus] = useState('idle');
    
    const sendEmail = (e) => {
        e.preventDefault();
        setEmailStatus('sending');
    
        // fake sending delay
        setTimeout(() => {
            console.log('Finished sending');
            setEmailStatus('success');
        }, 2000);
    
        // Uncomment and configure if using EmailJS:
        // emailjs
        //   .send(
        //     "your_service_id",    // from EmailJS dashboard
        //     "your_template_id",   // from EmailJS dashboard
        //     {
        //       from_email: formData.email,
        //       message: formData.message,
        //     },
        //     "your_public_key"      // from EmailJS dashboard
        //   )
        //   .then(
        //     (result) => {
        //       console.log("Email sent successfully:", result.text);
        //       alert("Message sent!");
        //     },
        //     (error) => {
        //       console.log("Failed to send email:", error.text);
        //       alert("Failed to send message.");
        //     }
        //   );
    };

    return (
        <div className='flex flex-col p-4 pb-12'>
            <div className="flex flex-col gap-4 p-4 bg-slate-200 border border-slate-300 rounded-lg shadow-xl ">
                <div className="flex flex-col gap-1">
                    <h2 className="text-2xl">Book an Assessment</h2>
                    <p>Schedule a free 15-minute chat</p>
                </div>

                <div className="flex flex-col gap-4 text-sm">
                    <div className="flex flex-col">
                        <p>Email:</p>
                        <input
                            type="text"
                            onChange={(e) =>
                            setSessionDetails({ ...sessionDetails, email: e.target.value })
                            }
                            className="rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-900 shadow-sm placeholder-gray-400 focus:border-[#858D7E] focus:ring-[#858D7E] focus:outline-none focus:ring-1 transition"
                        />
                    </div>

                    <div className="flex flex-col">
                        <p>Name:</p>
                        <input
                            type="text"
                            onChange={(e) =>
                            setSessionDetails({ ...sessionDetails, name: e.target.value })
                            }
                            className="rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-900 shadow-sm placeholder-gray-400 focus:border-[#858D7E] focus:ring-[#858D7E] focus:outline-none focus:ring-1 transition"
                        />
                    </div>

                    <div className="flex flex-col">
                        <p>Message:</p>
                        <textarea
                            rows={5}
                            onChange={(e) =>
                            setSessionDetails({ ...sessionDetails, message: e.target.value })
                            }
                            className="rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-900 shadow-sm placeholder-gray-400 focus:border-[#858D7E] focus:ring-[#858D7E] focus:outline-none focus:ring-1 transition resize-none"
                        />
                    </div>
                </div>

                <div className="flex gap-4 mt-4">
                    <button
                        disabled={emailStatus !== 'idle'}
                        onClick={sendEmail}
                        className="bg-[#6A7F96] hover:bg-[#596c81] text-white font-semibold px-5 py-2 rounded-lg shadow-md transition flex items-center justify-center min-w-[100px]"
                    >
                        {emailStatus === 'sending' ? (
                            <ArrowPathIcon className="h-6 w-6 animate-spin" />
                        ) : emailStatus === 'success' ? (
                            <CheckIcon className="h-6 w-6" />
                        ) : (
                            'Send'
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BookSession;