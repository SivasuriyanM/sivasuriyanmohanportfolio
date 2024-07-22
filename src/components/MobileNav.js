import React from "react";
import logo from "../assests/logo.png";
import { Link } from "react-router-dom";
import resume from "../assests/SivasuriyanMohan.pdf";

import "../styles/MobileNav.css";

function MobileNav({ isOpen, toggleMenu }) {
  const handleResume = () => {
    window.open(resume);
  };
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src={logo} alt="logo" />
          <ul>
            <li>
              <Link to="/app" className="menu-item">
                Home
              </Link>
              {/* <a href='/app' className='menu-item'>Home</a> */}
            </li>
            <li>
              <Link to="/edu" className="menu-item">
                Education
              </Link>
              {/* <a href='/edu' className='menu-item'>Education</a> */}
            </li>
            <li>
              <Link to="/exp" className="menu-item">
                Experince
              </Link>
              {/* <a href='/exp' className='menu-item'>Experince</a> */}
            </li>
            <li>
              <Link to="/pro" className="menu-item">
                Projects
              </Link>
              {/* <a href='/pro' className='menu-item'>Projects</a> */}
            </li>
            <li>
              <Link to="/con" className="menu-item">
                Contact Me
              </Link>
              {/* <a href='/con' className='menu-item'>Contact Me</a> */}
            </li>
            <button
              className="contact-btn"
              onClick={() => {
                handleResume();
              }}
            >
              My Resume
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MobileNav;
