import React from 'react';
import '../css/Hero.css';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting fade-in">Hi, I'm</p>
            <h1 className="hero-name fade-in-up">Geetha Kondapalli</h1>
            <p className="hero-title fade-in-up">Product Implementation Lead</p>
            <p className="hero-description fade-in-up">
            A Technical Implementation Leader with 16+ years driving enterprise banking solutions across global markets. 
    
            Recently expanded into full-stack product development, building practical solutions for underserved businesses. 
            Passionate about transforming strategic vision into scalable, user-centric technology that creates measurable business impact.
            </p>
            <div className="hero-buttons fade-in-up">
              <button className="btn btn-primary" onClick={scrollToProjects}>
                View My Work
              </button>
              <button className="btn btn-secondary" onClick={scrollToContact}>
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-visual fade-in">
            <div className="code-window">
              <div className="window-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="window-content">
                <pre><code>{`const opentowork = {
  name: "Geetha Kondapalli",
  role: "Technical Implementation Lead"",
  skills: [
    "Finalce Product Implementation and Deployment", 
    "Small scale Product Development", 
    "Vendor Management",
  ],
  passionate: true,
  seekingOpportunities: true,
  adaptive: true,
  available: true
};`}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;