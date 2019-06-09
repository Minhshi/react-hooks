import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NewsList() {
  const [news, setNews] = useState([]);

  useEffect(async () => {
    const response = await axios.get('http://hn.algolia.com/api/v1/search?query=react');
    setNews(response.data.hits);
  }, []);

  return (
    <div className="news-list">
      <div className="h4">News</div>
      <div>
        <ul>
          {news.map(nws => {
            return <li>{nws.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default NewsList;
