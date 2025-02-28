// // src/components/Header.js
// src/components/Header.js
import React from "react";
import logo from "../images/logo.jpeg"; // Adjust path based on image location
import "./header.css"; // Import the CSS file
import { Link,redirect } from "react-router-dom";
import { useContext } from "react";

import { useAuth } from "../context/auth-context"; // Ensure you have an auth-context set up

function Header() {
  const { isLoggedIn, logout, login } = useAuth(); // Access login state and logout function

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
          {isLoggedIn ? (
            <>
              <button className="logout-btn" onClick={logout}>Logout</button>
              <Link to="/profile" className="profile-btn">Profile</Link>
            <Link to="/apply1" className="apply-btn" onClick={() => console.log("Navigating to Apply")}>Apply</Link>

            </>
          ) : (
            <>
            <Link to="/apply1" className="apply-btn" onClick={() => console.log("Navigating to Apply")}>Apply</Link>
              <Link to="/"  className="login-btn">Login</Link>
              <Link to="/signup" className="signup-btn">Sign Up</Link>
            </>
          )}
        </div>
        <div className="hamburger" onClick={toggleNavbar}>&#9776;</div>
      </nav>
    </header>
  );
}

export default Header;



















