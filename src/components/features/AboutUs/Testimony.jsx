const Testimony = () => {
    return (
        <section className="flex flex-col items-center px-6 py-16 md:py-24 lg:px-12">
            <h2
                id="testimony-heading"
                className="text-4xl md:text-5xl font-cinzel text-[#858D7E] mb-10 text-center"
            >
                Ksenia's Approach
            </h2>

            <div className="relative w-full max-w-5xl mb-16 bg-[#858D7E] text-slate-100 rounded-2xl shadow-xl overflow-hidden">
                <video
                    controls
                    playsInline
                    muted
                    preload="auto"
                    className="w-full h-auto rounded-2xl shadow-xl"
                >
                    <source src="ksenia-talking.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <article
                aria-labelledby="testimony-heading"
                className="flex flex-col bg-[#ffffff] p-6 md:p-10 text-[#333] gap-8 rounded-2xl shadow-xl border-l-4 border-[#B25D3E] w-full max-w-3xl"
            >
                <blockquote className="font-playfair text-center text-xl md:text-2xl text-[#B25D3E] leading-relaxed mb-2">
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