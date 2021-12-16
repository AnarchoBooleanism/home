const Navbar = () => {
    return (
      <div className="outerNavbar" id="about">
        <div className="viewArea Navbar">
          <a href="/home/"><h1>Nathan Guerrero</h1></a>
          <ul className="Links">
              <li><a href="#about">About Me</a></li>
              <li><a href="#works">Works</a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    );
  }

export default Navbar;