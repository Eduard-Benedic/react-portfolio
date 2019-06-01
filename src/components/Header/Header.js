import React from "react";
import "./Header.css";
import Zoom from "react-reveal/Zoom";

const Header = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <Zoom>
          <div className="navbar-branding">
            {" "}
            <a href="/" className="navbar__branding">
              Edward
            </a>
          </div>
        </Zoom>

        <Zoom left cascade>
          <ul className="navigation__nav">
            <li className="navigation__item">
              <a href="#home" className="navigation__link">
                Home
              </a>
            </li>
            <li className="navigation__item">
              <a href="#about" className="navigation__link">
                About Me
              </a>
            </li>
            <li className="navigation__item">
              <a href="#skills" className="navigation__link">
                Skills
              </a>
            </li>
            <li className="navigation__item">
              <a href="#projects" className="navigation__link">
                Projects
              </a>
            </li>
            <li className="navigation__item">
              <a href="#contact" className="navigation__link">
                Contact
              </a>
            </li>
          </ul>
        </Zoom>
      </div>
    </nav>
  );
};

export default Header;
