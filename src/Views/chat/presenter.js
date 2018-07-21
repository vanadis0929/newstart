import React, { Fragment } from "react";

import ChatSearch from "components/ChatSearch/";
import ChatList from "components/ChatList/";

const ChatListView = props => {
  return (
    <Fragment>
      <ChatSearch />
      <ChatList />
    </Fragment>
  );
};

export default ChatListView;
