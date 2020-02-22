import React, { useState, useEffect, useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { BlogContext } from '../App/BlogContext.js';

function BlogList() {

  const blogs = useContext(BlogContext)

  const { url } = useRouteMatch();
  const [list, setList] = useState([]);

  useEffect(() => {
    const getBlogList = setTimeout(() => {
      setList(blogs)
    }, 1000);

    return () => clearTimeout(getBlogList);

  }, [blogs, setList])

  return (
    <>
      <h1>BlogList</h1>

      {list.length > 0 &&
        list.map(blog => (
          <div key={blog.id}>
            <h2>{blog.name}</h2>
            <Link to={`${url}/${blog.id}`}>Voir le détail</Link>
          </div>
        ))
      }
    </>
  )
}

export default BlogList;