import AboriginalFlag from '../../../assets/aboriginal-flag.png';
import TorresFlag from '../../../assets/torres-strait-islands.png';
import LgbtFlag from '../../../assets/lgbt-flag.png';

const Footer = () => {
    return (
        <div className='flex flex-col md:flex-row h-fit gap-4 text-sm p-4 bg-[#858D7E] text-slate-100'>
            <p>Novi Nest acknowledges the Traditional Custodians of the land on which we work, the Gadigal people of the Eora Nation peoples. We pay our deepest respect to elders past, present and emerging. 
            We are a proudly inclusive organisation and an ally of the LGBTIQ+ community and the movement toward equality.</p>

            <div className='flex justify-center gap-1'>
                <img src={AboriginalFlag} alt='Indigenous Australian flag' className='w-12 md:w-40' />
                <img src={TorresFlag} alt='Torres Strait Islander flag' className='w-12 md:w-40' />
                <img src={LgbtFlag} alt='LGBTQ+ Progress Pride flag' className='w-12 md:w-40' />
            </div>

            <p>©2025 Novi Nest</p>

            <p>Made by Ben Smerd: <a className='underline text-blue-100 ' href="mailto:bjsmerd@gmail.com">bjsmerd@gmail.com</a></p>
        </div>
    )
}

export default Footer;