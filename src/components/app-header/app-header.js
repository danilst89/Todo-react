import React from 'react';
import './app-header.css';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'black' : 'red'};
        :hover {
            color: blue;
            cursor: pointer;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`;


const AppHeader = ({liked, all}) => {
    return (
        <Header /*as='a'*/ colored>
            <h1>Danil Stolbov</h1>
            <h2>{all} записей, из них понравилось {liked}</h2>
        </Header>
    )
};

export default AppHeader;