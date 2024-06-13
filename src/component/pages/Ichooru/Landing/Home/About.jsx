import React, { useState, useEffect } from 'react';
import insta from "../../../../../Logo Design Export/Color Choices/JPG/Artboard 3 copy 16.jpg";
import mock1 from "../../../../../Logo Design Export/Mockup/Artboard 3 copy 14.jpg";
import mock2 from "../../../../../Logo Design Export/Mockup/Artboard 3 copy 13.jpg";
import mock3 from "../../../../../Logo Design Export/Mockup/Artboard 3 copy 15.jpg";
// import "./About.css";

const images = [`${insta}`, `${mock1}`, `${mock2}`, `${mock3}`]; // Image URLs

const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleMouseEnter = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };

  return (
    <div className='relative md:flex justify-between md:mx-32 md:my-20'>
        <div className='relative w-[40%] h-full'>
            <div className="relative w-fugll" onMouseEnter={handleMouseEnter}>
                {images.map((imageUrl, index) => (
                    <img
                    key={index}
                    className={index === currentIndex ? 'opacity-100 rounded-md' : 'absolute top-0 left-0 opacity-0 transition-opacity ease-in duration-500'}
                    src={imageUrl}
                    alt="Description"
                    />
                ))}
            </div>
        </div>
        <div className='w-[50%]'>
            <h1 className='text-[#4abfe6] text-5xl text-center font-mirza uppercase mb-10'>Make Finding Craft-Men Very Simple</h1>
            <p className='font-poppins text-left text-gray-700 text-lg font-medium leading-relaxed'>Discover skilled craftsmen effortlessly with our easy-to-use platform. Whether you're looking for carpenters, 
            plumbers, or electricians, connect with top-rated professionals for all your home improvement needs today. 
            Simplify your search and get quality work done with just a few clicks!</p>
        </div>
        {/* <div className='flex justify-end'> 
            <img className='w-[10rem]' src={like} alt="" />
        </div> */}
    </div>
  )
}

export default About;