import Navbar from './Navbar';
import About from './About';
import Works from './Works';
import Contact from './Contact';
import Footer from './Footer';

function App() {
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
