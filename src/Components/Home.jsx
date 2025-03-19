import React, { useEffect, useState } from 'react';
import './Home.css'; // Import the updated CSS

function Home() {
  const [isTextVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextVisible(true); // Make the text visible after a short delay
    }, 2000); // 2 seconds delay to simulate hidden text
    return () => clearTimeout(timer);
  }, []);

  const roleDescriptionText = "I am dedicated to building custom websites and web applications that blend design, functionality, and performance.";

  return (
    <div className="home-container">
      {/* Add the bubble elements */}
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>

      <div className="image-container">
        <img 
          src="https://i.pinimg.com/736x/18/53/20/185320e370eb79cefc1cdc2463a8efe4.jpg"  // Profile Image URL
          alt="Profile"
          className="profile-image" 
        />
      </div>
      <div className="text-container">
        <h1 className="intro-text">
          {isTextVisible && (
            <span className="animate-text">
              {"Hi, I’m a Web Developer".split("").map((char, index) => (
                <span key={index} className="letter" style={{ animationDelay: `${index * 0.1}s` }}>
                  {char}
                </span>
              ))}
            </span>
          )}
        </h1>
        {isTextVisible && (
          <h2 className="name">
            {("Kalai Vani").split("").map((char, index) => (
              <span key={index} className="letter" style={{ animationDelay: `${(index + 10) * 0.1}s` }}>
                {char}
              </span>
            ))}
          </h2>
        )}
        <p className="role-description">
          {isTextVisible && (
            roleDescriptionText.split(" ").map((word, index) => (
              <span
                key={index}
                className="word"
                style={{ animationDelay: `${(index + 20) * 0.2}s` }} // Adding extra delay for smooth flow
              >
                {word}{" "}
              </span>
            ))
          )}
        </p>
      </div>
    </div>
  );
}

export default Home;
