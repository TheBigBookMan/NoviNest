import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const Navbar = () => {
    return (
        <header className="h-[80px] w-full flex  border-b sticky top-0 z-50 px-6 items-center bg-[#858D7E]" aria-label="Main navigation">
            <DesktopNav />

            <MobileNav />
        </header>
    )
}

export default Navbar;