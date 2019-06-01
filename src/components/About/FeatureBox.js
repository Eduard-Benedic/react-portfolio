import React, { Component } from "react";
import "./FeatureBox.css";

class FeatureBox extends Component {
  render() {
    const { title, text, icon } = this.props.feature;
    return (
      <div className="feature">
        <div className="icon">
          {" "}
          <i className={`${icon}`}> </i>
        </div>
        <div className="content">
          <h2 className="title">{title}</h2>
          <p className="paragraph">{text}</p>
        </div>
      </div>
    );
  }
}
export default FeatureBox;
