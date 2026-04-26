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
                Welcome to Novi Nest - Where Understanding Nurtures Growth
                </h2>

                <div className="flex flex-col gap-4 text-sm md:text-base leading-relaxed">
                    <p>
                        <strong>Novi Nest Psychology is a Sydney-based clinical psychology practice specialising in cognitive, academic, ADHD, and autism assessments for children and adolescents.</strong> We offer mobile, school-based assessments across Sydney, as well as private assessments in Chatswood.
                    </p>

                    <p>
                        At Novi Nest, we help families and educators gain clear insight into a child’s learning and developmental profile. Through evidence-based assessments, we identify strengths, learning differences, and support needs, including giftedness and neurodiversity (ADHD and autism).
                    </p>

                    <p>
                        We prioritise a child-centred approach by conducting assessments in familiar environments where possible, supporting more accurate and meaningful outcomes. Our reports go beyond scores, providing practical, individualised recommendations to guide the next steps at home and at school.
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