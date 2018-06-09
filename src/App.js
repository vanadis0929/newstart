import React, { Component } from "react";
import "./App.css";
import CommonBar from "./components/CommonBar/presenter";
import CommonMenu from "./components/CommonMenu/presenter";
import UserSearch from "./components/UserSearch/presenter";
import ChatSearch from "./components/ChatSearch/presenter";
import UserList from "./components/UserList/presenter";
import ChatList from "./components/ChatList/presenter";
import MyPage from "./components/MyPage/presenter";
import MyMenuList from "./components/MyMenuList/presenter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CommonBar />
          <CommonMenu />
        </header>
        <article>
          <UserSearch />
          <UserList />
          <ChatSearch />
          <ChatList />
          <MyPage />
          <MyMenuList />
        </article>
      </div>
    );
  }
}

export default App;
