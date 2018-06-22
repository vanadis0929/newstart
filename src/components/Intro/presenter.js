import React from "react";
import styled from "styled-components";
import LogoImage from "../../images/logo.png";

import LoginForm from "../LoginForm/presenter";
import JoinForm from "../JoinForm/presenter";

//stateless
const IntroWrap = styled.div`
  background-color: #ffeb33;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  height: 100vh;
`;

const Logo = styled.div`
  margin-bottom: 30px;
`;

const Intro = props => {
  return (
    <IntroWrap>
      <Logo>
        <img src={LogoImage} alt="" />
      </Logo>

      <LoginForm />
      {/* <JoinForm /> */}
    </IntroWrap>
  );
};

export default Intro;
