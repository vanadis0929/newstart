import React from "react";
import styled from "styled-components";

import InputStyle from "styles/Input";
import Ionicon from "react-ionicons";

import Textarea from "react-textarea-autosize";

//stateless
const ChatRoomDiv = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* padding: 10px; */
  background-color: #029692;
  height: 100vh;
  box-sizing: border-box;
  z-index: 50;
`;

const ChatInfoArea = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #000;
  box-shadow: 0 1px 2px #000;
  background-color: rgba(2, 150, 146, 0.9);
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 700;
  z-index: 20;
  color: #fff;
  & button {
    margin-right: 15px;
  }
  & h1 {
    font-size: 20px;
    font-weight: 400;
    flex: 1;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

const ChatMsgArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 20px;
  overflow-y: auto;
  margin-top: 70px;
`;

const YourChat = styled.dl`
  font-size: 14px;
  padding: 0 10px 0 60px;
  margin-bottom: 5px;
  line-height: 1.4;
  position: relative;
  display: flex;
  flex-direction: column;
  & > dt {
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    & strong {
      margin-bottom: 5px;
      display: block;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  & > dd {
    &:last-child {
      margin-top: 5px;
    }
    & > span {
      border-radius: 10px;
      border: 2px solid #000;
      padding: 10px;
      background-color: #fff;
      display: inline-block;
      color: #000;
      font-size: 12px;
      word-break: keep-all;
      word-wrap: break-word;
    }
  }
`;

const YourProfile = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 10px;
  top: 0;
  border-radius: 100px;
  & img {
    width: 100%;
    border-radius: inherit;
  }
`;

const MyChat = styled.div`
  text-align: right;
  font-size: 14px;
  line-height: 1.4;
  padding: 0 10px;
  margin-bottom: 5px;
  & > p:not(:last-child) {
    margin-bottom: 5px;
    & span {
      border-radius: 10px;
      border: 2px solid #000;
      padding: 10px;
      background-color: #fff5b0;
      display: inline-block;
      color: #000;
      font-size: 12px;
    }
  }
`;

const ChatTime = styled.time`
  display: block;
  font-size: 11px;
`;

const ChatInputBox = styled.div`
  min-height: 46px;
  display: flex;
  background-color: #fff;
  border-top: 1px solid #000;
  align-items: center;
  & textarea {
    max-height: 96px;
    height: 100%;
    width: 100%;
    font-size: 14px;
    background: none;
    padding: 10px;
    box-sizing: border-box;
    border: 0 none;
  }
`;

const ChatRoom = props => {
  console.log(props);
  return (
    <ChatRoomDiv>
      <ChatInfoArea>
        <button type="button" onClick={props.handleChatDeactive}>
          <Ionicon icon="md-arrow-back" fontSize="35px" color="#fff" />
        </button>
        <h1>대화방 이름</h1>
      </ChatInfoArea>
      <ChatMsgArea>
        <MyChat>
          <p>
            <span>내가 쓴 채팅 내용</span>
          </p>
          <p>
            <span>내가 쓴 채팅 내용</span>
          </p>
          <p>
            <span>내가 쓴 채팅 내용</span>
          </p>
          <p>
            <span>내가 쓴 채팅 내용</span>
          </p>
          <ChatTime>오전 10:11</ChatTime>
        </MyChat>

        <MyChat>
          <p>
            <span>내가 쓴 채팅 내용</span>
          </p>
          <ChatTime>오전 10:11</ChatTime>
        </MyChat>

        <YourChat>
          <dt>
            <YourProfile>
              <img src={require("../../images/profile.jpg")} alt="" />
            </YourProfile>
            <strong>당신의 닉네임</strong>
          </dt>
          <dd>
            <span>당신이 쓴 채팅 내용</span>
          </dd>
          <dd>
            <ChatTime>오전 10:11</ChatTime>
          </dd>
        </YourChat>
      </ChatMsgArea>
      <ChatInputBox>
        <Textarea autoFocus />
      </ChatInputBox>
    </ChatRoomDiv>
  );
};

export default ChatRoom;
