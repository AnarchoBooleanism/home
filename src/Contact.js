import codePic from './assets/code_pic1.jpg';

const Contact = () => {
    return (
      <div className="outerContact">
        <div className="contactBackground">
          <div className="viewArea Contact">
            <div className="flex-container">
              <div>
                <div class="imageBox">
                  <img src={ codePic } alt="Programming on my laptop"></img>
                </div>
              </div>
              <div id="contactBox">
                <h1 class="sectionHeader">Contact</h1>
                <h2>Interested? Here you go:</h2>
                <div id="emailBox">
                  <a className="linkButton" id="emailButton" href="mailto:naguerr2@uci.edu">Email me!</a>
                  <form><input type="email" value="naguerr2@uci.edu" readonly></input></form>
                </div>
                <div class="buttonWrapper">
                  <a className="linkButton" id="resumeButton" href="">Resume</a>
                  <a className="linkButton" href="https://github.com/AnarchoBooleanism"><i className="fab fa-github"></i> GitHub</a>
                  <a className="linkButton" href="https://www.linkedin.com/in/nathan-guerrero-89a41919b/"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
                  <a className="linkButton" href="https://uci.joinhandshake.com/users/33173069">Handshake</a>
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