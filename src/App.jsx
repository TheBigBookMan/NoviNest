import { useState } from 'react';
import './App.css';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import {Routes, Route} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col min-w-screen h-full'>
        <Navbar />
        
        <Routes>

            <Route path='/' index element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/contact' element={<Contact />} />

        </Routes>

        <Footer />
    </div>
  )
}

export default App;