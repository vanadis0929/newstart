import React from "react";
import styled from "styled-components";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import UserListForm from "Views/user";
import ChatListForm from "Views/chat";
import MyPageForm from "Views/mypage";

import UserSearch from "components/UserSearch/";
import UserList from "components/UserList/";
import ChatSearch from "components/ChatSearch/";
import ChatList from "components/ChatList/";

const Contents = styled.article`
  padding-top: 103px;
`;

const ContentsStyle = props => {
  //const { children } = props; //와 동일
  console.log("ffff: " + props.inheritStatus);
  return (
    <Contents>
      {/* <Switch>
        <Route exact path="/user" component={UserListForm} />
        <Route exact path="/chat" component={ChatListForm} />
        <Route exact path="/mypage" component={MyPageForm} />
      </Switch> */}

      {props.inheritStatus === "user" ? (
        <React.Fragment>
          <UserSearch />
          <UserList />
        </React.Fragment>
      ) : null}
      {props.inheritStatus === "chat" ? (
        <React.Fragment>
          <ChatSearch />
          <ChatList />
        </React.Fragment>
      ) : null}
    </Contents>
  );
};

//BrowserRouter 를 감싸니까 컴포넌트가 안바뀜 ??

export default ContentsStyle;
