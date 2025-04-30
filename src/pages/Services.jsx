import { Link } from "react-router-dom";
import Footer from "../components/common/Footer/Footer";
import AssessmentPackages from "../components/features/Services/AssessmentPackages";
import CognitiveAssessment from "../components/features/Services/CognitiveAssessment";
import Expect from "../components/features/Services/Expect";

const Services = () => {
    return (
        <div className='flex flex-col gap-8'>
            <CognitiveAssessment />

            <AssessmentPackages />

            <div className='flex flex-col p-4 py-8 gap-2 text-slate-100 bg-[#858D7E]'>
                <p className='text-xl font-playfair'>Looking for Something Else?</p>
                <p className='text-sm italic'>If you require a modified assessment package, or are seeking a different type of assessment not listed here, please don't hesitate to get in touch We're happy to discuss your needs and determine whether we can offer a tailored solution to support your goals.</p>
            </div>

            <div className="flex flex-col p-4 gap-2">
                <p className=' font-cinzel text-lg'>Consultation with Schools or Allied Health Providers</p>
                <p className='text-sm'>Following an assessment, we're happy to consult with teachers or allied health professionals to clarify recommendations and help guide ongoing support.</p>
            </div>

            <Expect />

            <div className='flex flex-col p-4 gap-2'>
                <p className=' font-cinzel text-lg'>A Note on Timeframes</p>
                <p className='text-sm'>We aim to complete the entire assessment process within 4 to 6 weeks. While we keep things moving behind the scenes, we also take our time where it matters most.</p>
            </div>

            <div className='flex p-4 -mt-8'>
                <Link to='/fees' >
                    <p className='underline text-lg font-cinzel'>A Note on Fees</p>
                </Link>
            </div>

            <Footer />
        </div>
    )
}

export default Services;