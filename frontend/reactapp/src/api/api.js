// Fetch articles from the local JSON file
export const getArticleByNumber = async (articleNumber) => {
    try {
        const response = await fetch('/articles.json'); // Fetch local JSON file
        const data = await response.json();

        // Find the article that matches the selected article number
        const article = data.find(item => item.article_number === articleNumber);

        if (!article) {
            throw new Error("Article not found");
        }

        return article;
    } catch (error) {
        console.error("Error fetching article:", error);
        throw error;
    }
};
