import React from "react";
import "../styles/Experiencecard.css";

function Workshops({ workshop }) {
  const descriptions = workshop.description
  return (
    <div>
      <div>
        <section className="expc-container">
          <div>
            <div className="exp-content">
              <h2>{workshop.title}</h2>
            </div>
            <div className="exp-info">
            {descriptions.map((des, index) => (
              <ul key={index}>
                <li>{des}</li></ul>
            ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Workshops;
