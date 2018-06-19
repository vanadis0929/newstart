import React from "react";
import styled from "styled-components";

import CommonBar from "../components/CommonBar/presenter";
import CommonMenu from "../components/CommonMenu/presenter";

const Container = styled.header `
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10;
`;

const HeaderStyle = props => {
  return (
    <Container>
      <CommonBar />
      <CommonMenu />
    </Container>
  );
};

export default HeaderStyle;
