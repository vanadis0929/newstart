import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10;
`;

const HeaderStyle = props => {
  const { children } = props;
  return <Layout>{children}</Layout>;
};

export default HeaderStyle;
