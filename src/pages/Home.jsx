import Footer from "../components/common/Footer/Footer";
import Landing from "../components/features/HomePage/Landing";
import Info from "../components/features/HomePage/Info";
import Differences from "../components/features/HomePage/Differences";
import Services from "../components/features/HomePage/Services";

const Home = () => {
    return (
        <div className='flex flex-col w-full h-full p-2'>
            <Landing />

            <Info />

            <Differences />

            <Services />

            <Footer />
        </div>
    )
}

export default Home;