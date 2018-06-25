import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 30px;
  font-size: 12px;
  padding: 0 10px;
  box-sizing: border-box;
  border: 0 none;
`;

// ${props => props.type === "email" ? `background: #012300;`};

const InputStyle = props => {
  props.type === "search" ? `background: #012300;`;
  if (props.type === "search") {
    `opacity: 0.5`;
  }
  console.log(props.type);

  return <Input type={props.type} placeholder={props.placeholder} />;
};

export default InputStyle;
