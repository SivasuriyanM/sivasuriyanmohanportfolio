import React from "react";
import "../styles/Educationcardport.css";

function Educationcardport({ education }) {
  return (
    <>
      <section className="educ-container">
        <div className="edu-content">
          <h2>{education.institution}</h2>
          <h4>{education.duration}</h4>
          <p>{education.qualification}</p>
          <p>{education.percentage}</p>
        </div>
      </section>
    </>
  );
}

export default Educationcardport;
