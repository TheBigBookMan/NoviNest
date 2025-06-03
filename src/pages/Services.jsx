import { Link } from "react-router-dom";
import Footer from "../components/common/Footer/Footer";
import AssessmentPackages from "../components/features/Services/AssessmentPackages";
import CognitiveAssessment from "../components/features/Services/CognitiveAssessment";
import Expect from "../components/features/Services/Expect";
import Contact from "../components/common/Contact/Contact";
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import AssessmentPackagesDesktop from "../components/features/Services/AssessmentPackages";
import ExpectDesktop from "../components/features/Services/Desktop/ExpectDesktop";

const Services = () => {
    return (
        <section id="services-section" className='flex flex-col gap-8' aria-labelledby="services-heading">
            <h2 id="services-heading" className='text-3xl font-cinzel text-center text-[#858D7E] py-8 -mb-8'>
                Our Services
            </h2>
            
            <CognitiveAssessment />

            <AssessmentPackages />
            {/* <AssessmentPackagesDesktop /> */}

            <div className="flex flex-col md:flex-row lg:px-60 px-4  gap-6 w-full">
                {/* Card 1: Something Else */}
                <article
                    id="something-else-article"
                    aria-labelledby="something-else-heading"
                    className="flex flex-col gap-2 bg-[#858D7E] text-slate-100 rounded-2xl shadow-md p-6 md:w-1/2"
                >
                    <h3
                    id="something-else-heading"
                    className="text-xl font-playfair mb-1"
                    >
                    Looking for Something Else?
                    </h3>
                    <p className="text-sm md:text-base italic">
                    If you require a modified assessment package, or are seeking a different type of assessment not listed here, please don't hesitate to get in touch. We're happy to discuss your needs and determine whether we can offer a tailored solution to support your goals.
                    </p>
                </article>

                {/* Card 2: Consultation */}
                <article
                    id="consultation-with-schools-or-allied-health"
                    aria-labelledby="schools-heading"
                    className="flex flex-col gap-2 bg-white text-[#4B5563] rounded-2xl shadow-md p-6 md:w-1/2 border-l-4 border-[#B25D3E]"
                >
                    <h3
                    id="schools-heading"
                    className="font-cinzel text-lg text-[#B25D3E] mb-1"
                    >
                    Consultation with Schools or Allied Health Providers
                    </h3>
                    <p className="text-sm md:text-base">
                    Following an assessment, we're happy to consult with teachers or allied health professionals to clarify recommendations and help guide ongoing support.
                    </p>
                </article>
            </div>

            <Expect />
            <ExpectDesktop />

            <article id="timeframes-article" className='flex flex-col p-4 gap-2 px-4 md:px-80 ' aria-labelledby="timeframes-heading">
                <h3 id="timeframes-heading" className=' font-cinzel text-lg'>A Note on Timeframes</h3>
                <p className='text-sm'>We aim to complete the entire assessment process within 4 to 6 weeks. While we keep things moving behind the scenes, we also take our time where it matters most.</p>
            </article>

            <article className="flex p-4 -mt-8 px-4 md:px-80 ">
                <Link
                    to="/fees"
                    className="flex items-center justify-between gap-2 w-fit px-4 py-2 rounded-lg bg-white shadow-sm hover:shadow-md hover:bg-gray-100 transition border border-gray-200 group"
                >
                    <h3 className="text-lg font-cinzel text-gray-800 group-hover:underline">
                        A Note on Fees
                    </h3>
                    <ArrowRightIcon className="h-5 w-5 text-gray-500 group-hover:text-gray-700 transition" />
                </Link>
            </article>

            <Contact />

            <Footer />
        </section>
    )
}

export default Services;