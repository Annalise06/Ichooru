// src/components/FooterSection.js
import React from 'react';
import logo from "../../../../Logo Design Export/PNG/Horizontal Logo Single Color@4x.png"
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="" />
        </div>
        <div className="footer-links">
          <div className='space-y-3'>
            <p>Link 1:1</p>
            <p>Link 1:2</p>
            <p>Link 1:3</p>
          </div>
          <div className='space-y-3'>
            <p>Link 2:1</p>
            <p>Link 2:2</p>
            <p>Link 2:3</p>
          </div>
          <div className='space-y-3'>
            <p>Link 3:1</p>
            <p>Link 3:2</p>
            <p>Link 3:3</p>
          </div>
        </div>
      </div>
      <div className="footer-contact mx-44 mt-8">
          <p>Contact</p>
          <p>Email</p>
        </div>
    </footer>
  );
};

export default Footer;
