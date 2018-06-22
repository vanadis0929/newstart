import React from "react";
import styled from "styled-components";
import InputStyle from "./../../styles/Input";

//stateless
const LoginFormWrap = styled.form`
  display: flex;
  flex-flow: inherit;
  width: 70%;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > * {
      flex: 1;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
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

const JoinForm = props => {
  return (
    <LoginFormWrap>
      <fleldset>
        <input type="email" placeholder="이메일 아이디 입력" />
        <input type="password" placeholder="비밀번호" />
      </fleldset>

      {/* <InputStyle type="text" /> */}

      <LoginButton>로그인</LoginButton>
    </LoginFormWrap>
  );
};

export default JoinForm;
