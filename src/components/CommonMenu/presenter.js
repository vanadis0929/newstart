import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import Ionicon from "react-ionicons";

//stateless
const CommonMenuDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  padding-bottom: 10px;
  & div:first-child {
    & a,
    button {
      font-size: 3vw;
      margin-right: 15px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  & div:last-child {
    & a,
    button {
      font-size: 2.8vw;
      margin-right: 15px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

const CommonMenu = props => {
  return (
    <CommonMenuDiv>
      <div>
        <Link to="/user" onClick={props.actionToggle}>
          <Ionicon icon="ios-man" fontSize="30px" color="rgba(255,255,255,1)" />
        </Link>
        <Link to="/chat" onClick={props.actionToggle}>
          <Ionicon
            icon="md-chatbubbles"
            fontSize="30px"
            color="rgba(255,255,255,0.5)"
          />
        </Link>
        <Link to="/mypage" onClick={props.actionToggle}>
          <Ionicon
            icon="md-menu"
            fontSize="30px"
            color="rgba(255,255,255,0.5)"
          />
        </Link>
      </div>
      <div>
        <button type="button">
          <Ionicon icon="md-alarm" fontSize="30px" color="#fff" />
        </button>
        <button type="button">
          <Ionicon icon="md-apps" fontSize="30px" color="#fff" />
        </button>
      </div>
    </CommonMenuDiv>
  );
};

export default CommonMenu;
