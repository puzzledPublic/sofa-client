import React from 'react';

const Article = ({title, content}) => (
    <div>
        <span>{title}</span>
        <span>{content}</span>
    </div>
);

export default Article;