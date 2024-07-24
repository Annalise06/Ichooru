import React from 'react';
import { motion } from "framer-motion";
import "./heropage.css";


const Heropage = () => {
  return (
    <div>
      <div className="content">
        <div className='content_text'>
          <h1 className='content_title'>Make Finding Tradesmen Very Simple</h1>
          <p className='content_subtitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Expedita enim iure natus voluptatem quo ullam tempora harum aspernatur ipsam esse rerum aut, 
            corrupti neque beatae similique delectus obcaecati nulla eum eaque sed. 
            Autem saepe, rerum impedit excepturi sunt qui modi illum ratione sed doloribus libero aliquam veritatis recusandae nemo accusantium.
          </p>
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
                    <span className='text-neutral-100 tracking-tight text-sm uppercase font-light font-mirza h-full w-full block relative linear-mask'>
                      Join the Waitlist
                    </span>
                    <span className='block absolute inset-0 rounded-md p-px linear-overlay'/>
                </motion.button>
              </div>
        </div>
      
        <div className="integrations">
          <div className='card'>
            <div className='card_content'>
              <h2>Glassmorphism Card</h2>
              <p>This is a sample card demonstrating the glassmorphism effect.</p>
              <button className="card_button">Click Me</button>            </div>
          </div>
          {/* <img src="segment-logo.png" alt="Segment" />
          <img src="asana-logo.png" alt="Asana" />
          <img src="intercom-logo.png" alt="Intercom" />
          <img src="gong-logo.png" alt="Gong" />
          <img src="hubspot-logo.png" alt="HubSpot" /> */}
        </div>
      </div>
    </div>
  )
}

export default Heropage;