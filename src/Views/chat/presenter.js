import React from "react";

import ChatSearch from "components/ChatSearch/";
import ChatList from "components/ChatList/";

const ChatListView = props => {
  return (
    <React.Fragment>
      <ChatSearch />
      <ChatList />
    </React.Fragment>
  );
};

export default ChatListView;
