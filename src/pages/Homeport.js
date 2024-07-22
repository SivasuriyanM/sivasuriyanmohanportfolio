import React, { useState } from "react";
// import { Link } from 'react-router-dom'
import data from "../data/mydata";
import Pic from "../assests/profilepic.jpeg";
import js from "../assests/js.png";
import react from "../assests/react.png";
import python from "../assests/python.png";
import bc from "../assests/blockchain.png";

import Skillscard from "../components/Skillscard";
import "../styles/Home.css";
import Skillsinfocard from "../components/Skillsinfocard";

function Homeport() {
  const skills = data.skills;
  const [selectedSKill, setSelectedSkill] = useState(skills[0]);

  const handleSectedSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <>
      <section className="home-container">
        <div className="home-content">
          <h2>{data.name}</h2>
          <p>{data.bio}</p>
        </div>
        <div className="home-img">
          <div>
            <div className="tech-icon">
              <img className="icon" src={react} alt="React JS" />
            </div>
            <img src={Pic} alt="profile pic" className="profile-pic" />
          </div>
          <div>
            <div className="tech-icon">
              <img className="icon" src={js} alt="JS" />
            </div>

            <div className="tech-icon">
              <img className="icon" src={python} alt="Python" />
            </div>

            <div className="tech-icon">
              <img className="icon" src={bc} alt="Blockchain" />
            </div>
          </div>
        </div>
      </section>
      <section className="skills-container">
        <h5>Technical Proficiency</h5>
        <div className="skills-content">
          <div className="skills">
            {skills.map((skill) => (
              <Skillscard
                key={skill.title}
                iconUrl={skill.icon}
                title={skill.title}
                isActive={selectedSKill.title === skill.title}
                onClick={() => {
                  handleSectedSkill(skill);
                }}
              />
            ))}
          </div>
          <div className="skills-info">
            <Skillsinfocard
              heading={selectedSKill.title}
              skills={selectedSKill.skills}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Homeport;
