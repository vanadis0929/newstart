import React from "react";
import styled from "styled-components";

import UserSearch from "../components/UserSearch/presenter";
import UserList from "../components/UserList/presenter";

import ChatSearch from "../components/ChatSearch/presenter";
import ChatList from "../components/ChatList/presenter";
//import ChatView from "../Views/Chatview";

import MyPage from "../components/MyPage/presenter";
import MyMenuList from "../components/MyMenuList/presenter";

import LoginForm from "./../components/LoginForm/presenter";
import JoinForm from "./../components/JoinForm/presenter";

const Contents = styled.article`
  padding-top: 88px;
`;

const ContentsStyle = props => {
  //const children = props.children; 와 동일

  return (
    <Contents>
      {/* <UserSearch />
      <UserList /> */}

      {/* <ChatView /> */}
      {/* <ChatSearch />
      <ChatList />

      <MyPage />
      <MyMenuList /> */}

      <LoginForm />
      <JoinForm />
    </Contents>
  );
};

export default ContentsStyle;
