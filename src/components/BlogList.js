
import React from 'react';
import BlogPost from './BlogPost';

const BlogList = () => {
  const blogPosts = [
    { id: 1, tag: "1", title: "TEST BLOG ONE" },
    { id: 2, tag: "2", title: "TEST BLOG TWO" },
    { id: 3, tag: "3", title: "TEST BLOG THREE" },
  ];

  return (
    <div id="list">
      <ul>
        {blogPosts.map(post => (
          <BlogPost key={post.id} tag={post.tag} title={post.title} />
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
