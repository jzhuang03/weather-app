import React, { useState, useEffect } from "react";

const News = () => {
  const [topStories, setTopStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopNews = async () => {
      const apiKey = "4c4495c459e8a64d978b20683e070132";
      const url = ``;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setTopStories(data.results.slice(0, 5));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchTopNews();
  }, []);

  return (
    <div className="news-container">
      <h2 className="news-heading">Top News Stories</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="news-list">
          {topStories.map((story, index) => (
            <li className="news-item" key={index}>
              <h3 className="news-title">{story.title}</h3>
              <p className="news-author">By: {story.byline}</p>
              <p className="news-abstract">{story.abstract}</p>
              {story.multimedia && story.multimedia.length > 0 && (
                <img
                  className="news-image"
                  src={story.multimedia[0].url}
                  alt={story.title}
                />
              )}
              <a
                className="news-link"
                href={story.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read more"
              >
                Read more
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default News;
