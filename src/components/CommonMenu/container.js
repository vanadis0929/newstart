import React, { Component } from "react";
import CommonMenu from "./presenter";

import PropTypes from "prop-types";

class Container extends Component {
  state = {
    status: "user"
  };

  render() {
    const { status } = this.state;
    //console.log(this.state);
    return <CommonMenu status={status} statusToggle={this._statusToggle} />;
  }

  _statusToggle = event => {
    var Attr = event.currentTarget.dataset.idx; //button 태그의 data-idx 를 가져옴

    this.setState({
      status: Attr
    });
    console.log("Attr: " + Attr);
    console.log(this.state.status);
  };
}

export default Container;
