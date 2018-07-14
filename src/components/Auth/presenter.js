import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import LogoImage from "images/logo.png";

import InputStyle from "styles/Input";
import ButtonStyle from "styles/Button";

//stateless
const IntroWrap = styled.div`
  background-color: #ffeb33;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  height: 100vh;
  animation: hue 60s infinite;
`;

const Logo = styled.div`
  margin-bottom: 30px;
`;

const AuthFormWrap = styled.form`
  display: flex;
  flex-flow: inherit;
  width: 70%;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > a {
      background-color: #fff;
      font-size: 14px;
      text-align: center;
      border: 1px solid #ddd;
      border-radius: 5px;
      height: 40px;
      font-weight: 700;
      flex: 1;
      margin-right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:last-child {
        margin-right: 0;
      }
    }
  }

  & fieldset {
    margin-bottom: 10px;
  }
  & input {
    margin-bottom: 5px;
  }
  &::last-child {
    margin-bottom: 0;
  }
`;

const JoinFormWrap = styled.form`
  display: flex;
  flex-flow: inherit;
  width: 70%;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > a {
      background-color: #fff;
      font-size: 13px;
      text-align: center;
      border: 1px solid #ddd;
      border-radius: 5px;
      height: 40px;
      font-weight: 700;
      flex: 1;
      margin-right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:last-child {
        margin-right: 0;
      }
    }
  }

  & fieldset {
    margin-bottom: 10px;
  }
  & input {
    margin-bottom: 5px;
  }
  &::last-child {
    margin-bottom: 0;
  }
`;

const AuthForm = props => {
  return (
    <IntroWrap>
      <Logo>
        <img src={LogoImage} alt="" />
      </Logo>
      {props.mode === "login" ? (
        <AuthFormWrap>
          <fieldset>
            <InputStyle type="email" placeholder="이메일 아이디 입력" />
            <InputStyle type="password" placeholder="비밀번호" />
          </fieldset>
          <div>
            <ButtonStyle type="button">로그인</ButtonStyle>
            {/* <ButtonStyle type="button" onClick={props.gotoJoin}>
            회원가입
          </ButtonStyle> */}
            <a href="#none" onClick={props.gotoJoin}>
              회원가입
            </a>
            {/* <Link to="/join">회원가입하기</Link> */}
          </div>
        </AuthFormWrap>
      ) : (
        <JoinFormWrap>
          <fieldset>
            <InputStyle type="email" placeholder="이메일 (아이디) 입력" />
            <InputStyle type="text" placeholder="닉네임" />
            <InputStyle type="password" placeholder="비밀번호" />
            <InputStyle type="password" placeholder="비밀번호 재확인" />
          </fieldset>
          <div>
            <ButtonStyle type="button">회원가입</ButtonStyle>
            <a href="#none" onClick={props.gotoJoin}>
              취소
            </a>
            {/* <Link to="/login">취소</Link> */}
          </div>
        </JoinFormWrap>
      )}
    </IntroWrap>
  );
};

export default AuthForm;