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
    <div>
      <h2>Top 5 News Stories from The New York Times</h2>
      {articles.map((article, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3>{article.title}</h3>
          <p>By: {article.byline}</p>
          <p>{article.abstract}</p>
          {article.media.length > 0 &&
            article.media[0]["media-metadata"].length > 0 && (
              <img
                src={article.media[0]["media-metadata"][2].url}
                alt="Article"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            )}
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsDisplay;
