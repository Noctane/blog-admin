import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStateValue } from '../App/BlogContext.js';
import H1 from '../../components/H1';
import H2 from '../../components/H2';


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
      <div className="container mx-auto">
        <p>Loading...</p>
      </div>
    );
  }

  if (Object.keys(blog).length && blog.articles.length === 0) {
    return (
      <p>Aucun article mais commencez à écrire !</p>
    )
  }
  return (
    <div className="container mx-auto">
      <div className="flex justify-between border-b-2 border-gray-200 items-center mb-4">
        <H1>{blog.name}</H1>
        <Link className="bg-blue-500 py-2 px-4 rounded-md text-white" to={`/blogs/${blog.id}/create`}>
          Ajouter un article
        </Link>
      </div>
      <div className="p-8 mx-auto w-2/3 bg-white border border-gray-200 rounded-md">
        {(blog !== null && blog.articles.length > 0) &&
          blog.articles.map(a => (
            <div key={a.id} className="mb-4">
              <H2>{a.title}</H2>
              <p>{a.content}</p>
              <Link className="text-blue-600" to={`/blogs/${blog.id}/edit/${a.id}`}>
                Modifier l'article
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default BlogDetails;