import React from "react";
import styled from 'styled-components';

//stateless
const CommonMenuDiv= styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    padding-bottom: 10px; 
    background-color: #423630; {
        & div:first-child {
            & button {
                font-size: 3vw; 
                margin-right: 15px; 
                &:hover {
                    text-decoration: underline; 
                }
            }
        }
        & div:last-child {
            & button {
                 font-size: 2.8vw; 
                margin-right: 15px; 
                &:last-child {
                    margin-right: 0; 
                }
            }
        }
    }

`;

const CommonMenu = (props) => {
    return ( 
        <CommonMenuDiv>
            <div>
                <button type="button">친구목록</button>
                <button type="button">채팅목록</button>
                <button type="button">내정보</button>
            </div>
            <div>
                <button type="button">알림켜기/끄기</button>
                <button type="button">메뉴</button>
            </div>
        </CommonMenuDiv>

    )
}

export default CommonMenu;