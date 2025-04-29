import { Link } from 'react-router-dom';
import logoSVG from '../../../assets/nest-svg.svg'; 

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
        <div className='flex flex-col h-fit w-full  p-4 mt-20 text-sm gap-12'>
            <div className='flex justify-center'>
                <img src={logoSVG} className='w-32' />
            </div>

            <div className='flex flex-col  gap-4'>
                <div className='flex flex-col'>
                    <p className='font-cinzel text-lg'>Contact Novi Nest</p>
                    <a href="mailto:hello@novinestpsychology.com.au" className='underline'>hello@novinestpsychology.com.au</a>
                </div>

                <div className='flex flex-col'>
                    <p className='font-cinzel text-lg'>About</p>
                    <Link to='/services'>
                        <p className='underline'>Services</p>
                    </Link>

                    <Link to='/about-us'>
                        <p className='underline'>About Us</p>
                    </Link>

                    <Link to='/resources'>
                        <p className='underline'>Resources</p>
                    </Link>
                </div>

                <div className='flex flex-col'>
                    <p className='font-cinzel text-lg'>Follow</p>

                    <a href='linkedin.com' target='_blank' className='underline' >Linkedin</a>

                    <a onClick={openInstagram} className='underline' >Instagram</a>

                    <a href='facebook.com' target='_blank' className='underline' >Facebook</a>
                </div>
            </div>
        </div>
    )
}

export default Contact;