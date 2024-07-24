// src/ClearbitForm.js
import React from 'react';
import logo from "../../../../../Logo Design Export/PNG/Logo Mark Only - Vertical@4x.png";
import img1 from "../../../../../Logo Design Export/Images/Online Sales.gif";
import img2 from "../../../../../Logo Design Export/Images/business-sales-growth.png";
import img3 from "../../../../../Logo Design Export/Images/connect.jpeg";
import img4 from "../../../../../Logo Design Export/Images/concept-of-data-privacy-and-policy.png";
import img5 from "../../../../../Logo Design Export/Images/1-gif.gif"
import './Form.css';

const Form = () => {
  return (
    <div className="containers">
      <div className="form-container">
        <div className="form-content">
            <div className='flex justify-center'>
                <img className="md:w-[5rem] w-[5rem]" src={logo} alt="" />
            </div>
            <h2>Get Started</h2>
            <form>
            <label>Email</label>
            <input className='placeholder:text-sm' type="email" placeholder="justin.tsang@ichooru.com" />
            <label>Message</label>
            <textarea className='placeholder:text-sm' placeholder="What are you hoping to accomplish with Ichooru?" />
            <button type="submit">Explore the platform</button>
            <a href="/">Start Free Account</a>
            </form>
        </div>
      </div>
      <div className="info-container">
        <h2>Ready to see how it works?</h2>
        <p>Join 1,000+ Ichooru artisans and put your skills to work.</p>
        <div className="awards">
          <div className="award">
            <img src={img2} alt="Market Intelligence Leader 2022" />
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div className="award">
            <img src={img1} alt="Sales Intelligence Leader 2022" />
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div className="award">
            <img src={img5} alt="Lead Intelligence Leader 2022" />
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
