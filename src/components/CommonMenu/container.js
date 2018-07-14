import React, { Component } from "react";
import CommonMenu from "./presenter";

import PropTypes from "prop-types";

class Container extends Component {
  render() {
    console.log(this.props);
    return (
      <CommonMenu
        status={this.props.status}
        statusToggle={this.props.statusToggle}
      />
    );
  }
}

//stateful 방식에서는 this.props 식으로 불러와야한다.

export default Container;
