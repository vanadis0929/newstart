import React from "react";
import styled from "styled-components";

import InputStyle from "styles/Input";

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
  padding: 0 24px;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
`;

const ChatMsgArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 20px;
`;

const YourChat = styled.dl`
  font-size: 14px;
  padding: 0 10px;
  margin-bottom: 5px;
  line-height: 1.4;
  position: relative;
  & > dt {
    font-size: 12px;
  }
  & > dd {
    & > span {
      border-radius: 10px;
      border: 2px solid #000;
      padding: 10px;
      background-color: #fff;
      display: inline-block;
    }
  }
`;

const YourProfile = styled.div`
  border-radius: 10px;
  width: 40px;
  height: 40px;
  & img {
    width: 100%;
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
    }
  }
`;

const ChatTime = styled.time`
  display: block;
  font-size: 11px;
`;

const ChatInputBox = styled.div`
  flex: 0 0 46px;
  display: flex;
  background-color: #fff;
  border-top: 1px solid #000;
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
          뒤로
        </button>{" "}
        채팅방 이름
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
            당신의 닉네임
          </dt>
          <dd>
            <span>당신이 쓴 채팅 내용</span>
          </dd>
          <ChatTime>오전 10:11</ChatTime>
        </YourChat>
      </ChatMsgArea>
      <ChatInputBox>
        <Textarea autoFocus />
      </ChatInputBox>
    </ChatRoomDiv>
  );
};

export default ChatRoom;
