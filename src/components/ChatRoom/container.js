import React, { Component } from "react";
import ChatRoom from "./presenter";

class Container extends Component {
  render() {
    console.log(this.props);
    return <ChatRoom {...this.props} {...this.state} />;
  }
}

export default ChatRoom;
