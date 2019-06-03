import React from "react";
import "./Navigation.css";
import { slide as Menu } from "react-burger-menu";

const Navigation = () => {
  return (
    <Menu right>
      <a href="#home" className="menu-item">
        Home
      </a>
      <a href="#about" className="menu-item">
        About Me
      </a>

      <a href="#skills" className="menu-item">
        Skills
      </a>
      <a href="#projects" className="menu-item">
        Projects
      </a>
      <a href="#contact" className="menu-item">
        Contact
      </a>
    </Menu>
  );
};

export default Navigation;
