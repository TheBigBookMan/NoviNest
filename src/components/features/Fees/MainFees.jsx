const MainFees = () => {
    return (
        <article id="main-fees-article" aria-labelledby="main-fees-heading" className='flex flex-col gap-2  text-sm bg-[#858D7E] text-slate-100 p-4 py-6 pb-12 leading-relaxed'>
            <h3 id="main-fees-heading" className='text-xl'><span className='font-bold'>Hourly rate:</span> $240</h3>

            <p className='italic'>(This is intentionally set below the Australian Psychological Society's recommended fee of $311 for a standard session, as outlined in the APS National Schedule of Suggested Fees 2024-2025. Our goal is to offer high-quality, specialist care while remaining mindful of affordability for families).</p>

            <p>To confirm an assessment booking, we kindly request a <span className='font-bold'>deposit of $240</span>, which covers the initial parent interview.</p>

            <p>Payment plans are available. Please note that final reports will only be provided once full payment has been received.</p>
        </article>
    )
}

export default MainFees;