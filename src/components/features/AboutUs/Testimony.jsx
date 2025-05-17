import kseniaApproach from '/public/ksenia-talking.mp4';

const Testimony = () => {
    return (
        <section className="flex flex-col items-center p-6">
            <h2 id="testimony-heading" className="text-4xl font-cinzel text-[#858D7E] mb-8 text-center">
                Ksenia's Approach
            </h2>

            <div className="relative w-full mb-16 bg-[#858D7E] text-slate-100 rounded-2xl shadow-xl overflow-hidden ">
                <video
                    controls
                    preload="none"
                    className="w-full h-auto rounded-2xl shadow-xl"
                >
                    <source src={kseniaApproach} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <article 
                aria-labelledby="testimony-heading" 
                className="flex flex-col bg-[#F5F5F3] p-8 text-[#333] gap-8 rounded-2xl shadow-xl border-l-4 border-[#B25D3E] max-w-3xl w-full"
            >
                <blockquote className="font-playfair text-center text-xl text-[#B25D3E] leading-relaxed mb-4">
                    “Ultimately, this work is about helping things make sense, so that moving forward feels a little less overwhelming, and a little more possible.”
                </blockquote>
                    
                <cite className="text-sm text-[#4B5563] italic text-center">
                    - Ksenia Zinoviev
                </cite>
            </article>
        </section>
    );
};

export default Testimony;