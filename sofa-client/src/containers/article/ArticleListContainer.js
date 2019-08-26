import React, {useState} from 'react';
import ArticleListTemplate from '../../components/article/ArticleListTemplate';
import ArticleList from '../../components/article/ArticleList';

const ArticleListContainer = () => {
    const [articleList, setArticleList] = useState([{title: '제목1', content: '내용1'}, {title: '제목2', content: '내용2'}]);
    
    return (
        <ArticleListTemplate>
            <ArticleList articleList={articleList}/>
        </ArticleListTemplate>
    );
};

export default ArticleListContainer;