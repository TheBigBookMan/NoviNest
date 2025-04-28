import { motion } from 'framer-motion';
import { useState } from 'react';

const BookSession = ({onClose}) => {
    const [sessionDetails, setSessionDetails] = useState({
        email: '',
        name: '',
        message: ''
    })

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

            <button
                onClick={onClose}
                className="mt-6 bg-[#4B5563] hover:bg-[#374151] text-white font-semibold px-5 py-2 rounded-lg shadow-md transition"
                >
                Close
            </button>
        </motion.div>
    )
}

export default BookSession;