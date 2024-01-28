import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { tag } = useParams();
  const [blogPost, setBlogPost] = useState({ title: '', content: '' });

  useEffect(() => {
    fetch('/blogData.json')
      .then(response => response.json())
      .then(data => {
        const selectedPost = data.find(post => post.tag === tag) || { title: 'Unknown Blog', content: 'This blog post does not exist.' };
        setBlogPost(selectedPost);
      })
      .catch(error => console.error('Error fetching blog data:', error));
  }, [tag]);

  return (
    <div>
      <h2>{blogPost.title}</h2>
      <p>{blogPost.content}</p>
    </div>
  );
};

export default BlogPost;