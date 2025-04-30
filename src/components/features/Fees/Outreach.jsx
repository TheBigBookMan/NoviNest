const Outreach = () => {
    return (
        <div className='flex flex-col p-4 text-slate-100 bg-[#858D7E] text-sm gap-4 py-12'>
            <p className="font-cinzel text-lg">Outreach and Travel</p>

            <p>As a mobile assessment service, Novi Nest Psychology offers the convenience of seeing your child in their natural learning environment, typically at school or a learning centre.</p>

            <p>To keep this service sustainable, travel fees apply for locations more than 10 km from Neutral Bay.</p>

            <ul className='flex flex-col gap-4 pl-6'>
                <li className='list-disc'>
                    <p><span className='font-bold'>Within 10 km</span> - No travel fee. This includes suburbs such as Mosman, Cremorne, Crows Nest, Cammeray, North Sydney, Artarmon, Chatswood, and Lane Cove.</p>
                </li>

                <li className='list-disc'>
                    <p><span className='font-bold'>Beyond 10 km</span> - A travel fee of <span className='font-bold'>$1 per kilometre (round trip)</span> is applied from Neutral Bay.</p>
                </li>

                <li className='list-disc'>
                    <p><span className='font-bold'>Tolls and Parking</span> - Any tolls or paid parking will be added to the invoice at cost.</p>
                </li>
            </ul>

            <p className='mt-8'>All travel arrangements and associated fees are confirmed in advance for full transparency and peace of mind. If you're unsure whether your child's school falls within the local zone, feel free to reach out for a quick estimate.</p>
        </div>
    )
}

export default Outreach;