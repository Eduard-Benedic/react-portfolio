import React, { Component } from "react";
import "./CardWrapper.css";
import Card from "./Card";
import Zoom from "react-reveal/Zoom";

class CardWrapper extends Component {
  render() {
    const { card } = this.props;
    return (
      <Zoom>
        <div className="card-wrapper">
          {card.technologies.map((uniqueCard, index) => (
            <Card
              key={index}
              techs={uniqueCard}
              title={card.title}
              link={card.linksProject[index]}
              linkGit={card.linksGithub[index]}
              images={card.images[index]}
            />
          ))}
        </div>
      </Zoom>
    );
  }
}

export default CardWrapper;
