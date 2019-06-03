import React, { Component } from "react";
import FeatureBox from "./FeatureBox";
import Bar from "./Bar/Bar";
import "./About.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { Consumer } from "../../context";

class About extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <section id="about">
              <div className="about">
                <Fade left>
                  <div className="header">About</div>
                  <div className="header-bar"> </div>
                </Fade>
                <div className="features-container">
                  <Zoom>
                    {value.featureBox.map((feature, index) => (
                      <FeatureBox feature={feature} key={index} />
                    ))}
                  </Zoom>
                </div>
              </div>
              <div className="details">
                <Fade left>
                  <div className="introduction">
                    <div className="introduction-img">
                      <img src="https://source.unsplash.com/random" alt="" />
                    </div>
                    <div className="introduction-info">
                      {" "}
                      <p className="introduction-text">
                        {" "}
                        I am a front end developer who loves to create high
                        quality websites with a keen eye on details
                      </p>
                    </div>
                  </div>
                </Fade>
                <div className="skills" id="skills">
                  <Fade right>
                    {value.skills.map((progressbar, index) => (
                      <Bar percentage={progressbar} key={index} />
                    ))}
                  </Fade>
                </div>
              </div>
            </section>
          );
        }}
      </Consumer>
    );
  }
}

export default About;
