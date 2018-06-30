import React, { Component } from "react";
import CommonMenu from "./presenter";

import PropTypes from "prop-types";

class Container extends Component {
  state = {
    action: "user"
  };

  render() {
    const { action } = this.state;
    console.log(this.state);
    return <CommonMenu action={action} actionToggle={this._actionToggle} />;
  }

  _actionToggle = action => {
    console.log("fffffffffffffffff");
    this.setState(prevState => {
      const { action } = prevState;
      if (action === "user") {
        return {
          action: "user"
        };
      } else if (action === "chat") {
        return {
          action: "chat"
        };
      } else if (action === "mypage") {
        return {
          action: "mypage"
        };
      }
    });
  };
}

export default Container;
