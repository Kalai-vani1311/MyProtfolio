import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    { name: 'HTML', percentage: 90, icon: './image/html.png', color: '#E34F26' },
    { name: 'CSS', percentage: 85, icon: './image/css.png', color: '#1572B6' },
    { name: 'Bootstrap', percentage: 80, icon: '/image/bootstrap.png', color: '#563D7C' },
    { name: 'JavaScript', percentage: 75, icon: './image/js.png', color: '#F7DF1E' },
    { name: 'jQuery', percentage: 70, icon: './image/jquery.png', color: '#0769AD' },
    { name: 'React', percentage: 85, icon: './image/react.png', color: '#61DAFB' },
    { name: 'Python', percentage: 80, icon: './image/python.png', color: '#306998' },
    { name: 'SQL', percentage: 75, icon: './image/sql.png', color: '#F29111' },
    { name: 'Django', percentage: 70, icon: './image/django.png', color: 'purple' }
  ];

  return (
    <section className="skill-section">
      <h1 className="heading">Skills</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} className="skill-img" />
            <div className="skill-level" style={{ borderColor: skill.color, color: skill.color }}>
              {skill.percentage}%
            </div>
            <h1 className="skill-name">{skill.name}</h1>
          </div>
        ))}
      </div>

      {/* Bubbles for background */}
      <div className="bubbles-container">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
    </section>
  );
};

export default Skills;
