import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsDisplay = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=9BxgGpXmte9oLz5Mo9YGt6oFUMzHSmGO"
        );
        setArticles(response.data.results.slice(0, 5)); // Get top 5 articles
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  /* display the top 5 news stories from the last day, 
  including the title, author, description, image, and a link to the story 
  on the NYT website */
  return (
    <div className="news-display-container">
      {articles.map((article, index) => (
        <div key={index} className="news-article">
          <p>{article.title}</p>
          <h4>{article.byline}</h4>
          {article.media.length > 0 &&
            article.media[0]["media-metadata"].length > 0 && (
              <img
                src={article.media[0]["media-metadata"][2].url}
                alt="Article"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            )}
            <figcaption> {article.abstract} </figcaption>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsDisplay;
