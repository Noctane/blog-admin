import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

function BlogCard({ blog, handleAction }) {

  const { url } = useRouteMatch();

  return (
    <div className="p-4 border border-gray-200">
      <h2>{blog.name}</h2>
      <Link to={`${url}/${blog.id}`}>Voir le détail</Link>
      <button onClick={() => handleAction(blog.id)}>delete</button>
    </div>
  );
}

export default BlogCard;