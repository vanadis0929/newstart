import React from "react";
import styled from "styled-components";

import ChatRoom from "components/ChatRoom";

//stateless
const ChatListWrap = styled.ul`
  padding: 0 15px;
  & li {
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #d1d1d1;
    position: relative;
    &:last-child {
      border-bottom: 0 none;
    }
  }
  & dl {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

const ChatThum = styled.div`
  border-radius: 100px;
  flex: 0 0 50px;
  height: 50px;
  margin-right: 10px;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 100px;
  }
`;

const ChatTitle = styled.dt`
  font-size: 18px;
  font-weight: 700;
  color: #999;
  & span {
    display: inline-block;
    max-width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    vertical-align: middle;
    margin-right: 10px;
  }
`;

const ChatMember = styled.em`
  font-size: 12px;
  color: #222;
  vertical-align: middle;
`;

const ChatContext = styled.dd`
  font-size: 13px;
  color: #222;
  margin-top: 10px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const ChatTime = styled.span`
  font-size: 12px;
  color: #000;
  position: absolute;
  top: 16px;
  right: 0;
`;

const ChatList = props => {
  console.log(props);
  return (
    <React.Fragment>
      <ChatListWrap>
        <li onClick={props.handleChatActive}>
          <ChatThum>
            <img src={require("../../images/profile.jpg")} alt="" />
          </ChatThum>{" "}
          <dl>
            <ChatTitle>
              <span> 채팅방 이름입니다 </span> <ChatMember> 50 </ChatMember>{" "}
            </ChatTitle>{" "}
            <ChatContext> 채팅내용이 여기에 </ChatContext>{" "}
          </dl>{" "}
          <ChatTime> 오후 10: 10 </ChatTime>{" "}
        </li>{" "}
        <li>
          <ChatThum>
            <img src={require("../../images/profile.jpg")} alt="" />
          </ChatThum>{" "}
          <dl>
            <ChatTitle>
              <span> 채팅방 이름입니다 </span> <ChatMember> 50 </ChatMember>{" "}
            </ChatTitle>{" "}
            <ChatContext> 채팅내용이 여기에 </ChatContext>{" "}
          </dl>{" "}
          <ChatTime> 오후 10: 10 </ChatTime>{" "}
        </li>{" "}
        <li>
          <ChatThum>
            <img src={require("../../images/profile.jpg")} alt="" />
          </ChatThum>{" "}
          <dl>
            <ChatTitle>
              <span> 채팅방 이름입니다 </span> <ChatMember> 50 </ChatMember>{" "}
            </ChatTitle>{" "}
            <ChatContext> 채팅내용이 여기에 </ChatContext>{" "}
          </dl>{" "}
          <ChatTime> 오후 10: 10 </ChatTime>{" "}
        </li>{" "}
        <li>
          <ChatThum>
            <img src={require("../../images/profile.jpg")} alt="" />
          </ChatThum>{" "}
          <dl>
            <ChatTitle>
              <span> 채팅방 이름입니다 </span> <ChatMember> 50 </ChatMember>{" "}
            </ChatTitle>{" "}
            <ChatContext>
              {" "}
              채팅내용이 여기에 채팅내용이 여기에 채팅내용이 여기에 채팅내용이
              여기에 채팅내용이 여기에 채팅내용이 여기 채팅내용이 여기에
              채팅내용이 여기에 채팅내용이 여기{" "}
            </ChatContext>{" "}
          </dl>{" "}
          <ChatTime> 오후 10: 10 </ChatTime>{" "}
        </li>{" "}
      </ChatListWrap>

      {props.chatActive ? (
        <ChatRoom handleChatDeactive={props.handleChatDeactive} />
      ) : null}
    </React.Fragment>
  );
};

export default ChatList;
