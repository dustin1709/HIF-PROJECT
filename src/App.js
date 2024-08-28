import React, {useRef, useEffect} from 'react';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './components/Navbar';
import HomeBanner from './section/HomeBanner';
import Footer from './section/Footer';

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
      <HomeBanner />
    </main>
    <Footer />
    </>
  );
}

export default App;
