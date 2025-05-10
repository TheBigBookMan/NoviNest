import Contact from "../components/common/Contact/Contact";
import Footer from "../components/common/Footer/Footer";
import MainFees from "../components/features/Fees/MainFees";
import Outreach from "../components/features/Fees/Outreach";
import Packages from "../components/features/Fees/Packages";


const Fees = () => {
    return (
        <section id="fees-section" aria-labelledby="fees-heading" className='flex flex-col '>
            <div className="flex flex-col gap-4 p-4 leading-relaxed">
                <h2 id="fees-heading" className='text-2xl font-cinzel'>A Note on Fees</h2>
                
                <p>At Novi Nest Psychology, our flat-rate assessment packages reflect the time, care, and clinical expertise that go into every stage of the process, from your first phone call to the personalised report and feedback session.</p>

                <p>We believe in transparent pricing and strive to balance excellence with accessibility.</p>
            </div>

            <MainFees />

            <Packages />

            <Outreach />

            <Contact />

            <Footer />
        </section>
    )
}

export default Fees;