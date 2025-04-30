import Contact from "../components/common/Contact/Contact";
import Footer from "../components/common/Footer/Footer";
import Bio from "../components/features/AboutUs/Bio";
import Qualifications from "../components/features/AboutUs/Qualifications";
import Testimony from "../components/features/AboutUs/Testimony";

const AboutUs = () => {
    

    return (
        <div className='flex flex-col gap-8'>
            <Bio />

            <Testimony />

            <Qualifications />

            <Contact />

            <Footer />
        </div>
    )
}

export default AboutUs;