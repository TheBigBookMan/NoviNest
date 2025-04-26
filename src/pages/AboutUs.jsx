import Footer from "../components/common/Footer/Footer";

const AboutUs = () => {
    return (
        <div>
               <p>About the Founder</p>

                <div className='flex flex-col gap-1'>


                    <p>Hi! I'm Ksenia, a clinical psychologist and the founder of Novi Nest Psychology.</p>

                    <p>I started this practice because I'm passionate about helping families make sense of the unique minds of the children they love and care for, while empowering young people to embrace their strengths.</p>

                    <p>The name <i>Novi Nest</i> holds both personal and symbolic meaning. “Novi” means “new” in several European languages—a quiet nod to my heritage and my last name, Zinoviev. Novi Nest represents a place of new beginnings: where understanding grows, and change becomes possible. Like a nest, it offers a safe and steady foundation—where children and families are supported as they prepare for what comes next.</p>

                    <p>With experience across both therapeutic and assessment-based roles in public and private sectors, my early career experience working with children and families has given me not only expertise in child development, but also a deep sense of compassion for young people and their inner worlds. I've seen firsthand how powerful the right support can be in shaping a child's future.</p>

                    <p>I approach the assessment process with warmth, curiosity, and a deep respect for each child's unique experience. I believe in the importance of collaborating with the people included in a child's inner circle: parents, educators, other professionals. Only when we all come together can we ensure that every young person receives the understanding, support, and opportunities they need to thrive—something every child deserves.</p>
                </div>

                <div className="flex flex-col gap-2">
                    <p>QUALIFICATIONS AND TRAININGS</p>

                    <p>Autism Diagnostic Observation Schedule, Second Edition (ADOS-2) Training</p>
                    <p>Speciailist Vilnerable Witness Forensic Interview Training</p>
                    <p>Master of Psychology (Clinical), Flinders University</p>
                    <p>Bachelor of Psychology (Honours), Flinders University</p>
                </div>

            <Footer />
        </div>
    )
}

export default AboutUs;