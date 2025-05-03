import Footer from "../components/common/Footer/Footer";
import BookSession from "../components/features/Contact/BookSession";
import ContactInfo from "../components/features/Contact/ContactInfo";
import ContactSession from "../components/features/Contact/ContactSession";

const Contact = () => {
    return (
        <div className='flex flex-col '>
            <ContactSession />

            <Footer />
        </div>
    )
}

export default Contact;