import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { tag } = useParams();

  let title, content;

  switch (tag) {
    case 'one':
      title = "TEST BLOG ONE";
      content = "Welcome to blog one";
      break;
    default:
      title = "Unknown Blog";
      content = "This blog post does not exist.";
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default BlogPost;
