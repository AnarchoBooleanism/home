import React from 'react';
import Map from './Map.js';
import './style/Contact.css';

const Contact = () => {
    return (
      <div className="contact-container-background">
        <div className="contact-container">
          <div className="view-area contact_container__content">
            <div className="flex-container">
              <div>
                <Map />
                <p className="contact-location-info">San Diego, CA, United States</p>
              </div>
              <div className="contact-info-container">
                <h1 className="section-header">Contact</h1>
                <h2 className="section-subheader">Interested? Here you go:</h2>
                <div className="contact-info-container__links">
                  <div className="contact-info-container__links__priority-links">
                    <div className="email-copier-container">
                      <input className="email-copier-container__text" type="text" value="anarchbool@anarchbool.dev" readonly autocomplete="off" data-1p-ignore data-lpignore="true" data-protonpass-ignore="true"></input>
                      <button className="email-copier-container__icon" onClick={() =>  navigator.clipboard.writeText('anarchbool@anarchbool.dev')} ><i className="far fa-copy"></i></button>
                    </div>  
                    <a className="link-button link-button--resume" href="/resumes/se_20250827b.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                  </div>
                  <div className="button-wrapper button-wrapper--contact-info">
                    <a className="link-button" href="https://github.com/AnarchoBooleanism" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a>
                    <a className="link-button" href="https://www.linkedin.com/in/nathan-guerrero-89a41919b/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
                    <a className="link-button" href="https://uci.joinhandshake.com/users/33173069" target="_blank" rel="noopener noreferrer">Handshake</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Contact;

// Todo: Copy button, example:
// <a id="emailText" onClick={() =>  navigator.clipboard.writeText('naguerr2@uci.edu')}><p>naguerr2@uci.edu</p></a>