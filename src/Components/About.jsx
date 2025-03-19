import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'; // Import the CSS for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
      
      <div className="about-content">
        {/* Image on the left */}
        <div className="about-image">
          <img 
            src="https://i.pinimg.com/736x/18/53/20/185320e370eb79cefc1cdc2463a8efe4.jpg" 
            alt="Kalaivani" 
          />
        </div>

        {/* Text on the right with animation */}
        <div className="about-text">
          <h1 className="animate-line">Hello, I'm Kalaivani.</h1>
          <p className="animate-line">I am a passionate front-end developer eager to create intuitive and responsive web applications.</p>
          <p className="animate-line">I am constantly learning new technologies like HTML, CSS, JavaScript, and React to enhance my skills.</p>
          <h2 className="animate-line">My Journey</h2>
          <p className="animate-line">My interest in web development began with experimenting with HTML and CSS. Later, I moved on to more dynamic web apps using React.</p>
          <h2 className="animate-line">Let’s Connect!</h2>
          <p className="animate-line">Feel free to explore my resume below or get in touch to discuss exciting projects!</p>

          <Link to="/resume">
            <button className="resume-button">View My Resume</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
