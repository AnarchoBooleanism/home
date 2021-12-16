import codePic from './assets/code_pic1.jpg';

const Contact = () => {
    return (
      <div className="Contact">
        <div className="flex-container">
          <div>
            <div class="imageBox">
              <img src={ codePic } alt="Programming on my laptop"></img>
            </div>
          </div>
          <div id="contactBox">
            <h1>Contact</h1>
            <h2>Interested? Here you go:</h2>
            <a className="linkButton" href="mailto:naguerr2@uci.edu">Email me!</a> 
            <p>naguerr2@uci.edu</p>
            <a className="linkButton" href="">Resume</a>
            <a className="linkButton" href="https://github.com/AnarchoBooleanism">GitHub</a>
            <a className="linkButton" href="https://www.linkedin.com/in/nathan-guerrero-89a41919b/">LinkedIn</a>
            <a className="linkButton" href="https://uci.joinhandshake.com/users/33173069">Handshake</a>
          </div>
        </div>
      </div>
    );
  }

export default Contact;