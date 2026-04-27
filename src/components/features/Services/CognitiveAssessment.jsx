const CognitiveAssessment = () => {
    return (
        <article
            id="cognitive-assessment-article"
            aria-labelledby="cognitive-assessment-heading"
            className="w-full  text-slate-800 px-4 sm:px-6 md:px-10 lg:px-16 pb-12 md:pb-20"
        >
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 bg-white shadow-xl rounded-2xl p-6 sm:p-8 md:p-12 border-l-4 border-[#B25D3E]">
                <div className="md:w-1/2">
                    <h3
                        id="cognitive-assessment-heading"
                        className="text-2xl md:text-3xl font-cinzel text-[#B25D3E] mb-4"
                    >
                        Is an Assessment Right for Your Child?
                    </h3>

                    <p className="text-sm md:text-base leading-relaxed text-[#4B5563]">
                        If you’ve been wondering whether an assessment might support your child or adolescent, consider these questions:
                    </p>
                </div>

                <div className="md:w-1/2 flex flex-col gap-6 text-sm md:text-base leading-relaxed text-[#4B5563]">
                    <ul className="flex flex-col gap-4 pl-6">
                        <li className="list-disc">Are they finding it difficult to keep up with learning or schoolwork?</li>
                        <li className="list-disc">Do you suspect a Specific Learning Disorder, such as dyslexia, dysgraphia, or dyscalculia?</li>
                        <li className="list-disc">Are there noticeable differences between their potential and academic performance?</li>
                        <li className="list-disc">Are they being considered for a gifted program or selective school placement?</li>
                        <li className="list-disc">Have concerns been raised about attention, focus, or executive functioning (e.g., ADHD)?</li>
                        <li className="list-disc">Do you have questions about possible autism or differences in social communication?</li>
                        <li className="list-disc">Are there challenges with emotional regulation, behaviour, or sensory sensitivities? </li>
                        <li className="list-disc">Would you like a clearer understanding of how your child learns, thinks, and develops?</li>
                    </ul>

                    <p>
                        If you answered yes to any of the above, an assessment can provide clarity and direction. Our assessments explore your child’s cognitive, academic, and developmental profile, helping to identify learning differences, giftedness, and neurodevelopmental conditions such as ADHD and autism, while offering practical, tailored recommendations to support them at school and at home.
                    </p>
                </div>
            </div>
        </article>
    );
};

export default CognitiveAssessment;