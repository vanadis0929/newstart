import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Layout from "styles/Layout";

import Auth from "components/Auth";

//layout.js에서 header를 불러오기때문에 여기서는 불러오지 않음.
const App = props => {
  return (
    <BrowserRouter>
      <React.Fragment>
        {props.isLogged ? <Layout /> : null}

        <Auth />
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;

// exact: 주소값이 다르면 출력하지 않음.
