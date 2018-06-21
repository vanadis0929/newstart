import React from "react";
import styled from "styled-components";
import InputStyle from "./../../styles/Input";
import LogoImage from "../../images/logo.png";

//stateless
const JoinFormWrap = styled.div`
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
    }
  }
`;

const Logo = styled.div`
  margin-bottom: 30px;
`;

const JoinButton = styled.button.attrs({
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
    <JoinFormWrap>
      <Logo>
        <img src={LogoImage} alt="" />
      </Logo>
      <form>
        <fleldset>
          <input type="email" placeholder="이메일 (아이디) 입력" />
          <input type="test" placeholder="닉네임" />
          <input type="password" placeholder="비밀번호" />
          <input type="password" placeholder="비밀번호 재확인" />
        </fleldset>
        {/* <InputStyle type="text" /> */}
        <div>
          <JoinButton> 가입완료 </JoinButton>
          <JoinButton> 취소 </JoinButton>
        </div>
      </form>
    </JoinFormWrap>
  );
};

export default JoinForm;
