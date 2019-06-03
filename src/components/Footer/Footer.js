import React, { Component } from "react";
import "./Footer.css";
import Zoom from "react-reveal/Zoom";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer" id="contact">
        <Zoom right cascade>
          <div className="footer-head">
            Feel free to get in touch, I have a great story to tell
          </div>
        </Zoom>
        <div className="footer-body">
          <Zoom right cascade>
            <div className="footer-text">
              <p className="footer-details">
                <span className="highlight">benediceduard@outlook.com</span>
              </p>
              <p className="footer-details">
                <span className="highlight">07480735866</span>
              </p>
            </div>
          </Zoom>
          <Zoom right cascade>
            <div className="footer-icons">
              <a
                className="footer-icon-link"
                href="https://www.linkedin.com/in/eduard-benedic-94b40710b/"
              >
                {" "}
                <i className="fab fa-linkedin-in"> </i>
              </a>

              <a
                className="footer-icon-link"
                href="https://github.com/Eduard-Benedic/"
              >
                {" "}
                <i className="fab fa-github"> </i>
              </a>
            </div>
          </Zoom>
        </div>
        <Zoom right cascade>
          <div className="footer-end">
            <p className="footer-paragraph">&copy; 2019 Eduard Benedic</p>
          </div>
        </Zoom>
      </footer>
    );
  }
}
