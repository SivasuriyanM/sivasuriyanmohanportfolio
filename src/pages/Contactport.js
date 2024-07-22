import React from "react";
import data from "../data/mydata.json";
// import { Link } from "react-router-dom";
import "../styles/Contactport.css";
import Contact from "../assests/contact.avif";
import SocialContact from "../assests/ProfessionalConstact.jpeg";
import Linkedin from "../assests/linkedIn.png";
import Github from "../assests/github.png";
import Whatsapp from "../assests/whatsapp.jfif";
import Insta from "../assests/insta.jfif";
import Phone from "../assests/phone.png";
import Mail from "../assests/mail.png";
function Contactport() {
  const lki = data.contact.linkedin;
  const git = data.contact.github;
  const ins = data.contact.insta;
  const wp = data.contact.Wp;
  const handleLki = () => {
    window.open(lki, "_blank");
  };
  const handleGit = () => {
    window.open(git, "_blank");
  };
  const handleInst = () => {
    window.open(ins, "_blank");
  };
  const handleWP = () => {
    window.open(wp, "_blank");
  };
  return (
    <div className="cont-container">
      <h1>My Contact Information</h1>
      <div className="cont-info">
        <div>
          <img className="cont-img" src={Contact} alt="" />
        </div>
        <div className="cont-content">
          <h5>Sivasuriyan Mohan</h5>
          <div>
            <img className="cont-logo" src={Mail} alt="Mail ID" />
            <span className="cont-ep"> {data.contact.email} </span>
          </div>
          <div>
            <img className="cont-logo" src={Phone} alt="Phone No" />
            <span className="cont-ep"> {data.contact.phone}</span>
          </div>
        </div>
      </div>
      <h1>Professional Contact Profile's</h1>
      <div className="cont-info">
        <div className="cont-content">
          <img
            className="cont-icon"
            src={Linkedin}
            alt=""
            onClick={handleLki}
          />
          <img className="cont-icon" src={Github} alt="" onClick={handleGit} />
          <img className="cont-icon" src={Insta} alt="" onClick={handleInst} />
          <img className="cont-icon" src={Whatsapp} alt="" onClick={handleWP} />
        </div>
        <div>
          <img className="cont-img" src={SocialContact} alt="" />
        </div>
      </div>
      <h1>My Address</h1>
      <div className="cont-info">
        <div>
          <iframe
            className="cont-img"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1953.1365576082728!2d79.7495517!3d11.7457997!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDQ0JzQ1LjAiTiA3OcKwNDQnNTkuNSJF!5e0!3m2!1sen!2sin!4v1719127793391!5m2!1sen!2sin"
            title="Map"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="cont-content">{data.contact.address}</div>
      </div>
    </div>
  );
}

export default Contactport;
