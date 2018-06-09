import React, { Component } from "react";
import "./index.css";
import CommonBar from "./components/CommonBar/presenter";
import CommonMenu from "./components/CommonMenu/presenter";
import UserSearch from "./components/UserSearch/presenter";
import ChatSearch from "./components/ChatSearch/presenter";
import UserList from "./components/UserList/presenter";
import ChatList from "./components/ChatList/presenter";
import MyPage from "./components/MyPage/presenter";
import MyMenuList from "./components/MyMenuList/presenter";

import Layout from "./styles/Layout";
import Header from "./styles/Header";
import Contents from "./styles/Contents";

class App extends Component {
  render() {
    return (
      <Layout>
        <Header>
          <CommonBar />
          <CommonMenu />
        </Header>

        <Contents>
          <UserSearch />
          <UserList />

          <ChatSearch />
          <ChatList />

          <MyPage />
          <MyMenuList />
        </Contents>
      </Layout>
    );
  }
}

export default App;
