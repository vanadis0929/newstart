import React from "react";
import styled from "styled-components";
import InputStyle from "./../../styles/Input";
import LogoImage from "../../images/logo.png";

//stateless
const LoginFormWrap = styled.div`
  background-color: #ffeb33;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  height: calc(100vh - 88px);
  height: -webkit-calc(100vh - 88px);

  & form {
    display: flex;
    flex-flow: inherit;
    width: 70%;
    & fleldset {
      margin-bottom: 10px;
      & input {
        width: 100%;
        height: 30px;
        font-size: 12px;
        padding: 0 10px;
        box-sizing: border-box;
        border: 0 none;
        margin-bottom: 5px;
      }
      &::last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const Logo = styled.div`
  margin-bottom: 30px;
`;

const LoginButton = styled.button.attrs({
  type: "button"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  font-size: 13px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  height: 40px;
  font-weight: 700;
`;

const LoginForm = props => {
  return (
    <LoginFormWrap>
      <Logo>
        <img src={LogoImage} alt="" />
      </Logo>
      <form>
        <fleldset>
          <input type="email" placeholder="이메일 아이디 입력" />
          <input type="password" placeholder="비밀번호" />
        </fleldset>

        {/* <InputStyle type="text" /> */}

        <LoginButton>로그인</LoginButton>
      </form>
    </LoginFormWrap>
  );
};

export default LoginForm;
