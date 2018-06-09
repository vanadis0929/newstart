import React from "react";
import styled from 'styled-components';

//stateless
const UserListWrap = styled.ul `
    padding: 0 10px; 
    & li {
        display: flex;
        align-items: center;
        padding: 5px 0;
        border-bottom: 1px solid #d1d1d1; 
        &:last-child {
            border-bottom: 0 none;
        }
    }  
`;

const UserThum = styled.div`
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

const UserName = styled.span`
    font-size: 18px; 
    font-weight: 700;
    color: #999;
`;

const UserList = (props) => {
    return ( 
        <UserListWrap>
            <li>
                <UserThum><img src={require('../../images/profile.jpg')} alt="" /></UserThum>
                <UserName>닉네임 1</UserName>
             </li>
            <li>
                <UserThum><img src={require('../../images/profile.jpg')} alt="" /></UserThum>
                <UserName>닉네임 1</UserName>
             </li>
             <li>
                <UserThum><img src={require('../../images/profile.jpg')} alt="" /></UserThum>
                <UserName>닉네임 1</UserName>
             </li>
             <li>
                <UserThum><img src={require('../../images/profile.jpg')} alt="" /></UserThum>
                <UserName>닉네임 1</UserName>
             </li>
             <li>
                <UserThum><img src={require('../../images/profile.jpg')} alt="" /></UserThum>
                <UserName>닉네임 1</UserName>
             </li> 
        </UserListWrap>
    )
}

export default UserList;