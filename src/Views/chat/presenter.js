import React from "react";

import ChatSearch from "components/ChatSearch/presenter";
import ChatList from "components/ChatList/presenter";

const ChatListView = props => {
  return (
    <React.Fragment>
      <ChatSearch />
      <ChatList />
    </React.Fragment>
  );
};

export default ChatListView;
