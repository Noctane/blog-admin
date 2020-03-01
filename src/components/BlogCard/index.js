import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';
// Components
import H2 from '../H2';
import Button from '../Button';


function BlogCard({ blog, handleAction }) {

  const { url } = useRouteMatch();

  return (
    <div className="p-4 border border-gray-200 bg-white rounded-md">
      <div className="mb-4">
        <H2>{blog.name}</H2>
        <em className="text-gray-600">{`${blog.articles.length} articles`}</em>
      </div>
      <div className="flex justify-between">
        <Button bgColor="blue" to={`${url}/${blog.id}`}>Gérer</Button>
        <Button bgColor="red" onButtonClick={() => handleAction(blog.id)}>Supprimer</Button>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAction: PropTypes.func.isRequired,
}

export default BlogCard;