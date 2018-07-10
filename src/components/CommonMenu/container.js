import React, { Component } from "react";
import CommonMenu from "./presenter";

import PropTypes from "prop-types";

class Container extends Component {
  state = {
    status: "user"
  };

  componentWillMount = () => {};

  render() {
    const { status } = this.state;
    return <CommonMenu status={status} statusToggle={this._statusToggle} />;
  }

  _statusToggle = event => {
    console.log("clicked");
    var Attr = event.currentTarget.dataset.idx; //button 태그의 data-idx 를 가져옴

    this.setState({
      status: Attr
    });

    console.log("Attr의 값으로 state값이 바뀜 : " + Attr);
    console.log(
      this.state.status + "  <-- 바로 바뀌지않는 이유는 render되기 전이여서 ?? "
    );
    console.log("End event");
  };
}

export default Container;
