import Contact from "../components/common/Contact/Contact";
import Footer from "../components/common/Footer/Footer";
import MainFees from "../components/features/Fees/MainFees";
import Outreach from "../components/features/Fees/Outreach";
import Packages from "../components/features/Fees/Packages";


const Fees = () => {
    return (
        <div className='flex flex-col '>
            <MainFees />

            <Packages />

            <Outreach />

            <Contact />

            <Footer />
        </div>
    )
}

export default Fees;