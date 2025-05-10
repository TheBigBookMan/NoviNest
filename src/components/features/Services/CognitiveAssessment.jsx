const CognitiveAssessment = () => {
    return (
        <article id="cognitive-assessment-article" className='flex flex-col p-4 gap-6' aria-labelledby="cognitive-assessment-heading">
            <h3 id="cognitive-assessment-heading" className='font-cinzel text-xl'>Is a Cognitive or Academic Assessment Right for Your Child?</h3>

            <div className='flex flex-col text-sm gap-4 leading-relaxed'>
                <p>If you've been wondering whether a cognitive or academic assessment might support your child or adolescent, consider the questions below:</p>

                <ul className='flex flex-col gap-4 pl-6'>
                    <li className='list-disc'>Are they finding it difficult to keep up with learning or schoolwork?</li>
                    <li className='list-disc'>Do you suspect they may have a Specific Learning Disorder, such as dyslexia, dysgraphia, or dyscalculia?</li>
                    <li className='list-disc'>Are there noticeable differences between their potential and their academic performance?</li>
                    <li className='list-disc'>Are they being considered for a gifted program or selective school placement?</li>
                    <li className='list-disc'>Have their teachers raised concerns about attention, working memory, or processing speed?</li>
                    <li className='list-disc'>Would you like to better understand how your child learns and how to support them to thrive?</li>
                </ul>

                <p>If you answered yes to any of the above, a cognitive and/or academic assessment may offer the clarity, insight, and direction you're seeking. These assessments explore your child's unique learning profile and provide practical, tailored recommendations to support their educational and emotional wellbeing—at school and at home.</p>
            </div>
        </article>
    )
}

export default CognitiveAssessment;