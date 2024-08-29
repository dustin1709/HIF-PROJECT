import React, {useRef, useEffect} from 'react';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './components/Navbar';
import HomeBanner from './section/HomeBanner';
import Footer from './section/Footer';
import { Route, Routes } from 'react-router-dom';
import RealEstate from './pages/RealEstate';
import GoldenVisa from './pages/GoldenVisa';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
    <Navbar />
    <main>
      <div className='p-1'></div>
      <Routes>
      <Route path="/" element={<HomeBanner />} />
      <Route path="/realestate" element={<RealEstate />} />

      <Route path="/goldenvisa" element={<GoldenVisa />} />
      </Routes>
    </main>
    <Footer />
    </>
  );
}

export default App;
