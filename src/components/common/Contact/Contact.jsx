import { Link } from 'react-router-dom';
import logoSVG from '/public/nest-svg.svg'; 

const Contact = () => {

    const openInstagram = () => {
        const username = 'novinestpsychology';
        const appLink = `instagram://user?username=${username}`;
        const webLink = `https://www.instagram.com/${username}/`;

        // Try opening app link
        window.location.href = appLink;

        // After a short delay, fallback to web link
        setTimeout(() => {
            window.location.href = webLink;
        }, 500);
    };

    return (
        <section id="contact-section" aria-labelledby="contact-heading" className='flex flex-col h-fit w-full  p-4 py-12 text-sm gap-12'>
            <div className='flex justify-center'>
                <img src={logoSVG} alt="Novi Nest Psychology Logo" className='w-32' />
            </div>

            <div className='flex flex-col  gap-4'>
                <div className='flex flex-col'>
                    <h2 id="contact-heading" className='font-cinzel text-lg'>Contact Novi Nest</h2>
                    <a href="mailto:hello@novinestpsychology.com.au" className='underline' aria-label="Email Novi Nest Psychology">hello@novinestpsychology.com.au</a>
                </div>

                <address className='font-playfair'>Based in Sydney, NSW, Australia</address>

                <div className='flex flex-col'>
                    <h3 className='font-cinzel text-lg'>About</h3>
                    <Link to='/services'>
                        <p className='underline'>Services</p>
                    </Link>

                    <Link to='/about-us'>
                        <p className='underline'>About Us</p>
                    </Link>

                    <Link to='/fees'>
                        <p className='underline'>Fees</p>
                    </Link>
                </div>

                <div className='flex flex-col'>
                    <h3 className='font-cinzel text-lg'>Follow</h3>

                    <a href='https://linkedin.com' rel="noopener noreferrer" target='_blank' className='underline' aria-label="Follow us on LinkedIn" >LinkedIn</a>

                    <a onClick={openInstagram} rel="noopener noreferrer" target='_blank' className='underline' aria-label="Follow us on Instagram">Instagram</a>

                    <a href='https://facebook.com' rel="noopener noreferrer" target='_blank' className='underline'aria-label="Follow us on Facebook">Facebook</a>
                </div>
            </div>
        </section>
    )
}

export default Contact;