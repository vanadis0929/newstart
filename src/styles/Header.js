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
`;

const HeaderStyle = props => {
  console.log("header:: " + props.status);
  return (
    <Container>
      <CommonBar />
      <CommonMenu inheritStatus={props.status} />
    </Container>
  );
};

export default HeaderStyle;
