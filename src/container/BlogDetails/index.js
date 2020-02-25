import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStateValue } from '../App/BlogContext.js';


function BlogDetails() {

  const [{ blogs }] = useStateValue();

  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const foundBlog = blogs.find(blog => blog.id.toString() === blogId);
      if (foundBlog === undefined) {
        console.log('oups');
      }
      setBlog(foundBlog);
    }, 1000);
  }, [setBlog, blogId, blogs])

  if (blog === null) {
    return (
      <p>blog pas trouvé</p>
    );
  }

  if (Object.keys(blog).length && blog.articles.length === 0) {
    return (
      <p>Aucun article mais commencez à écrire !</p>
    )
  }
  return (
    <>
      <h1>{blog.name}</h1>
      <Link to={`/blogs/${blog.id}/create`}>Ajouter un article</Link>
      {(blog !== null && blog.articles.length > 0) &&
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