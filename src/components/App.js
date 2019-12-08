import React from 'react';
import PostList from './PostList';
import Pagination from './Pagination';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="App-container">
        <h1 className="App-title">MAQE Forums</h1>
        <h2 className="App-subtitle">Subtitle</h2>
        <p className="App-title-post">Posts</p>
        <PostList />
        <Pagination />
      </div>
    </div>
  );
};

export default App;
