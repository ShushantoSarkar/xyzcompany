import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <img src="../Data/Group 100.svg" alt="Company Logo" className="desktop" />
      <img src="../Data/Logo.png" alt="Company Logo" className="mobile" />
      <div className="navItems">
        <Link to="/" className="navItemStyle LinkStyle">
          Home
        </Link>
        <Link to="/" className="navItemStyle LinkStyle">
          About Us
        </Link>
        <Link to="/" className="navItemStyle LinkStyle">
          Services
        </Link>
        <Link to="/" className="navItemStyle LinkStyle">
          Blog
        </Link>
        <Link to="/" className="navItemStyle LinkStyle">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
