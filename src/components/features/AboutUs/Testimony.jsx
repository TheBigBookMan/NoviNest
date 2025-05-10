const Testimony = () => {
    return (
        <article 
            id="testimony-article" 
            aria-labelledby="testimony-heading" 
            className='flex flex-col bg-[#F5F5F3] p-8 mx-4 text-[#333] gap-8 rounded-xl shadow-md border-l-4 border-[#B25D3E] max-w-3xl mx-auto'
        >
            <div className='flex flex-col items-center'>
                <h3 id="testimony-heading" className='text-3xl font-cinzel text-[#858D7E] mb-4 text-center'>
                    Ksenia's Approach
                </h3>
            </div>

            <blockquote className='font-playfair text-center text-xl text-[#B25D3E] leading-relaxed mb-4'>
                “Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime impedit non provident perspiciatis facilis adipisci molestiae asperiores, nostrum id.”
            </blockquote>
                
            <cite className="text-sm text-[#4B5563] italic text-center">
                - Ksenia Zinoviev
            </cite>
        </article>
    )
}

export default Testimony;