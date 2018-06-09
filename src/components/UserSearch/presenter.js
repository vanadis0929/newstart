import React from "react";
import styled from 'styled-components';

//stateless
const UserSearchDiv= styled.form `
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

const UserList = (props) => {
    return ( 
        <UserSearchDiv>
            <input type="search" placeholder="친구이름 검색" />
        </UserSearchDiv>

    )
}

export default UserList;