import React from "react";
import styled from "styled-components";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import UserListForm from "Views/user";
import ChatListForm from "Views/chat";
import MyPageForm from "Views/mypage";

const Contents = styled.article`
  padding-top: 103px;
`;

const ContentsStyle = props => {
  //const { children } = props; //와 동일
  //console.log("ffff: " + this.props);
  return (
    <Contents>
      {/* <Switch>
        <Route exact path="/user" component={UserListForm} />
        <Route exact path="/chat" component={ChatListForm} />
        <Route exact path="/mypage" component={MyPageForm} />
      </Switch> */}
    </Contents>
  );
};

//BrowserRouter 를 감싸니까 컴포넌트가 안바뀜 ??

export default ContentsStyle;
