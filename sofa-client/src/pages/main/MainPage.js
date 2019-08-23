import React from 'react';
import styled from 'styled-components';
import HeaderContainer from '../../containers/header/HeaderContainer';
import MainTemplate from '../../components/main/MainTemplate';

const MainPage = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
    height: 100%;
`;

const MainPageComponent = () => (
    <MainPage>
        <HeaderContainer/>
        <MainTemplate/>
    </MainPage>
);

export default MainPageComponent;
