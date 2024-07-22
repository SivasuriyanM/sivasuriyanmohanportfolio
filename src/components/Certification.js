import React from "react";
import "../styles/Certifications.css";
import { Link } from "react-router-dom";

function Certification({ title, isActive, link, onClick }) {
  return (
    <div
      className={`cert-card ${isActive ? "active" : ""}`}
      onClick={() => onClick()}
    >
      <Link className="cert-link" to={link} target="_blank">
        <span>{title}</span>
      </Link>
    </div>
  );
}

export default Certification;
