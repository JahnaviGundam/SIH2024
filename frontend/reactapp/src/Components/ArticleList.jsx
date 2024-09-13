import React, { useState } from 'react';
import ArticleDetails from './Articledetails';
import { getArticleByNumber } from '../api/api';

const ArticleList = () => {
    const [selectedArticleNumber, setSelectedArticleNumber] = useState('');
    const [articleData, setArticleData] = useState(null);

    // Handle article selection
    const handleSelectArticle = async (event) => {
        const articleNumber = event.target.value;
        setSelectedArticleNumber(articleNumber);
        try {
            const data = await getArticleByNumber(articleNumber);
            setArticleData(data);
        } catch (error) {
            console.error("Error fetching article:", error);
        }
    };

    return (
        <div className="article-list">
            <h1>Select an Article Number</h1>
            <select onChange={handleSelectArticle} value={selectedArticleNumber}>
                <option value="" disabled>Select Article</option>
                <option value="52">Article 52 - President of India</option>
                <option value="74">Article 74 - Council of Ministers</option>
                <option value="79">Article 79 - Parliament</option>
                {/* Add more articles */}
            </select>

            {/* Show article details once an article is selected */}
            {articleData && <ArticleDetails article={articleData} />}
        </div>
    );
};

export default ArticleList;
