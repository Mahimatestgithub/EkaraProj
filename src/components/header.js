// src/components/Header.js

import React from "react";
import logo from "../images/logo.jpeg"; // Adjust path based on image location
import "./header.css"; // Import the CSS file
import { Link } from "react-router-dom";

function Header() {
  // Toggle navbar function
  const toggleNavbar = () => {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="Ekara Financials Logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/companies">Companies</Link></li>
          <li><Link to="/opportunities">Opportunities</Link></li>
          <li><Link to="/library">Library</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
        </ul>
        <div className="nav-buttons">
          <Link to="/apply1" className="apply-btn" onClick={() => console.log("Navigating to Apply")}>Apply</Link>
          <Link to="/login" className="login-btn" onClick={() => console.log("Navigating to Login")}>Login</Link>

          <Link to="/signup" className="signup-btn" onClick={() => console.log("Navigating to SignUp")}>Sign Up</Link>
        </div>
        <div className="hamburger" onClick={toggleNavbar}>&#9776;</div>
      </nav>
    </header>
  );
}

export default Header;
