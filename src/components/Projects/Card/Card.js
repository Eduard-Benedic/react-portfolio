import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    const { techs, title, link, linkGit, images } = this.props;

    return (
      <div className="card-container">
        <div className="card-header">
          <img src={images} alt="s" />
        </div>
        <div className="card-body">
          <p className="card-paragraph">{title}</p>
          <ul className="card-list">
            {techs.map((tech, index) => (
              <li className="card-item" key={index}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="card-footer">
          <a href={link} className="card-footer-link">
            Go Online
          </a>
          <a href={linkGit} className="card-footer-link">
            Github
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
