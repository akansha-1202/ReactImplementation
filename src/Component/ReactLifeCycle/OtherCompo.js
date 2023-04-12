import React, { Component } from "react";
import GetDerivedStateFromProps from "./getDerivedStateFromProps";

class OtherComponent extends Component {
  render() {
    return (
      <div>
        <GetDerivedStateFromProps favoritecolor="blue" />
      </div>
    );
  }
}

export default OtherComponent;
