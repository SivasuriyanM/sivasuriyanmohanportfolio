import React from "react";
import "../styles/Experiencecard.css";

function Experiencecard({ experience }) {
  const responsibility = experience.responsibility;
  return (
    <section className="expc-container">
      <div>
        <div className="exp-content">
          <h2>{experience.title}</h2>
          <h4>{experience.date}</h4>
        </div>
        <div className="exp-info">
          {responsibility.map((res, index) => (
            <ul key={index}>
              <li>{res} </li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiencecard;
