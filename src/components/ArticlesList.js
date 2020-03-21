import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => (
    <>
    {articles.map((articles, key) => (
        <Link className="article-list-item" key={key} to={`/article/${articles.name}`}>
            <h3>{articles.title}</h3>
            <p>{articles.content[0].substring(0,150)}...</p>
        </Link>
    ))}
    </>
);

export default ArticlesList;