import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import NewsShow from './NewsShow';

function NewsList() {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');

  useEffect( () => {
    async function fetchNews() {
      const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${search}`);
      setNews(response.data.hits)
    };
    fetchNews();
  }, [search])

  return (
    <div className="news-list">
      <div className="h4">News</div>
      <form >
      <input
      type="text"
      value={query}
      onChange={event => setQuery(event.target.value)}
      />
      <button type="button" onClick={() => setSearch(query)}>Search</button>
      <button type="button" onClick={() => setQuery('')}>Clear</button>
      </form>
      <div>
        <ul>
          {news.map(nws => {
            return (
              <li key={nws.objectID}>
                <Link to={`/${nws.objectID}`}>{nws.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default NewsList;
