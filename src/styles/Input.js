import React from "react";
import styled from "styled-components";

const Input = styled.input.attrs({
  type: "email"
})`
  width: 100%;
  height: 30px;
  font-size: 12px;
  padding: 0 10px;
  box-sizing: border-box;
  border: 0 none;
`;

const InputStyle = props => {
  return <Input />;
};

export default InputStyle;
