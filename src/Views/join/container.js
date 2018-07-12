import React, { Component } from "react";
import JoinForm from "./presenter";

class Container extends Component {
  render() {
    return <JoinForm {...this.props} {...this.state} />;
  }
}

export default Container;
