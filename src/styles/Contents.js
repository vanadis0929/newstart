import React from "react";
import styled from "styled-components";

const Contents = styled.article`
  padding-top: 88px;
`;

const ContentsStyle = props => {
  const { children } = props;
  //const children = props.children; 와 동일

  return <Contents>{children}</Contents>;
};

export default ContentsStyle;
