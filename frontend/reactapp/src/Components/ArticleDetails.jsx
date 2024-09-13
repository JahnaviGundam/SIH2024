import React from 'react';

const ArticleDetails = ({ article }) => {
    return (
        <div className="article-details">
            <h2>{article.title}</h2>
            <p><strong>Article Number:</strong> {article.article_number}</p>
            <p><strong>Chapter:</strong> {article.chapter}</p>
            <p><strong>Part:</strong> {article.part}</p>
            <p><strong>Text:</strong> {article.text}</p>
            <p><strong>Simplified Text:</strong> {article.simplified_text}</p>

            {/* Display related articles */}
            <h3>Related Articles</h3>
            <ul>
                {article.related_articles.map((relatedArticle, index) => (
                    <li key={index}>{relatedArticle.title} (Article {relatedArticle.article_number})</li>
                ))}
            </ul>

            {/* Display video if available */}
            {article.media && article.media.media_type === 'video' && (
                <div className="media-section">
                    <h3>Related Video</h3>
                    <video controls src={article.media.media_url} alt={article.media.description} />
                </div>
            )}
        </div>
    );
};

export default ArticleDetails;
