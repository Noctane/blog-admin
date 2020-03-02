import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import H2 from '../H2';
import Button from '../Button';

function Article({ article, handleAction, blog }) {

  return (
    <div key={article.id} className="mb-4">
      <H2>{article.title}</H2>
      <p>{article.content}</p>
      <Button className="mr-2" onButtonClick={() => handleAction(article.id)} bgColor="blue">effacer</Button>
      <Link className="text-blue-600" to={`/blogs/${blog.id}/edit/${article.id}`}>
        Modifier l'article
      </Link>
    </div>
  )
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  blog: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  handleAction: PropTypes.func.isRequired,
}

export default Article