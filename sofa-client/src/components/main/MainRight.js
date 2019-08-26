import React from 'react';
import styled from 'styled-components';
import ArticleListContainer from '../../containers/article/ArticleListContainer';
const MainRight = styled.div`
    flex: 1;
    padding: 2rem;
    background-color: coral;
`;

const MainRightComponent = () => (
    <MainRight>
        main right
        <ArticleListContainer/>
    </MainRight>
);

export default MainRightComponent;