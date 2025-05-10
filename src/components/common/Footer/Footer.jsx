import AboriginalFlag from '../../../assets/aboriginal-flag.png';
import TorresFlag from '../../../assets/torres-strait-islands.png';
import LgbtFlag from '../../../assets/lgbt-flag.png';

const Footer = () => {
    return (
        <footer className='flex flex-col md:flex-row h-fit gap-4 text-sm p-4 bg-[#858D7E] text-slate-100'>
            <p><strong>Novi Nest</strong> acknowledges the Traditional Custodians of the land on which we work, the Gadigal people of the Eora Nation. We pay our deepest respect to elders past, present and emerging. 
            We are a proudly inclusive organisation and an ally of the LGBTIQ+ community and the movement toward equality.</p>

            <div className='flex justify-center gap-1'>
                <img src={AboriginalFlag} alt='Aboriginal flag of Australia' className='w-12 md:w-40' />
                <img src={TorresFlag} alt='Torres Strait Islander flag of Australia' className='w-12 md:w-40' />
                <img src={LgbtFlag} alt='LGBTQ+ Progress Pride flag' className='w-12 md:w-40' />
            </div>

            <p>&copy; 2025 <strong>Novi Nest</strong>. All rights reserved.</p>

            <p>Website developed by <a className='underline text-blue-100' href="mailto:bjsmerd@gmail.com">Ben Smerd</a>.</p>
        </footer>
    )
}

export default Footer;