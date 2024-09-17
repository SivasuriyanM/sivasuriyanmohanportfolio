import { React, useState } from "react";
import Educationcard from "../components/Educationcardport";
import Certification from "../components/Certification";

import data from "../data/mydata.json";
import "../styles/Education.css";
function Educationport() {
  const educations = data.education;
  const certifications = data.certifications;
  const [selectedCertificate, setSelectedCertificate] = useState(
    certifications[0]
  );

  const handleSectedCertificate = (data) => {
    setSelectedCertificate(data);
  };
  return (
    <>
      <div className="container ">
        <h2>Education</h2>
        <span>
          {educations.map((education, index) => (
            <Educationcard key={index} education={education} />
          ))}
        </span>
      </div>

      <div className="container ">
        <h2>Certifications</h2>
        <span className="cert">
          {certifications.map((certificate) => (
            <Certification
              key={certificate.name}
              title={certificate.name}
              isActive={selectedCertificate.title === certificate.title}
              link={certificate.link}
              image={certificate.image}
              onClick={() => {
                handleSectedCertificate(certificate);
              }}
            />
          ))}
        </span>
      </div>
    </>
  );
}

export default Educationport;
