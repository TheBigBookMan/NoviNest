const Testimony = () => {
    return (
        <article id="testimony-article" aria-labelledby="testimony-heading" className='flex flex-col bg-[#858D7E] p-4 text-slate-100 gap-8'>
            <div className='flex flex-col items-center'>
                <h3 id="testimony-heading" className='text-2xl font-cinzel'>Ksenia's Approach</h3>
            </div>

            <div className='flex flex-col items-center gap-4'>
                <blockquote className='font-playfair text-center text-lg'>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime impedit non provident perspiciatis facilis adipisci molestiae asperiores, nostrum id."</blockquote>
                
                <cite>- Ksenia Zinoviev</cite>
            </div>
        </article>
    )
}

export default Testimony;