import React from 'react';
import { Link } from 'react-router-dom';
import H2 from '../H2';
import Button from '../Button';

function Article(props) {
  console.log('je rends');
  return (
    <div key={props.article.id} className="mb-4">
      <H2>{props.article.title}</H2>
      <p>{props.article.content}</p>
      <Button className="mr-2" onButtonClick={() => props.handleAction(props.article.id)} bgColor="blue">effacer</Button>
      <Link className="text-blue-600" to={`/blogs/${props.blog.id}/edit/${props.article.id}`}>
        Modifier l'article
      </Link>
    </div>
  )
}

export default Article