import React from "react";
import styled from "styled-components";

import InputStyle from "styles/Input";

//stateless
const ChatSearchDiv = styled.form`
  margin-bottom: 20px;
  position: sticky;
  left: 0;
  top: 0;
  z-index: 5;
  border-bottom: 1px solid #d1d1d1;
  background-color: #fff;
`;

const ChatInput = props => {
  return (
    <ChatSearchDiv>
      <InputStyle type="search" placeholder="채팅방이름, 참여자 검색" />
    </ChatSearchDiv>
  );
};

export default ChatInput;
