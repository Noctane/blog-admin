import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStateValue } from '../App/BlogContext.js';
import Input from '../../components/Input';

function CreateArticle() {

  const { blogId } = useParams();
  const [blogs, dispatch] = useStateValue();

  const [blogValues, setBlogValues] = useState({
    id: null,
    title: '',
    content: '',
  });

  const onInputChange = (e) => {
    setBlogValues({
      ...blogValues,
      [e.target.name]: e.target.value,
    })
  }

  const onClickSubmitBtn = (e) => {
    e.preventDefault();
    setBlogValues({ ...blogValues })
    dispatch({
      type: 'addArticle',
      bId: parseInt(blogId, 10),
      newArticle: blogValues,
    })
  }

  return (
    <div className="container mx-auto">
      <h1>Ici on créé des articles</h1>
      <form>
        <Input type="text" onInputChange={onInputChange} placeholder="title" name="title" />
        <textarea onChange={onInputChange} name="content" />
        <button type="submit" onClick={onClickSubmitBtn}>submit</button>
        </form>
    </div>
  );
}

export default CreateArticle;