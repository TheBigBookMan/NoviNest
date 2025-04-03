import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="h-[60px] flex justify-between border-b ">
            <Link to='/'>
                <img src='logo' className='w-6 h-6' />
            </Link>

            <div className='flex gap-4'>
                <Link to='/'>
                    <p>Home</p>
                </Link>

                <Link to='/services'>
                    <p>Services</p>
                </Link>

                <Link to='/about-us'>
                    <p>About Us</p>
                </Link>

                <Link to='/resources'>
                    <p>Resources</p>
                </Link>

                <Link to='/contact'>
                    <p>Contact</p>
                </Link>
            </div>

            <div className='flex gap-1'>
                <a hre='/facebook' target='_blank'>
                    <p>Facebook</p>
                </a>

                <a href='/instagram' target='_blank'>
                    <p>Instagram</p>
                </a>

                <a href='/twitter' target='_blank'>
                    <p>Twitter</p>
                </a>

                <a href='/linkedin' target='_blank'>
                    <p>Linkedin</p>
                </a>
            </div>
        </div>
    )
}

export default Navbar;