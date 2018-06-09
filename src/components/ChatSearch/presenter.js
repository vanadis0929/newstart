import React from "react";
import styled from 'styled-components';

//stateless
const ChatSearchDiv= styled.form `
    margin-bottom: 20px; {
        & input {
            width: 100%; 
            height: 30px; 
            font-size: 12px; 
            padding: 0 10px; 
            box-sizing: border-box; 
        }
    }
`;

const ChatInput = (props) => {
    return ( 
        <ChatSearchDiv>
            <input type="search" placeholder="채팅방이름, 참여자 검색" />
        </ChatSearchDiv>

    )
}

export default ChatInput;