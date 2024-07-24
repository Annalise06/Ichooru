import React, { useState, useEffect } from "react";
import logo from "../../../../../Logo Design Export/PNG/Horizontal Logo Single Color@4x.png";
import "./navi.css";

const Navi = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("top");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  // Function to handle scrolling and toggle the navbar visibility
  const handleScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    const isScrollingDown = top > 0 && 0 > lastScrollTop;
    setIsNavbarVisible(!isScrollingDown);
    setLastScrollTop(0);
  };

  const [lastScrollTop, setLastScrollTop] = useState(0);

  // Add event listener to handle scroll events
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <div className="w-full space-y-0.5">
    {/* top Nav  */}
    <nav className=" w-full h-[5rem] text-white font-bold bg-[#021024m] border-b border-[#1aa9fc21] text-center flex justify-between md:px-0 px-2">
      {/* leftside */}
      <div>
        <img className="md:w-[15rem] w-[10rem]" src={logo} alt="" />
        {/* <h1 className="text-2xl font-bold italic">LOGO</h1> */}
      </div>  
      <div className="md:hidden flex pt-3 pr-3">
        <p className="text-2xl">=</p>
      </div>

      <div className="hidden md:flex text-sm pt-10">
        <div className="flex space-x-10">
          <div>
            <h1 className="hover_text">How to join</h1>
          </div>
          <div>
           <p className="hover_text">Hire Me</p>
          </div>
          <div>
            <p className="hover_text">Help & Support</p>
          </div>
        </div>
      </div>
    </nav>

    {/* bottom Nav */}
    {/* <nav className="w-full hidden md:flex justify-between h-[3rem] text-[#FFFFFF] bg-[#021024m] bordero-b border-[o#c1e8ff11] text-center pt-[10px] px-32">
      <div>
        <ul className="flex space-x-20">
          <li className="hover_text">Home</li>
          <li className="hover_text">About Us</li>
          <li className="hover_text">Explore Services</li>
        </ul>
      </div>

        <div className="space-x-16">
          <button className="hover_text">Sign In</button>
          <button className="hover_text">Sign Up</button>
        </div>
    </nav> */}
   </div>
  );
};

export default Navi;

