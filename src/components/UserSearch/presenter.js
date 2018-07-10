import React from "react";
import styled from "styled-components";

import InputStyle from "styles/Input";

//stateless
const Container = styled.form`
  margin-bottom: 20px;
  position: sticky;
  left: 0;
  top: 0;
  z-index: 5;
  border-bottom: 1px solid #d1d1d1;
  background-color: #fff;
`;

const UserSearch = props => {
  return (
    <Container>
      <InputStyle type="search" placeholder="친구이름 검색" />
    </Container>
  );
};

export default UserSearch;
