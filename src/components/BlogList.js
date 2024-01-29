import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetch('/blogData.json')
      .then(response => response.json())
      .then(data => setBlogPosts(data))
      .catch(error => console.error('Error fetching blog data:', error));
  }, []);

  return (
    <div id="list">
      <ul>
        {blogPosts.map(post => (
          <li key={post.tag}>
            <Link to={`/${post.tag}`}>
              <span className="tag">[{post.tag}]</span>
              <span>{post.title}</span>
              <span className="creation-date">{post.creationDate}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;