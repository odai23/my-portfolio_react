import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div>
      <header className="header_countainer">
        <div className="logo_container">
          <Link className="logo" to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-toggle" id="mobile-menu" onClick={handleClick}>
          {click ? (
            <FaTimes className="FaBars" />
          ) : (
            <FaBars className="FaBars" />
          )}
        </div>
        <div className={click ? "navbar active" : "navbar"}>
          <ul>
            <li>
              <Link to="/" className="navbar_links">
                Home
              </Link>
            </li>
            <li>
              <Link to="/AboutPage" className="navbar_links">
                About me
              </Link>
            </li>
            <li>
              <Link to="/ContactPage" className="navbar_links">
                Contact me
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
