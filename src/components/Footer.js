import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaBloggerB } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <Link className="social" to="https://www.facebook.com/23odai">
          <AiOutlineFacebook className="icon"  />
          Facebook
        </Link>
        <Link  className="social" to="https://www.instagram.com/odaimarheg/">
          <AiOutlineInstagram className="icon"  />
          Instagram
        </Link>
        <Link className="social" to="https://www.linkedin.com/in/odai-merheg-750a9a136/">
          <AiOutlineLinkedin className="icon" />
          Linkedin
        </Link>
        <Link className="social" to="https://www.blogger.com/blog/posts/7376318382159181382">
          <FaBloggerB  className="icon" />
          Blog
        </Link>
      </div>
      <p className="copy">All rights preserved &copy; Odai Merheg</p>
    </footer>
  );
};

export default Footer;
