import React, { Fragment } from "react";
import styled from "styled-components";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

//import UserListForm from "Views/user";
//import ChatListForm from "Views/chat";
//import MyPageForm from "Views/mypage";

import UserSearch from "components/UserSearch/";
import UserList from "components/UserList/";
import ChatSearch from "components/ChatSearch/";
import ChatList from "components/ChatList/";
import MyMenuList from "components/MyMenuList/";
import MyPage from "components/MyPage/";

const Contents = styled.article`
  padding-top: 103px;
`;

const ContentsStyle = props => {
  //const { children } = props; //와 동일

  const { status } = props;
  //const { children } = props;

  return (
    <Contents>
      {status === "user" ? (
        <Fragment>
          <UserSearch />
          <UserList />
        </Fragment>
      ) : null}
      {status === "chat" ? (
        <Fragment>
          <ChatSearch />
          <ChatList />
        </Fragment>
      ) : null}
      {status === "mypage" ? (
        <Fragment>
          <MyPage />
          <MyMenuList />
        </Fragment>
      ) : null}
    </Contents>
  );
};

//BrowserRouter 를 감싸니까 컴포넌트가 안바뀜 ??

export default ContentsStyle;
