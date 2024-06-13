import React from 'react';
import "./Discover.css";
// import rig from "../../../../../Logo Design Export/Mockup/Artboard 3 copy 13.jpg";
import eight from "../../../../../Logo Design Export/Images/7-gif.gif"
import gg from "../../../../../Logo Design Export/PNG/Horizontal Logo Full Color@4x.png"

const Discover = () => {
  return (
    <section className="earn-income-section">
      <div className="content-container">
        <div className='content-header'>
            <div className='content-header-entity'>
                <h2 className="title">Earn Income With Your Skill</h2>
                <p className="subtitle">Earn money, get promoted and grow your team.</p>
            </div>
            <div>
                 <button className="become-an-expert px-10 py-2">Become an Expert</button>
            </div>
        </div>
        
        <div className="features">
          <div className="feature">
            <img src="icon1.png" alt="Icon 1" className="feature-icon" />
            <h3 className="feature-title">Get Active</h3>
            <p className="feature-description">Get out and discover the benefits of exercise.</p>
          </div>
          <div className="feature">
            <img src="icon2.png" alt="Icon 2" className="feature-icon" />
            <h3 className="feature-title">Flexible Plans</h3>
            <p className="feature-description">Personalized plans to suit your lifestyle and commitment levels to get you in shape.</p>
          </div>
          <div className="feature">
            <img src="icon3.png" alt="Icon 3" className="feature-icon" />
            <h3 className="feature-title">Easy Access</h3>
            <p className="feature-description">Access to tools and resources, and customer support for all your needs.</p>
          </div>
        </div>
      </div>
    </section>



    // <div className='hidden md:flex mx-5 md:mx-0'>
    //     <div className='hidden background-svg'>
    //         {/* SVG figures */}
    //         <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
    //             <circle data-aos="fade-up" data-aos-delay="200" cx="120%" cy="-40%" r="60.49911920140928%" stroke="#dddddd" stroke-opacity="1" data-center-top="@r: 50%;" data-top-bottom="@r: 70%;" className="aos-init aos-animate skrollable skrollable-between"></circle>
    //             <circle data-aos="fade-up" data-aos-delay="400" cx="85%" cy="125%" r="75%" stroke="#dddddd" stroke-opacity="1" data-center-top="@r: 75%;" data-top-bottom="@r: 95%;" className="aos-init aos-animate skrollable skrollable-before"></circle>
    //             <circle data-aos="fade-up" data-aos-delay="600" cx="-25%" cy="125%" r="50%" stroke="#dddddd" stroke-opacity="1" data-center-top="@cx: -25%;" data-top-bottom="@cx: 45%;" className="aos-init aos-animate skrollable skrollable-before"></circle>
    //         </svg>
    //     </div>

    //     <div className='relative w-full my-1'>
    //         <div className='relative bg-red-500f h-[90vh] bg-top-right' style={{
    //             backgroundImage: `url(${eight})`,
    //         }}>
                
    //         </div>
    //         <div className='absolute top-0 w-full h-[80vh] bg-black/50'></div>
    //         <div className='absolute top-0 w-[7%] h-[13rem] bg-white left-10 z-10'></div>

    //         <div className='z-10'>
    //             <div className='absolute top-[8rem] bg-white w-[50%] h-[4rem]'>
    //                 <p className='font-bold font-mirza uppercase text-[#00008B] text-4xl text-right pr-10 pt-2'>Overview:</p>
    //                 <div>
    //             <h1 className='md:text-3xl font-semibold font-cabin uppercase py-5 text-[#00008bb7]'>Artisans Wanted! Find Your Next Gig on Ìchòòrù</h1>
    //             <p className='text-white'>Discovering exciting opportunities has never been easier! With Ìchòòrù, artisans have access to a vast array of projects waiting to be explored. 
    //                 Whether you're a master craftsman or a budding artisan, our platform offers a diverse selection of jobs tailored to match your unique skills and passions. <br /> <br />
    //                 From intricate woodworking to stunning artwork, there's something for every artisan on Ìchòòrù. 
    //                 Join our community today and embark on a journey filled with creativity, fulfillment, and endless possibilities!
    //             </p>
    //             </div>
    //             </div>
                
    //         </div>
    //     </div>
        
    //     {/* <div className='content w-fit h-[80vh] md:mx-44 md:py-20 md:flex md:space-x-5'>
    //         Text Area 
    //         <div className='md:w-[50%]'>
    //             <div className='relative w-32 h-1 bg-[#00008B]'>
    //                 <div className='absolute -top-0.5 bg-white w-2 h-2 rounded-sm animate-boxMovement'></div>
    //             </div>
    //             <h1 className='md:text-3xl font-semibold font-cabin uppercase py-5 text-[#00008bb7]'>Artisans Wanted! Find Your Next Gig on Ìchòòrù</h1>
    //             <p className='text-gray-400'>Discovering exciting opportunities has never been easier! With Ìchòòrù, artisans have access to a vast array of projects waiting to be explored. 
    //                 Whether you're a master craftsman or a budding artisan, our platform offers a diverse selection of jobs tailored to match your unique skills and passions. <br /> <br />
    //                 From intricate woodworking to stunning artwork, there's something for every artisan on Ìchòòrù. 
    //                 Join our community today and embark on a journey filled with creativity, fulfillment, and endless possibilities!
    //             </p>
    //         </div>

    //         Image Here 
    //         <div className='md:w-[50%] overflow-hidden rounded-md shadow-lg shadow-black'>
    //             <img className='w-[42rem] h-full hover:scale-110 transition-transform duration-700 rounded-md' src={pic} alt="Do you want to work?" />
    //         </div>  
    //     </div> */}
        
    // </div>
  )
}

export default Discover;