import React from 'react';
import styled from 'styled-components';
import Article from './Article';

const ArticleList = styled.div`
`;

const ArticleListComponent = ({articleList}) => (
    <ArticleList>
        {articleList.map(({title, content}, i) => (
            <Article title={title} content={content} key={title + i} />
        ))}
    </ArticleList>
);

export default ArticleListComponent;