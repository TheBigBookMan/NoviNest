const Info = () => {
    return (
        <article id="info-section" aria-labelledby="info-heading" className='flex flex-col gap-8 h-fit -mt-12  p-4 bg-[#858D7E] text-slate-100'>
            <h2 id="info-heading" className='text-3xl font-cinzel '>Welcome to Novi Nest - Where Understanding Nurtures Growth</h2>

            <div className='flex flex-col gap-4 text-sm leading-relaxed'>

            <p>
                At <strong>Novi Nest Psychology</strong>, we help families and educators gain meaningful insight into the developmental profiles of children in their care. Through evidence-based assessments, we aim to highlight each child's strengths while identifying the support they need to thrive.
            </p>

            <p>
                We believe assessments should be <strong>accessible to all</strong>. That's why we conduct school-based assessments, allowing children to be seen in a familiar environment rather than a clinical setting. By reducing stress and increasing comfort, we ensure assessment outcomes that reflect your child's natural abilities and learning needs.
            </p>

            <p>
                Our reports go beyond numbers—they provide <strong>clear, actionable recommendations</strong> that empower families and educators to support each child's development. At Novi Nest, our goal is simple: to foster understanding, unlock potential, and inform the way forward.
            </p>

            </div>
        </article>
    )
}

export default Info;