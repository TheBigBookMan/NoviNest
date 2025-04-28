import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowPathIcon, CheckIcon  } from '@heroicons/react/24/solid'; 

const BookSession = ({onClose}) => {
    const [sessionDetails, setSessionDetails] = useState({
        email: '',
        name: '',
        message: ''
    });
    const [emailStatus, setEmailStatus] = useState('idle');
    
    const sendEmail = () => {
        console.log(sessionDetails);
        // TODO set up the sending of email- use the emailjs library

        setEmailStatus('sending');
  
        // fake timeout to simulate sending
        setTimeout(() => {
          console.log('Finished sending');
          setEmailStatus('success');
        }, 2000);
    }

    return (
        <motion.div
        initial={{opacity: 0, y: 40}}
        animate={{opacity: 1, y: 0}}
        exit={{ opacity: 0, y: 40 }}
        transition={{duration: 0.25, ease: 'easeOut'}}
        className="fixed flex flex-col items-between bottom-20 min-h-[380px] max-h-fit p-4 bg-slate-200 rounded-lg shadow-xl w-[95%] ">
            <div className='flex flex-col gap-2'>
                <h2 className="text-2xl ">Book a Session</h2>
                
                <div className='flex flex-col'>
                    <p>Email:</p>
                    <input type='text' onChange={(e) => setSessionDetails({...sessionDetails, email: e.target.value})} className='rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-900 shadow-sm placeholder-gray-400 focus:border-[#858D7E] focus:ring-[#858D7E] focus:outline-none focus:ring-1 transition' />
                </div>

                <div className='flex flex-col'>
                    <p>Name:</p>
                    <input type='text' onChange={(e) => setSessionDetails({...sessionDetails, name: e.target.value})} className='rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-900 shadow-sm placeholder-gray-400 focus:border-[#858D7E] focus:ring-[#858D7E] focus:outline-none focus:ring-1 transition' />
                </div>

                <div className='flex flex-col'>
                    <p>Message:</p>
                    <textarea className='rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-900 shadow-sm placeholder-gray-400 focus:border-[#858D7E] focus:ring-[#858D7E] focus:outline-none focus:ring-1 transition resize-none' rows={6} onChange={(e) => setSessionDetails({...sessionDetails, message: e.target.value})}></textarea>
                </div>

            </div>

            <div className="flex gap-4">
                <button
                    onClick={onClose}
                    className="mt-6 bg-[#C4A5A5] hover:bg-[#ae9696] text-white font-semibold px-5 py-2 rounded-lg shadow-md transition"
                >
                    Close
                </button>

                <button
                    disabled={emailStatus !== 'idle'}
                    onClick={sendEmail}
                    className="mt-6 bg-[#6A7F96] hover:bg-[#596c81] text-white font-semibold px-5 py-2 rounded-lg shadow-md transition flex items-center justify-center min-w-[100px]"
                >
                    {emailStatus === 'sending' ? (
                            <ArrowPathIcon className="h-6 w-6 animate-spin" />
                        ) : emailStatus === 'success' ? (
                            <CheckIcon className="h-6 w-6" />
                        ) : (
                            "Send"
                        )
                    }
                </button>
            </div>
        </motion.div>
    )
}

export default BookSession;