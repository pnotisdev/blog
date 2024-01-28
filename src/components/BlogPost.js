import React from 'react';

const BlogPost = ({ tag, title, content }) => {
  return (
    <li>
      <a href={`/${tag.toLowerCase()}`}>
        <span className="tag">[{tag}]</span>
        <span>{title}</span>
      </a>
    </li>
  );
};

export default BlogPost;
