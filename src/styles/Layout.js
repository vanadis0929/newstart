import React from "react";
import styled from "styled-components";

const Layout = styled.div``;

const LayoutStyle = props => {
  const { children } = props;
  //const children = props.children; 와 동일

  return <Layout>{children}</Layout>;
};

export default LayoutStyle;
