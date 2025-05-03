import Contact from "../components/common/Contact/Contact";
import Footer from "../components/common/Footer/Footer";

const Blog = () => {
    return (
        <div className='flex flex-col'>
            <div className="flex flex-col items-center text-center px-6 py-16 max-w-2xl mx-auto  rounded-lg  text-[#333]">
                <h1 className="text-3xl font-cinzel text-[#858D7E] mb-4">Blog - Coming Soon!</h1>

                <p className="text-lg font-playfair text-[#B25D3E] mb-6">We're working on something special!</p>

                <p className="text-sm leading-relaxed mb-4">
                    Soon, this space will be filled with helpful tips and thoughtful insights to support you and your child's journey.
                </p>

                <p className="text-sm leading-relaxed mb-4">
                    Whether you're navigating school transitions, big feelings, or curious minds, our blog will be here to offer understanding, encouragement, and connection.
                </p>

                <p className="italic text-sm text-[#4B5563]">We can't wait to share it with you.</p>
            </div>

            <Contact />

            <Footer />
        </div>
    )
}

export default Blog;