import React, { Component } from "react";
import ChatList from "./presenter";

class Container extends Component {
  state = {
    chatActive: false
  };

  render() {
    const { chatActive } = this.state;
    return (
      <ChatList
        chatActive={chatActive}
        handleChatActive={this._handleChatActive}
        handleChatDeactive={this._handleChatDeactive}
      />
    );
  }

  _handleChatActive = () => {
    this.setState({
      chatActive: true
    });
    console.log(this.state);
  };

  _handleChatDeactive = () => {
    this.setState({
      chatActive: false
    });
    console.log(this.state);
  };
}

export default Container;
