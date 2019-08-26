import React from 'react';
import styled from 'styled-components';

const ArticleListTemplate = styled.div`
    display: flex;
`;

const ArticleListTemplateComponent = ({children}) => (
    <ArticleListTemplate>
        {children}
    </ArticleListTemplate>
);

export default ArticleListTemplateComponent;