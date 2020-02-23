import React, { useState, useEffect } from 'react';
import { useParams, useRouteMatch, Link } from 'react-router-dom';
import { useStateValue } from '../App/BlogContext.js';


function BlogDetails() {

  const [{ blogs }] = useStateValue();

  const { blogId } = useParams();
  const { url } = useRouteMatch();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const getArticleList = setTimeout(() => {
      const foundBlog = blogs.find(blog => blog.id.toString() === blogId);
      if (foundBlog === undefined) {
        console.log('oups');
      }
      setBlog(foundBlog);
    }, 1000);

    return () => clearTimeout(getArticleList);
  }, [setBlog, blogId, blogs])

  console.log('url', url);

  if (Object.keys(blog).length === 0) {
    return (
      <p>blog pas trouvé</p>
    );
  }

  if (blog.articles.length === 0) {
    return (
      <p>Aucun article mais commencé à écrire !</p>
    )
  }
  return (
    <>
      <h1>{blog.name}</h1>
      <Link to={`/blogs/${blog.id}/create`}>Ajouter un article</Link>
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