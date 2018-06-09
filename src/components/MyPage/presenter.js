import React from "react";
import styled from "styled-components";

//stateless
const Container = styled.section`
  position: relative;
  background: #ddd;
  border-bottom: 1px solid #d1d1d1;
`;

const MyInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  & > div:nth-child(2) {
    flex: 1;
  }
`;

const UserThum = styled.div`
  border-radius: 100px;
  flex: 0 0 50px;
  height: 50px;
  margin-right: 10px;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 100px;
  }
`;

const UserName = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #000;
  margin-bottom: 10px;
`;

const UserAccount = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #999;
  & dfn {
    margin-right: 10px;
    display: inline-block;
    width: 30px;
  }
`;

const UserId = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #999;
  & dfn {
    margin-right: 10px;
    display: inline-block;
    width: 30px;
  }
`;

const Notification = styled.button`
  flex: 0 0 50px;
`;

const MyPage = props => {
  return (
    <Container>
      <MyInfo>
        <UserThum>
          <img src={require("../../images/profile.jpg")} alt="" />
        </UserThum>
        <div>
          <UserName>닉네임 1</UserName>
          <UserAccount>
            <dfn>계정</dfn>vanadis0929@gmail.com
          </UserAccount>
          <UserId>
            <dfn>ID</dfn>vanadis0929
          </UserId>
        </div>
        <Notification>알림보기</Notification>
      </MyInfo>
    </Container>
  );
};

export default MyPage;
