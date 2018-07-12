import React, { Component } from "react";
import LoginForm from "./presenter";

class Container extends Component {
  state = {
    mode: "login"
  };

  render() {
    const { mode } = this.state;

    return <LoginForm mode={mode} gotoJoin={this._gotoJoin} />;
  }

  _gotoJoin = () => {
    this.setState(prevState => {
      const { mode } = prevState;
      if (mode === "login") {
        return {
          mode: "join"
        };
      } else if (mode === "join") {
        return {
          mode: "login"
        };
      }
    });
    console.log(this.state);
  };
}

export default Container;
