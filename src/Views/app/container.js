import React, { Component } from "react";
import App from "./presenter";

class Container extends Component {
  state = {
    isLogged: false,
    status: "user"
  };

  render() {
    const { status } = this.state.status;
    const { isLogged } = this.state.isLogged;
    console.log(this.state);
    return (
      <App
        isLogged={this.state.isLogged}
        status={this.state.status}
        statusToggle={this._statusToggle}
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
}

export default Container;
