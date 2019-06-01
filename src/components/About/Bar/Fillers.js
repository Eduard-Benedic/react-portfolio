import React, { Component } from "react";

export default class Fillers extends Component {
  render() {
    return (
      <div className="filler" style={{ width: `${this.props.percentage}%` }} />
    );
  }
}
