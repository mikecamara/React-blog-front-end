import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';
import NotFound from './NotFound';
import articleContent from './article-content';

const ArticlesPage = ({ match }) => {
    const name = match.params.name;
    const articles = articleContent.find(articles => articles.name === name);
    
    const [articleInfo, setArticleInfo] = useState({upvotes: 0, comments: []});

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            console.log(body);
            setArticleInfo(body);
        }
        fetchData();
    }, [name])

    if (!articles) return <NotFound/>

    const otherArticles = articleContent.filter(articles => articles.name !== name);

    return (
        <>
            <h1>{articles.title}</h1>
            <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
            {articles.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <CommentsList comments={articleInfo.comments} />
            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
            <h3>Other Articles:</h3>
            <ArticlesList articles={otherArticles} />
        </>
        
    );
} 

export default ArticlesPage;