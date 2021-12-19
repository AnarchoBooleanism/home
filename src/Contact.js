import codePic from './assets/code_pic1.jpg';
import './style/Contact.css'

const Contact = () => {
    return (
      <div className="contact-container-background">
        <div className="contact-container">
          <div className="view-area contact_container__content">
            <div className="flex-container">
              <div>
                <div className="image-box">
                  <img src={ codePic } alt="Programming on my laptop"></img>
                </div>
              </div>
              <div className="contact-info-container">
                <h1 className="section-header">Contact</h1>
                <h2 className="section-subheader">Interested? Here you go:</h2>
                <div className="contact-info-container__links">
                  <div className="contact-info-container__links__priority-links">
                    <a className="link-button link-button--email" href="mailto:naguerr2@uci.edu">Email me!</a>
                    <a className="link-button link-button--resume" href="">Resume</a>
                  </div>
                  <div className="button-wrapper button-wrapper--contact-info">
                    <div className="email-copier-container">
                      <input className="email-copier-container__text" type="email" value="naguerr2@uci.edu" readonly></input>
                      <a className="email-copier-container__icon" onClick={() =>  navigator.clipboard.writeText('naguerr2@uci.edu')}><i className="far fa-copy"></i></a>
                    </div>  
                    <a className="link-button" href="https://github.com/AnarchoBooleanism"><i className="fab fa-github"></i> GitHub</a>
                    <a className="link-button" href="https://www.linkedin.com/in/nathan-guerrero-89a41919b/"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
                    <a className="link-button" href="https://uci.joinhandshake.com/users/33173069">Handshake</a>
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