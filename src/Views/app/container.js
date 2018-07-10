import React, { Component } from "react";
import App from "./presenter";

class Container extends Component {
  state = {
    isLogged: false,
    status: "user"
  };
  render() {
    console.log(this.state);
    return <App isLogged={this.state.isLogged} status={this.state.status} />;
  }
}

export default Container;
