const Services = () => {
    return (
        <div className='flex flex-col h-screen'>
            <p className='font-bold'>Our Services:</p>

            <div className='flex flex-col gap-2'>
                <div className='flex flex-col'>
                    <p className='italic underline'>Cognitive Assessment</p>
                    <p>A cognitive assessment evaluates intellectual ability, providing insight into visual spatial abilities, verbal skills, ability to remember information, and processing speed.</p>
                </div>

                <div className='flex flex-col'>
                    <p className='italic underline'>Academic Assessment</p>
                    <p>An academic assessment assesses key areas of academic functioning, including reading, writing, and mathematics abilities to pinpoint learning difficulties and identify educational support required.</p>
                </div>

                <div className='flex flex-col'>
                    <p className='italic underline'>Full Psychoeducational Assessment</p>
                    <p>A full psychoeducational assessment combines cognitive and academic assessments to provide a full picture of your child's learning profile, strengths, and support needs.</p>
                </div>
            </div>

            <p>*Coming Soon! Autism and ADHD diagnostic assessments*</p>
        </div>
    )
}

export default Services;