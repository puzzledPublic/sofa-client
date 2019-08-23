import React from 'react';
import styled from 'styled-components';
import MainLeftMenu from './MainLeftMenu';

const MainLeft = styled.div`
    width: 18rem;
    background-color: green;
    padding: 1rem;
`;

const MainLeftComponent = () => (
    <MainLeft>
        <MainLeftMenu/>
    </MainLeft>
);

export default MainLeftComponent;