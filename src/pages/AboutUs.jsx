import Contact from "../components/common/Contact/Contact";
import Footer from "../components/common/Footer/Footer";
import Bio from "../components/features/AboutUs/Bio";
import Qualifications from "../components/features/AboutUs/Qualifications";
import Testimony from "../components/features/AboutUs/Testimony";

const AboutUs = () => {
    

    return (
        <section id="about-us-section" className='flex flex-col gap-8'>
            <Bio />

            <Testimony />

            <Qualifications />

            <Contact />

            <Footer />
        </section>
    )
}

export default AboutUs;