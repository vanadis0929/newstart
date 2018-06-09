import React, { Component } from 'react';
import './App.css';
import CommonBar from './components/CommonBar/presenter';
import CommonMenu from './components/CommonMenu/presenter';
import UserSearch from './components/UserSearch/presenter';
import UserList from './components/UserList/presenter';

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
          <UserList></UserList>
        </article>
      </div>
    );
  }
}

export default App;
