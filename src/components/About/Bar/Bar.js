import React, { Component } from "react";
import Fillers from "./Fillers";
import "./Bar.css";

class Bar extends Component {
  render() {
    return (
      <div className="progress-bar">
        <p className="tools">{this.props.percentage.tool}</p>
        <Fillers percentage={this.props.percentage.percentage} />
      </div>
    );
  }
}

export default Bar;
