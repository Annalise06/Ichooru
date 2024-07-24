import React, {useState, useEffect} from 'react';
import Nav from "../Nav";
import Hero from './Hero';
import bg from "../../../../../Logo Design Export/Images/wrapper.png"
import Discover from './Discover';
import About from './About';
import Form from './Form';
import Footer from '../Footer';


const Homepage = () => {
    const [zoomIn, setZoomIn] = useState(true);

  useEffect(() => {
    // Toggle zoom effect at intervals
    const interval = setInterval(() => {
      setZoomIn((prevZoomIn) => !prevZoomIn);
    }, 5000); // Change the interval duration as needed

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="w-full md:h-[100vh] h-[95vh] relative overflow-hidden">
      {/* Background Image */}
      <div
        className={`absolute inset-0 md:bg-cover md:bg-center bg-center bg-fit bg-no-repeat transition-transform duration-[5000ms] ${
          zoomIn ? 'scale-110' : 'scale-100'
        }`}
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>

      <div className="bg-black/60b relative bg-gradient-to-t from-black via-black/80 to-black/75 h-screen md:h-[60vh] lg:h-[100vh]">
        {/* Nav */}
        <Nav />

        {/* Hero Section */}
        <Hero />
      </div>
    </div>
    <div>
      <About/>
      <Discover/>
      <Form/>
    </div>
    <Footer/>
  </>
  )
}

export default Homepage;