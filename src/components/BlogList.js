
import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const blogPosts = [
    { id: 1, tag: "one", title: "TEST BLOG ONE" },
    { id: 2, tag: "two", title: "TEST BLOG TWO" },
    { id: 3, tag: "three", title: "TEST BLOG THREE" },
  ];

  return (
    <div id="list">
      <ul>
        {blogPosts.map(post => (
          <li key={post.id}>
            <Link to={`/${post.tag.toLowerCase()}`}>
              <span className="tag">[{post.tag}]</span>
              <span>{post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
