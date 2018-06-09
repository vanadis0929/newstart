import React from "react";
import styled from 'styled-components';

//stateless
const CommonArea = styled.div `
    padding: 10px 20px; 
    display: flex; 
    color: #fff;
    justify-content: space-between;
    align-items: center; 
    background-color: #423630; 
    
        & div {
            
            & button {

                border-radius: 3px;
                padding: 0 5px; 
                border: 1px solid #6c3c6a;
                margin-right: 10px; 
                &:last-child {
                    margin-right: 0; 
                }
            }
        }
`;

const Header = (props) => {
    return ( 
        <CommonArea>
            <h1>카카오톡</h1>
            <div>
                <button type="button">최소화</button>
                <button type="button">최대화</button>
                <button type="button">닫기</button>
            </div>
        </CommonArea>
    )
}

export default Header;