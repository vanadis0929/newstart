import React from "react";
import styled from "styled-components";

//stateless
const ChatSearchDiv = styled.form`
  margin-bottom: 20px;
  position: sticky;
  left: 0;
  top: 88px;
  z-index: 5;
  border-bottom: 1px solid #d1d1d1;
  & input {
    width: 100%;
    height: 30px;
    font-size: 12px;
    padding: 0 10px;
    box-sizing: border-box;
    border: 0 none;
  }
`;

const ChatInput = props => {
  return (
    <ChatSearchDiv>
      <input type="search" placeholder="채팅방이름, 참여자 검색" />
    </ChatSearchDiv>
  );
};

export default ChatInput;
