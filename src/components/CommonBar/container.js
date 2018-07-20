import React, { Component } from "react";
import CommonBar from "./presenter";

class Container extends Component {
  render() {
    return <CommonBar {...this.props} {...this.state} />;
  }
}

export default Container;
