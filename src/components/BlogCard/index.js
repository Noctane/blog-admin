import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

function BlogCard({ blog, handleAction }) {

  const { url } = useRouteMatch();

  return (
    <div className="p-4 border border-gray-200 rounded-md">
      <div className="mb-4">
        <h2 className="text-lg font-medium">{blog.name}</h2>
        <em className="text-gray-600">{`${blog.articles.length} articles`}</em>
      </div>
      <div className="flex justify-between">
        <Link className="bg-blue-500 py-2 px-4 rounded-md text-white" to={`${url}/${blog.id}`}>Gérer</Link>
        <button className="bg-red-500 py-2 px-4 rounded-md text-white" onClick={() => handleAction(blog.id)}>delete</button>
      </div>
    </div>
  );
}

export default BlogCard;