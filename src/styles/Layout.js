import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Contents from "./Contents";

const Layout = styled.div`
  opacity: 1;
`;

const LayoutStyle = props => {
  const { children } = props;
  //const children = props.children; 와 동일
  console.log("layout::" + props.status);
  return (
    //로그인 후에 나오는 부분

    <Layout>
      <Header status={props.status} />
      <Contents status={props.status} />
    </Layout>
  );
};

export default LayoutStyle;
