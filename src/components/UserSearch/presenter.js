import React from "react";
import styled from "styled-components";

//stateless
const Container = styled.form`
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

const UserSearch = props => {
  return (
    <Container>
      <input type="search" placeholder="친구이름 검색" />
    </Container>
  );
};

export default UserSearch;
