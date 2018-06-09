import React from "react";
import styled from "styled-components";

//stateless
const Container = styled.ul`
  padding: 0 10px;
  & li {
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #d1d1d1;
    &:last-child {
      border-bottom: 0 none;
    }
  }
`;

const MenuIcon = styled.div`
  border-radius: 100px;
  flex: 0 0 20px;
  height: 20px;
  margin-right: 10px;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 100px;
  }
`;

const MenuName = styled.span`
  font-size: 14px;
  color: #000;
`;

const UserList = props => {
  return (
    <Container>
      <li>
        <MenuIcon>
          <img src={require("../../images/profile.jpg")} alt="" />
        </MenuIcon>
        <MenuName>메뉴명 1</MenuName>
      </li>
      <li>
        <MenuIcon>
          <img src={require("../../images/profile.jpg")} alt="" />
        </MenuIcon>
        <MenuName>메뉴명 1</MenuName>
      </li>
      <li>
        <MenuIcon>
          <img src={require("../../images/profile.jpg")} alt="" />
        </MenuIcon>
        <MenuName>메뉴명 1</MenuName>
      </li>
      <li>
        <MenuIcon>
          <img src={require("../../images/profile.jpg")} alt="" />
        </MenuIcon>
        <MenuName>메뉴명 1</MenuName>
      </li>
      <li>
        <MenuIcon>
          <img src={require("../../images/profile.jpg")} alt="" />
        </MenuIcon>
        <MenuName>메뉴명 1</MenuName>
      </li>
      <li>
        <MenuIcon>
          <img src={require("../../images/profile.jpg")} alt="" />
        </MenuIcon>
        <MenuName>메뉴명 1</MenuName>
      </li>
      <li>
        <MenuIcon>
          <img src={require("../../images/profile.jpg")} alt="" />
        </MenuIcon>
        <MenuName>메뉴명 1</MenuName>
      </li>
    </Container>
  );
};

export default UserList;
