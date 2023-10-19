// Navbar.js
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item dropdown">
          <a href="#services">Services</a>
          <div className="dropdown-content">
            <a href="#website-design">Website Designing</a>{" "}
            <a href="#Website-Development">Website Development</a>{" "}
            <a href="#Digital-Marketing">Digital Marketing</a>{" "}
            <a href="#Graphic-Designing">Graphic Designing</a>{" "}
            {/* <a href="#Mobile-application-development">Mobile Application Development</a>{" "} */}
            <a href="#website-desi">Video Animation</a>{" "}
            {/* <a href="#website-design">Metaverse</a>{" "} */}
            {/* Add this line */}
          </div>
        </li>
        {/* Repeat the above structure for other menu items */}
        <li className="nav-item dropdown">
          <a href="#defi">DEFI</a>
          <div className="dropdown-content">
            {/* Add dropdown content here */}
          </div>
        </li>
        {/* Repeat for other menu items */}
        <li className="nav-item dropdown">
          <a href="#ico">ICO</a>
          <div className="dropdown-content">
            {/* Add dropdown content here */}
          </div>
        </li>
        <li className="nav-item dropdown">
          <a href="#token">Token</a>
          <div className="dropdown-content">
            {/* Add dropdown content here */}
          </div>
        </li>
        <li className="nav-item dropdown">
          <a href="#cryptodevelopment">Crypto Development</a>
          <div className="dropdown-content">
            {/* Add dropdown content here */}
          </div>
        </li>
        <li className="nav-item dropdown">
          <a href="#defi">Exchange</a>
          <div className="dropdown-content">
            {/* Add dropdown content here */}
          </div>
        </li>
        <li className="nav-item">
          <a href="#blog">Blog</a>
        </li>
        <li className="nav-item">
          <a href="#contact">Contact us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
