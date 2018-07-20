import React from "react";
import styled from "styled-components";

import CommonBar from "../components/CommonBar/";
import CommonMenu from "../components/CommonMenu/";

const Container = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: #423630;
  animation: hue infinite 10s;
`;

const HeaderStyle = props => {
  console.log(props);
  return (
    <Container>
      <CommonBar {...props} />
      <CommonMenu {...props} />
    </Container>
  );
};

export default HeaderStyle;
