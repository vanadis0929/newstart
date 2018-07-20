import React, { Component } from "react";
import Auth from "./presenter";

class Container extends Component {
  render() {
    console.log(this.props);
    return <Auth {...this.props} {...this.state} />;
  }
}

export default Container;
