import React from 'react';
import Navbar from './Navbar.jsx';
import About from './About.jsx';
import Works from './Works.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';

function App() {
  // Note: About has an id of both "about" and "main-content", so that main-content can be skipped to

  return (
    <div className="App">
      <Navbar />
      <div id="about" id="main-content">
        <About />
      </div>
      <div id="works">
        <Works />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
