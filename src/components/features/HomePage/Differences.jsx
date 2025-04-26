const Differences = () => {
    return (
        <div className='flex flex-col h-screen'>
            <p className='font-bold'>Our Differences:</p>

            <div className='flex flex-col gap-2'>
                <div className='flex flex-col'>
                    <p className='italic underline'>Child-Centered Approach</p>
                    <p>Putting your child at the heart of everything we do.</p>
                </div>

                <div className='flex flex-col'>
                    <p className='italic underline'>Empowerment Through Understanding</p>
                    <p>Creating an environment where children and families feel heard and supported.</p>
                </div>

                <div className='flex flex-col'>
                    <p className='italic underline'>Accessible and Stress-Free</p>
                    <p>Making assessments easier by meeting children where they are.</p>
                </div>

                <div className='flex flex-col'>
                    <p className='italic underline'>Collaborative Care</p>
                    <p>Partnering with families and educators for your child's success.</p>
                </div>
            </div>
        </div>
    )
}

export default Differences;