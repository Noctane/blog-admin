import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BlogContext } from '../App/BlogContext.js';


function BlogDetails() {

  const blogs = useContext(BlogContext)

  const { blogId } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const getArticleList = setTimeout(() => {
      const blog = blogs.find(blog => {
        console.log('blog', typeof blogId, typeof blog.id);
        return blog.id.toString() === blogId
      });
      setBlog(blog);
    }, 1000);

    return () => clearTimeout(getArticleList);
  }, [setBlog, blogId, blogs])

  console.log('blogId', blogId, blog);
  if (Object.keys(blog).length === 0) {
    return (
      <p>blog pas trouvé</p>
    );
  }
  return (
    <>
      <h1>{blog.name}</h1>
      {blog.articles.length > 0 &&
        blog.articles.map(a => (
          <div key={a.id}>
            <h2>{a.title}</h2>
            <p>{a.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default BlogDetails;