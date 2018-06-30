import React from "react";
import styled from "styled-components";

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonStyle = styled.button`
  background-color: #fff;
  font-size: 4.5vw;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  height: 40px;
  font-weight: 700;
  flex: 1;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:last-child {
    margin-right: 0;
  }
`;

const Button = props => {
  const { children } = props;
  return (
    <ButtonStyle
      type={props.type === "button" ? "button" : props.type}
      style={props.style}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
