import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
// Components
import H2 from '../H2';


function BlogCard({ blog, handleAction }) {

  const { url } = useRouteMatch();

  return (
    <div className="p-4 border border-gray-200 rounded-md">
      <div className="mb-4">
        <H2>{blog.name}</H2>
        <em className="text-gray-600">{`${blog.articles.length} articles`}</em>
      </div>
      <div className="flex justify-between">
        <Link className="bg-blue-500 py-2 px-4 rounded-md text-white" to={`${url}/${blog.id}`}>Gérer</Link>
        <button className="bg-red-500 py-2 px-4 rounded-md text-white" onClick={() => handleAction(blog.id)}>delete</button>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAction: PropTypes.func.isRequired,
}

export default BlogCard;