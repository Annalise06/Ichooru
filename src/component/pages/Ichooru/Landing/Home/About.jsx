import React, { useState, useEffect } from 'react';
import insta from "../../../../../Logo Design Export/Color Choices/JPG/Artboard 3 copy 16.jpg";
import mock1 from "../../../../../Logo Design Export/Mockup/Artboard 3 copy 14.jpg";
import mock2 from "../../../../../Logo Design Export/Mockup/Artboard 3 copy 13.jpg";
import mock3 from "../../../../../Logo Design Export/Mockup/Artboard 3 copy 15.jpg";
import { GiCheckedShield, GiSewingNeedle } from "react-icons/gi";
import img1 from "../../../../../Logo Design Export/Images/5-gif.gif";
import img2 from "../../../../../Logo Design Export/Images/unemployed-woman-with-cv-waiting-for-job-opportunity.png";
import img3 from "../../../../../Logo Design Export/Images/share.png";
import img4 from "../../../../../Logo Design Export/Images/otp-security.png";


import "./About.css";

const images = [`${insta}`, `${mock1}`, `${mock2}`, `${mock3}`]; // Image URLs

const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleMouseEnter = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };

  return (
    <div className='welcome md:px-[10rem] md:py-16 py-10'>
        
    <div className='container_t'>
        <div className="header">
            <h1 className='text-4xl uppercase font-mirza text-center'>Hello, Welcome To Ichooru.</h1>
        </div>

        <div className='separator flex justify-center py-3'>
            <div className='space-y-1'>
                <div className='bg-black w-10 h-[1px]'></div>
                <div className='bg-black w-8 h-[1px] ml-1'></div>
                <div className='bg-black w-6 h-[1px] ml-2'></div>
            </div>
            
        </div>

        <div className='md:flex md:px-0 px-16 gap-5 gap-x-5 py-5'>
            {/* first card */}
            <div className="text md:w-1/3 font-mirza">
                <div className="card">
                    <div className="icon flex justify-center">
                        <div className='space-y-2'>
                            <div className='flex justify-center'>
                                <div className="icon_img">
                                    <img className='w-[400px] object-cover' src={img2} alt="" />
                                </div>
                            </div>
                            
                            <div className="icon_text text-sm uppercase text-center">
                                <h3 className='font-mirza'>Hire an Artisan.</h3>
                                <div className='flex justify-center'>
                                    <div className='w-10 h-[1px] bg-black'></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <p className="card_text text-sm text-center font-mirza md:py-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Similique impedit autem voluptate. 
                        Vel adipisci deleniti fugit inventore asperiores!</p>
                        <div className='flex justify-center'>
                            <button className="text-black text-sm font-mirza border border-gray-300 px-6 py-1 rounded-md  hover:bg-black hover:text-white hover:transition hover:ease-in ease-out hover:duration-500 duration-500">Learn More</button>
                        </div>
                    
                </div>
            </div>

            {/* second card  */}
            <div className="text md:w-1/3 md:py-0 py-10 font-mirza">
                <div className="card">
                    <div className="icon flex justify-center">
                        <div className='space-y-2'>
                            <div className='flex justify-center'>
                                <div className="icon_img">
                                    <img className="w-[200px] h-[100px] object-cover" src={img3} alt="" />
                                </div>
                            </div>
                            
                            <div className="icon_text text-sm uppercase text-center">
                                <h3 className='font-mirza'>Connect with Artisan.</h3>
                                <div className='flex justify-center'>
                                    <div className='w-10 h-[1px] bg-black'></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <p className="card_text text-sm text-center font-mirza md:py-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Similique impedit autem voluptate. 
                        Vel adipisci deleniti fugit inventore asperiores!</p>
                        <div className='flex justify-center'>
                            <button className="text-black text-sm font-mirza border border-gray-300 px-6 py-1 rounded-md hover:bg-black hover:text-white hover:transition hover:ease-in ease-out hover:duration-500 duration-500">Learn More</button>
                        </div>
                    
                </div>
            </div>

            {/* third card  */}
            <div className="text md:w-1/3 font-mirza">
                <div className="card">
                    <div className="icon flex justify-center">
                        <div className='space-y-2'>
                            <div className='flex justify-center'>
                                <div className="w-[100px]">
                                    <img src={img4} alt="" />
                                </div>
                            </div>
                            
                            <div className="icon_text text-sm uppercase text-center">
                                <h3 className='font-mirza'>Verified Profiles.</h3>
                                <div className='flex justify-center'>
                                    <div className='w-10 h-[1px] bg-black'></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <p className="card_text text-sm text-center font-mirza md:py-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Similique impedit autem voluptate. 
                        Vel adipisci deleniti fugit inventore asperiores!</p>
                        <div className='flex justify-center'>
                            <button className="text-black text-sm font-mirza border border-gray-300 px-6 py-2 rounded-md hover:bg-black hover:text-white hover:transition hover:ease-in ease-out hover:duration-500 duration-500">Learn More</button>
                        </div>
                    
                </div>
            </div>
        </div>
    </div>
        
        {/* <div className='relative md:w-[40%] h-full'>
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
        <div className='md:w-[50%] md:mt-0 mt-5'>
            <h1 className='text-[#4abfe6] md:text-5xl text-3xl text-center font-mirza uppercase md:mb-10 md:mt-0 mt-10'>Make Finding Craft-Men Very Simple</h1>
            <p className='font-mirza md:text-left text-center md:text-lg text-xs font-medhium leading-relaxed'>Discover skilled craftsmen effortlessly with our easy-to-use platform. Whether you're looking for carpenters, 
            plumbers, or electricians, connect with top-rated professionals for all your home improvement needs today. 
            Simplify your search and get quality work done with just a few clicks!</p>
        </div> */}
        {/* <div className='flex justify-end'> 
            <img className='w-[10rem]' src={like} alt="" />
        </div> */}
    </div>
  )
}

export default About;