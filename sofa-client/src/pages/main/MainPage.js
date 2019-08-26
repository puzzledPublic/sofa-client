import React from 'react';
import styled from 'styled-components';
import MainTemplate from '../../components/main/MainTemplate';

const MainPage = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
    height: 100%;
`;

const MainPageComponent = () => (
    <MainPage>
        <MainTemplate/>
    </MainPage>
);

export default MainPageComponent;
