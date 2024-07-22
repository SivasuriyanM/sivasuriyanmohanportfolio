import React from "react";
import "../styles/Experiencecard.css";

function Leardership({ leardership }) {
  const responsibilities = leardership.responsibilities
  return (
    <div>
      <section className="expc-container">
        <div>
          <div className="exp-content">
            <h2>{leardership.title}</h2>
            <h4>{leardership.duriation}</h4>
          </div>
          <div className="exp-info">
          {responsibilities.map((res, index) => (
              <ul key={index}>
                <li>{res} </li></ul>
            ))}
            {/* <ul>{leardership.responsibilities}</ul> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Leardership;
