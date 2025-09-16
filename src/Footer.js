import React from 'react';
import './style/Footer.css'

const Footer = () => {
    return (
      <div className="footer-container">
        <div className="view-area footer-container__content">
          <h2><a href="https://react.dev/" target="_blank" rel="noreferrer" className="react-link"><i className="fab fa-react react-link__icon"></i>Made with React!</a> Copyright: Nathan Guerrero, 2025.</h2>
        </div>
      </div>
    );
  }

export default Footer;