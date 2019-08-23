import React from 'react';
import styled from 'styled-components';
import MainLeft from './MainLeft';
import MainRight from './MainRight';

const MainTemplate = styled.div`
    display: flex;
    height: 100%;
`;

const MainTemplateComponent = () => (
    <MainTemplate>
        <MainLeft/>
        <MainRight/>
    </MainTemplate>
);

export default MainTemplateComponent;