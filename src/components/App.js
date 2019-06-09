import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import NewsList from './NewsList';
import NewsShow from './NewsShow';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={NewsList} />
        <Route exact path="/:id" component={NewsShow} />
      </BrowserRouter>
    </div>
  );
}

export default App;
