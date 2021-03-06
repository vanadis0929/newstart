import React, { Fragment } from "react";
import styled, { injectGlobal } from "styled-components";

//import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Layout from "styles/Layout";
import Auth from "components/Auth";

injectGlobal`
* {  padding: 0; margin: 0; min-width: 0; }
body { font: 14px/1.4 sans-serif; color: #666;}

a {
    color: inherit;
    text-decoration: none;
}

input,
textarea {
    font-family: inherit;
}

button {
    background: none;
    border: 0 none;
    cursor: pointer;
    color: inherit;
}

*:focus,
*:active {
    outline: none;
}

header {
    color: #fff;
}

img {
    vertical-align: top;
    max-width: 100%;
}

ol,
ul,
li {
    list-style: none;
}

em,
strong,
dfn {
    font-style: normal;
    font-weight: 700;
}

fieldset,
img {
    border: 0 none;
}

.ButtonWrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

@keyframes hue {
    from {
        -webkit-filter: hue-rotate(0deg);
    }
    to {
        -webkit-filter: hue-rotate(-360deg);
    }
}
`;

const App = props => {
  //사용되는 props정의
  const { isLogged } = props;

  return (
    <Fragment>
      {isLogged === false ? <Auth {...props} /> : <Layout {...props} />}
    </Fragment>
  );
};

export default App;

// exact: 주소값이 다르면 출력하지 않음.
