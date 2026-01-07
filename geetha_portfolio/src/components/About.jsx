import React from 'react';
import '../css/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="lead">
            I'm a Technical Implementation Leader with 16+ years of experience delivering enterprise-scale banking and payment solutions across 12 countries.
             My expertise spans leading complex technology migrations, managing cross-functional teams, 
            and translating strategic vision into production-grade systems that drive business value.
            </p>
            <p>
            Recently, I've expanded my passion into cloud-native product development, building solutions that empower small businesses to scale through technology. 
            I combine deep domain knowledge in financial services with hands-on technical capabilities in AWS, microservices architecture, and agile delivery methodologies.
            </p>
            <p>
            Whether orchestrating multi-million dollar banking implementations or developing MVPs for local businesses,
            I thrive on solving complex technical challenges while keeping the end-user experience at the forefront. I believe technology should be accessible, 
            scalable, and purposefully designed to create real-world impact.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h3>16+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>10+</h3>
                <p>Technologies</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <div className="image-placeholder">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M39.5,-65.5C51.4,-58.1,61.5,-47.3,68.4,-34.4C75.3,-21.5,79,-6.5,77.8,7.9C76.6,22.3,70.5,36.1,61.1,47.3C51.7,58.5,39,67.1,25.2,71.3C11.4,75.5,-3.5,75.3,-18.1,71.5C-32.7,67.7,-47,60.3,-58.3,49.5C-69.6,38.7,-78,24.5,-80.1,9.4C-82.2,-5.7,-78,-21.7,-69.8,-35.2C-61.6,-48.7,-49.4,-59.7,-35.7,-66.3C-22,-72.9,-6.8,-75.1,6.1,-73.9C19,-72.7,27.6,-72.9,39.5,-65.5Z" transform="translate(100 100)" />
                </svg>
                <div className="user-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;