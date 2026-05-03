import Contact from "../components/common/Contact/Contact";
import Footer from "../components/common/Footer/Footer";
import BlogTile from "../components/features/Blog/BlogTile";
import CognitiveGuideContent from "../components/features/Blog/CognitiveGuideContent";

const Blog = () => {
    return (
        <section id="blog-section" aria-labelledby="blog-heading" className='flex flex-col bg-[#F5F5F3]'>
            {/* Header Section */}
            <div className="flex flex-col items-center text-center px-6 py-10 max-w-2xl mx-auto rounded-lg text-[#333]">
                <h1 id="blog-heading" className="text-3xl font-cinzel text-[#858D7E] mb-4">Insights & Resources</h1>
                <p className="text-lg font-playfair text-[#B25D3E] mb-6">Supporting your child's journey through knowledge.</p>
            </div>

            {/* Dynamic Tiles Section */}
            <div className="pb-20">
                <BlogTile subtitle={"A Guide for Sydney Parents"} title={"When Is a Cognitive Assessment Right for Your Child? "} imageSrc="/public/blog-1.jpg" imageAlt="Child learning support Sydney">
                    <CognitiveGuideContent />
                </BlogTile>
            </div>

            {/* Coming Soon Teaser */}
            <div className="text-center pb-20 px-6">
                <p className="text-sm leading-relaxed mb-4 max-w-xl mx-auto text-[#4B5563]">
                    Soon, this space will be filled with more helpful tips regarding school transitions, big feelings, and curious minds.
                </p>
                <p className="italic text-sm text-[#B25D3E]">More articles arriving soon.</p>
            </div>

            <Contact />
            <Footer />
        </section>
    );
};

export default Blog;