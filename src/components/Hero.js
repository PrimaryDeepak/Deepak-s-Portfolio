import React from 'react';
import './Hero.css';
import heroImage from '../images/Deepak2.jpg'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line">{'const developer = {'}</span>
            <span className="title-name">  name: "Deepak Kumar Sahu",</span>
            <span className="title-role">  role: "Frontend Developer"</span>
            <span className="title-line">{'};'}</span>
          </h1>
          <div className="hero-description">
            <div className="code-line">
              <span className="comment">// Crafting digital experiences with code</span>
            </div>
            <div className="code-line">
              <span className="keyword">function</span> <span className="function-name">buildAmazingApps</span> <span className="bracket-start">() {'{'}</span>
            </div>
            <div className="code-line">
              &nbsp;&nbsp;<span className="keyword">return</span> <span className="string">"Beautiful & Functional UIs"</span>;
            </div>
            <div className="bracket-end">
              {'}'}
            </div>
          </div>
          <div className="hero-buttons">
            <button className="btn btn-primary">{'npm run projects'}</button>
            <button className="btn btn-secondary">{'git connect'}</button>
          </div>
        </div>

        <div className="hero-image">
          <div className="profile-container">
            <div className="profile-image">
              <img
                src={heroImage}
                alt="Deepak Kumar Sahu"
                className="profile-photo"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;