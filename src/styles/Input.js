import React from "react";
import styled from "styled-components";

import SearchIcon from "images/icon_search.png";

const Input = styled.input`
  width: 100%;
  height: 30px;
  font-size: 12px;
  padding: 0 10px;
  box-sizing: border-box;
  border: 0 none;
  background: ${props =>
    props.type === "search"
      ? `url(${SearchIcon}) no-repeat 10px / 15px;`
      : "#fff"};
  text-indent: ${props => (props.type === "search" ? "20px" : "0")};
`;

// ${props => props.type === "email" ? `background: #012300;`};

const InputStyle = props => {
  //console.log(props.type);

  return <Input type={props.type} placeholder={props.placeholder} />;
};

export default InputStyle;
