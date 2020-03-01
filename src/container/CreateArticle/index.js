import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useStateValue } from '../App/BlogContext.js';
// Components
import Input from '../../components/Input';
import Button from '../../components/Button';
import H1 from '../../components/H1';

function CreateArticle() {

  const history = useHistory();
  let match = useRouteMatch('/blogs/:blogId/edit');

  const { blogId, articleId } = useParams();
  const [{ blogs }, dispatch] = useStateValue();

  const [editableBlog, setEditableBlog] = useState({})

  const [isLoading, setIsLoading] = useState(false)
  const [blogValues, setBlogValues] = useState({
    title: '',
    content: '',
  });

  useEffect(() => {
    if (match.path.includes('edit')) {
      const foundBlog = blogs.find(blog => blog.id.toString() === blogId);
      const foundArticle = foundBlog.articles.find(a => a.id.toString() === articleId);
      setEditableBlog(foundArticle);
    }
  }, [articleId, blogId, blogs, match, setEditableBlog]);

  useEffect(() => {
    setBlogValues({
      title: editableBlog.title,
      content: editableBlog.content,
    })
  }, [editableBlog.content, editableBlog.title, setBlogValues])

  const onInputChange = (e) => {
    setBlogValues({
      ...blogValues,
      [e.target.name]: e.target.value,
    })
  }

  const onClickSubmitBtn = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (match && match.path.includes('edit')) {
      dispatch({
        type: 'editArticle',
        bId: parseInt(blogId, 10),
        aId: parseInt(articleId, 10),
        title: blogValues.title,
        content: blogValues.content,
      });
    } else {
      dispatch({
        type: 'addArticle',
        bId: parseInt(blogId, 10),
        newArticle: blogValues,
      });
    }
    setTimeout(() => {
      setIsLoading(false);
      history.push(`/blogs/${blogId}`)
    }, 1000)
  }

  return (
    <div className="container mx-auto">
      <div className="p-8 mx-auto w-2/3 text-center bg-white border border-gray-200 rounded-md">
        <H1>Rédigez votre article</H1>
        <form onSubmit={onClickSubmitBtn}>
          <label className="block mt-2" htmlFor="title">Titre</label>
          <Input value={blogValues.title || ''} type="text" onInputChange={onInputChange} placeholder="title" name="title" />
          <label className="block mt-2" htmlFor="content">Contenu</label>
          <textarea value={blogValues.content || ''} className="px-4 py-2 border border-gray-200 rounded-md" onChange={onInputChange} name="content" />
          <Button bgColor="blue" busy={isLoading} className="mx-auto mt-4" type="submit" onClick={onClickSubmitBtn}>Enregistrer</Button>
        </form>
      </div>
    </div>
  );
}

export default CreateArticle;