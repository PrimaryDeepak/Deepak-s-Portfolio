import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Deepak Kumar Sahu</h3>
          <p className="footer-description">
            Full Stack Developer passionate about creating amazing web experiences.
          </p>
          <div className="footer-social">
            <a href="https://linkedin.com/in/deepak-kumar" className="social-icon" target="_blank" rel="noopener noreferrer">💼</a>
            <a href="https://github.com/PrimaryDeepak" className="social-icon" target="_blank" rel="noopener noreferrer">🐱</a>
            <a href="https://twitter.com/deepak_kumar" className="social-icon" target="_blank" rel="noopener noreferrer">🐦</a>
            <a href="https://instagram.com/deepak_kumar" className="social-icon" target="_blank" rel="noopener noreferrer">📷</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            <li><span>Web Development</span></li>
            <li><span>UI/UX Design</span></li>
            <li><span>Mobile Apps</span></li>
            <li><span>Consulting</span></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Contact Info</h4>
          <div className="contact-info">
            <p>📧 deepak250704@gmail.com</p>
            <p>📱 +91 6362797128</p>
            <p>📍 Marathahalli, Bangalore 560037</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-divider"></div>
        <p className="copyright">
          © {currentYear} Deepak Kumar Sahu. All rights reserved. Made with ❤️ and JavaScript
        </p>
      </div>
    </footer>
  );
};

export default Footer;