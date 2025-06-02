import Footer from "../components/common/Footer/Footer";
import ContactSession from "../components/features/Contact/ContactSession";

const Contact = () => {
    return (
        <section id="contact-page-section" aria-labelledby="contact-page-heading"  className='flex flex-col '>
            <div className="flex flex-col gap-2 mb-4 p-6 text-center leading-relaxed">
                <h2 id="contact-page-heading" className="text-2xl font-cinzel">Book a Free Discovery Call</h2>
                <p>Schedule a complimentary 15-minute phone consultation to explore how we can help.</p>
            </div>

            <ContactSession />

            <Footer />
        </section>
    )
}

export default Contact;