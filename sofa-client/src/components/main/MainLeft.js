import React from 'react';
import styled from 'styled-components';
import MainLeftMenu from './MainLeftMenu';

const MainLeft = styled.div`
    width: 14rem;
    padding: 2rem;
    border-right: 1px solid black;
`;

const MainLeftComponent = () => (
    <MainLeft>
        <MainLeftMenu/>
    </MainLeft>
);

export default MainLeftComponent;