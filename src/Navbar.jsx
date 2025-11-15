import React from "react";
import "./style/Navbar.scss"

const Navbar = () => {
    return (
      <div className="navbar-container" id="about">
        <div className="view-area navbar-container__content">
          <a href="#main-content" id="skip-nav-link" className="link-button">Skip to main content</a>
          <a href="/home/"><h1>Nathan Guerrero</h1></a>
          <ul className="navbar-container__content__links">
              <li><a href="#about">About Me</a></li>
              <li><a href="#works">Works</a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    );
  }

export default Navbar;