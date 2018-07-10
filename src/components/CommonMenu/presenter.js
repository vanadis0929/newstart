import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import Ionicon from "react-ionicons";

import UserList from "components/UserList/";
import UserSearch from "components/UserSearch/";
import ChatList from "components/ChatList/";
import ChatSearch from "components/ChatSearch/";
import MyMenuList from "components/MyMenuList/";
import MyPage from "components/MyPage/";

//stateless
const CommonMenuDiv = styled.div`
  animation: hue infinite 10s;
  background-color: #423630;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  padding-bottom: 10px;
  & div:first-child {
    & a,
    button {
      font-size: 3vw;
      margin-right: 15px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  & div:last-child {
    & a,
    button {
      font-size: 2.8vw;
      margin-right: 15px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

const UserWrap = styled.div`
  position: fixed;
  left: 0;
  top: 103px;
  height: calc(100% - 103px);
  &:empty {
    display: none;
  }
`;

const CommonMenu = props => {
  return (
    <React.Fragment>
      <CommonMenuDiv>
        <div>
          <button type="button" data-idx="user" onClick={props.statusToggle}>
            {props.status === "user" ? (
              <Ionicon
                icon="ios-man"
                fontSize="30px"
                color="rgba(255,255,255,1)"
              />
            ) : (
              <Ionicon
                icon="ios-man"
                fontSize="30px"
                color="rgba(255,255,255,0.5)"
              />
            )}
          </button>
          <button type="button" data-idx="chat" onClick={props.statusToggle}>
            {props.status === "chat" ? (
              <Ionicon
                icon="md-chatbubbles"
                fontSize="30px"
                color="rgba(255,255,255,1)"
              />
            ) : (
              <Ionicon
                icon="md-chatbubbles"
                fontSize="30px"
                color="rgba(255,255,255,0.5)"
              />
            )}
          </button>
          <button type="button" data-idx="mypage" onClick={props.statusToggle}>
            {props.status === "mypage" ? (
              <Ionicon
                icon="md-menu"
                fontSize="30px"
                color="rgba(255,255,255,1)"
              />
            ) : (
              <Ionicon
                icon="md-menu"
                fontSize="30px"
                color="rgba(255,255,255,0.5)"
              />
            )}
          </button>
        </div>
        <div>
          <button type="button">
            <Ionicon icon="md-alarm" fontSize="30px" color="#fff" />
          </button>
          <button type="button">
            <Ionicon icon="md-apps" fontSize="30px" color="#fff" />
          </button>
        </div>
      </CommonMenuDiv>

      {props.status === "user" ? (
        <UserWrap>
          <UserSearch />
          <UserList />
        </UserWrap>
      ) : null}
      {props.status === "chat" ? (
        <UserWrap>
          <ChatSearch />
          <ChatList />
        </UserWrap>
      ) : null}
      {props.status === "mypage" ? (
        <UserWrap>
          <MyPage />
          <MyMenuList />
        </UserWrap>
      ) : null}
    </React.Fragment>
  );
};

export default CommonMenu;
