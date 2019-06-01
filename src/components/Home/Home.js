import React from "react";
import "./Home.css";

import imgWebsite from "./img-website.png";
import { FaArrowDown } from "react-icons/fa";

const Home = () => {
  function scrollToNext(e) {
    const aboutBtn = document.querySelector("#about");
    console.log(aboutBtn);
  }
  return (
    <div className="home" id="home">
      <div className="home-image">
        <img src={imgWebsite} alt="s" className="home-image" />
      </div>
      <div className="home-content">
        <p className="home-intro">
          {" "}
          Hi, I'm<span className="home-name"> Edward </span> <br /> Front-end
          Developer
        </p>
        <p className="home-description">
          I am passionate about creating high-quality websites and currently
          open to new opportunities.
        </p>
        <a href="#about" className="arrow" onClick={scrollToNext}>
          <FaArrowDown className="bounce" />
        </a>
      </div>
    </div>
  );
};

export default Home;
