const MainFees = () => {
    return (
        <div className='flex flex-col gap-4  text-sm '>
            <div className="flex flex-col gap-4 p-4">
                <p className='text-2xl font-cinzel'>A Note on Fees</p>
                
                <p>At Novi Nest Psychology, our flat-rate assessment packages reflect the time, care, and clinical expertise that go into every stage of the process, from your first phone call to the personalised report and feedback session.</p>

                <p>We believe in transparent pricing and strive to balance excellence with accessibility.</p>
            </div>

            <div className='flex flex-col gap-2 bg-[#858D7E] text-slate-100 p-4 pb-12'>
                <p className='text-base'><span className='font-bold'>Hourly rate:</span> $240</p>

                <p className='italic'>(This is intentionally set below the Australian Psychological Society's recommended fee of $311 for a standard session, as outlined in the APS National Schedule of Suggested Fees 2024-2025. Our goal is to offer high-quality, specialist care while remaining mindful of affordability for families).</p>

                <p>To confirm an assessment booking, we kindly request a <span className='font-bold'>deposit of $240</span>, which covers the initial parent interview.</p>

                <p>Payment plans are available. Please note that final reports will only be provided once full payment has been received.</p>
            </div>
        </div>
    )
}

export default MainFees;