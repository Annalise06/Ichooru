import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import "./Hero.css"

const Hero = () => {
  return (
    <div className='absolute md:flex justify-center md:bottom-[7rem] bottom-[10rem] mx-5'>
        <div className='md:w-[70%] text-[#F8FEFF] text-center'>
            <div className='flex justify-center text-[10px] text-[#ADD8E6] space-x-5  uppercase'>
              <span>Recognition.</span>
              <span>Marketing.</span>
              <span>Business support</span>
              <span></span>
            </div>
            <h1 className='text-[#ADDb8EF] lg:pb-[4rem] pb-5 lg:pt-3 pt-5 lg:text-6xl text-4xl font-bold font-mirza'>We connect customers to the nearest tradesmen with zero hassle.</h1>

            <div className='flex justify-center space-x-20'>
              <div>
                <motion.button 
                className='px-6 py-3 rounded-md relative radial-gradient' 
                initial={{ "--x": "100%", scale: 1}} 
                animate={{ "--x": "-100%"}}
                whileTap={{ scale: 0.97}} 
                transition={{repeat: Infinity, repeatType: "loop", repeatDelay: 1, type: "spring", stiffness: 20, damping: 15, mass: 2, scale: {
                  type: "spring",
                  stiffness: 10,
                  damping: 5,
                  mass: 0.1
                }}}
                >
                    <span className='text-neutral-100 tracking-tight text-sm uppercase font-light h-full w-full block relative linear-mask'>
                      Post a Job
                    </span>
                    <span className='block absolute inset-0 rounded-md p-px linear-overlay'/>
                </motion.button>
              </div>
              <div>
                <motion.button 
                className='px-6 py-3 rounded-md relative radial-gradient' 
                initial={{ "--x": "100%", scale: 1}} 
                animate={{ "--x": "-100%"}}
                whileTap={{ scale: 0.97}} 
                transition={{repeat: Infinity, repeatType: "loop", repeatDelay: 1, type: "spring", stiffness: 20, damping: 15, mass: 2, scale: {
                  type: "spring",
                  stiffness: 10,
                  damping: 5,
                  mass: 0.1
                }}}
                >
                    <span className='text-neutral-100 tracking-tight text-sm uppercase font-light h-full w-full block relative linear-mask'>
                      Hire a Pro
                    </span>
                    <span className='block absolute inset-0 rounded-md p-px linear-overlay'/>
                </motion.button>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Hero;