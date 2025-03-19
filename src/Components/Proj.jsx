import React from 'react';
import './Proj.css'; // Import the CSS file here

// Card component
const Card = ({ image, title, description, projectLink }) => (
  <div className="card">
    <div className="Box">
      <img src={image} alt={title} />
    </div>
    <div className="details">
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => window.open(projectLink, "_blank")} className="view-button">View</button>
    </div>
  </div>
);

// Bubbles component
const Bubbles = () => (
  <div className="bubbles">
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
  </div>
);

// Main component
const App = () => {
  const cardsData = [
    {
      image:"https://i.pinimg.com/736x/a5/3a/0e/a53a0ec23a2c47ac14554961a5d7778c.jpg",
      title: "Project 1",
      description:"I designed and developed a fully functional skincare e-commerce website using HTML, C++, JavaScript, and Bootstrap, which includes features for browsing products, selecting items, adding them to the cart, and processing transactions, providing users with a seamless online shopping experience.",
      projectLink: "https://example.com/project1"
    },
    {
      image: "https://i.pinimg.com/736x/28/4c/11/284c1122ed4efa7dca7b8c17abddae5a.jpg",
      title: "Project 2",
      description: "I developed a personalized portfolio website using React, showcasing my technical skills, professional experience, and key projects, while ensuring a smooth and engaging user experience through intuitive navigation and a visually appealing design.",
      projectLink: "https://example.com/project2"
    }
  ];

  return (
    <div className="container">
      {/* Bubbles Background */}
      <Bubbles />

      {/* Card components */}
      {cardsData.map((card, index) => (
        <Card 
          key={index} 
          image={card.image} 
          title={card.title} 
          description={card.description} 
          projectLink={card.projectLink}
        />
      ))}
    </div>
  );
}

export default App;
