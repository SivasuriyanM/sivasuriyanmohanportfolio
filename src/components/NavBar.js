import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assests/logo.png";
import resume from "../assests/SivasuriyanMohan.pdf";
import "../styles/Navbar.css";
import MobileNav from "./MobileNav";
function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handleResume = () => {
    window.open(resume);
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
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
          <button class="menu-btn" onClick={toggleMenu}>
            <span
              class={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "X" : "="}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
