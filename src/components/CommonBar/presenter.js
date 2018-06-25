import React from "react";
import styled from "styled-components";
import Ionicon from "react-ionicons";

//stateless
const CommonArea = styled.div`
  padding: 10px 20px;
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  background-color: #423630;

  & div {
    & button {
      border-radius: 3px;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

const Header = props => {
  return (
    <CommonArea>
      <h1>카카오톡</h1>
      <div>
        <button type="button">
          <Ionicon icon="ios-remove" fontSize="25px" color="#fff" />
        </button>
        <button type="button">
          <Ionicon icon="md-close" fontSize="25px" color="#fff" />
        </button>
      </div>
    </CommonArea>
  );
};

export default Header;
