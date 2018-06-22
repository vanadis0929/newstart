import React, { Component } from "react";
import "./index.css";

import Layout from "./styles/Layout";
import Contents from "./styles/Contents";

//layout.js에서 header를 불러오기때문에 여기서는 불러오지 않음.
class App extends Component {
  render() {
    return (
      <Layout>
        <Contents />
      </Layout>
    );
  }
}

export default App;
