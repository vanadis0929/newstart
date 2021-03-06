import React, { Component } from "react";
import App from "./presenter";

class Container extends Component {
  state = {
    isLogged: false,
    status: "user",
    mode: "login"
  };

  render() {
    const { status } = this.state;
    const { isLogged } = this.state;
    const { mode } = this.state;
    console.log(this.state);
    return (
      <App
        isLogged={isLogged}
        status={status}
        mode={mode}
        statusToggle={this._statusToggle}
        modeToggle={this._modeToggle}
        handleLogin={this._handleLogin}
        handleLogout={this._handleLogout}
      />
    );
  }

  _statusToggle = event => {
    var Attr = event.currentTarget.dataset.idx; //button 태그의 data-idx 를 가져옴

    this.setState({
      status: Attr
    });

    //console.log("Attr: " + Attr);
    //console.log(this.props);
    console.log(this.state);
  };

  _handleLogin = () => {
    this.setState({
      isLogged: true
    });
  };

  _handleLogout = () => {
    this.setState({
      isLogged: false
    });
  };

  _modeToggle = () => {
    this.setState(prevState => {
      const { mode } = prevState;
      if (mode === "login") {
        return { mode: "join" };
      } else if (mode === "join") {
        return { mode: "login" };
      }
    });
  };
}

export default Container;
