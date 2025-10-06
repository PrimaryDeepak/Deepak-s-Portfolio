import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'CSS/SCSS', level: 88 },
    { name: 'Python', level: 75 },
    { name: 'MongoDB', level: 70 }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{'<About />'}</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="text-card">
              <h3>{'const aboutMe = {'}</h3>
              <div className="code-block">
                <p className="code-line">
                  <span className="property">experience:</span> <span className="string">"6 months"</span>,
                </p>
                <p className="code-line">
                  <span className="property">passion:</span> <span className="string">"Frontend Development"</span>,
                </p>
                <p className="code-line">
                  <span className="property">mission:</span> <span className="string">"Crafting beautiful UIs"</span>,
                </p>
                <p className="code-line">
                  <span className="property">learning:</span> <span className="string">"Always exploring new tech"</span>
                </p>
              </div>
              <h3>{'};'}</h3>
              
              <div className="stats">
                <div className="stat-item">
                  <span className="stat-number" data-target="50">0</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number" data-target="5">6</span>
                  <span className="stat-label">Months Experience</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="skills-section">
            <h3 style={{ color: 'var(--accent-purple)' }}>{'// Technical Proficiency'}</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-item" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{'--skill-level': `${skill.level}%`}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;