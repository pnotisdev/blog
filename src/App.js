import './App.css';
import React from 'react';
import Header from './components/Header';
import BlogList from './components/BlogList';

const App = () => {
  return (
    <div id="page">
      <div id="content">
        <Header />
        <BlogList />
      </div>
    </div>
  );
};

export default App;
