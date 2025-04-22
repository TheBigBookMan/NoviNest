import {Link} from 'react-router-dom';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';


const Navbar = () => {
    return (
        <div className="h-[80px] w-full flex  border-b sticky top-0 z-50 bg-white px-6 items-center ">
            <DesktopNav />

            <MobileNav />
        </div>
    )
}

export default Navbar;