const Info = () => {
    return (
        <section
            id="info-section"
            aria-labelledby="info-heading"
            className="flex flex-col md:flex-row gap-12 items-center px-4 sm:px-8 md:px-16 lg:px-24 py-16 bg-[#F5F5F3] text-[#4B5563]"
        >
            {/* Text Content */}
            <article className="flex flex-col gap-8 w-full md:w-1/2">
                <h2
                id="info-heading"
                className="text-3xl md:text-4xl font-cinzel text-[#B25D3E]"
                >
                Welcome to Novi Nest – Where Understanding Nurtures Growth
                </h2>

                <div className="flex flex-col gap-4 text-sm md:text-base leading-relaxed">
                    <p>
                        At <strong>Novi Nest Psychology</strong>, we help families and
                        educators gain meaningful insight into the developmental profiles of
                        children in their care. Through evidence-based assessments, we aim
                        to highlight each child's strengths while identifying the support
                        they need to thrive.
                    </p>

                    <p>
                        We believe assessments should be <strong>accessible to all</strong>.
                        That's why we conduct school-based assessments, allowing children to
                        be seen in a familiar environment rather than a clinical setting. By
                        reducing stress and increasing comfort, we ensure assessment outcomes
                        that reflect your child's natural abilities and learning needs.
                    </p>

                    <p>
                        Our reports go beyond numbers—they provide{" "}
                        <strong>clear, actionable recommendations</strong> that empower
                        families and educators to support each child's development. At Novi
                        Nest, our goal is simple: to foster understanding, unlock potential,
                        and inform the way forward.
                    </p>
                </div>
            </article>

            {/* Image */}
            <div className="w-full md:w-1/2 hidden md:flex justify-center">
                <div className="relative w-full max-w-xs md:max-w-md bg-[#C4D7B2] rounded-t-[160px] rounded-b-2xl shadow-xl overflow-hidden ">
                    <img
                        src="ksenia-drawing.jpg"
                        alt="Portrait of Ksenia writing - founder of Novi Nest Psychology"
                        className="w-full h-full object-cover rounded-t-[160px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default Info;