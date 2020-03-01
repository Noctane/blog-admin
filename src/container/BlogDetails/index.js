import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStateValue } from '../App/BlogContext.js';
// Components
import H1 from '../../components/H1';
import H2 from '../../components/H2';
import Button from '../../components/Button';
import Input from '../../components/Input';

function BlogDetails() {

  const [{ blogs }, dispatch] = useStateValue();

  const { blogId } = useParams();

  const [isLoading, setIsLoading] = useState(false)
  const [editMode, setEditMode] = useState(false);
  const [newBlogName, setNewBlogName] = useState('');
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

  const onSaveChanges = () => {
    setIsLoading(true);
    dispatch({
      type: 'editBlog',
      id: parseInt(blogId, 10),
      blogName: newBlogName,
    });
    setTimeout(() => {
      setIsLoading(false);
      setEditMode(false);
    }, 1000)
  }


  const onToggleEdit = () => {
    setEditMode(editMode => !editMode)
  }

  const onInputChange = (e) => {
    setNewBlogName(e.target.value);
  }

  if (blog === null) {
    return (
      <div className="container mx-auto">
        <p>Loading...</p>
      </div>
    );
  }

  if (Object.keys(blog).length && blog.articles.length === 0) {
    return (
      <div className="container mx-auto">
        <div className="p-8 mx-auto w-2/3 bg-white border border-gray-200 rounded-md">
          <p>Aucun article mais commencez à écrire !</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-between border-b-2 border-gray-200 items-center mb-4">
        <H1>{blog.name}</H1>
        {editMode &&
          <div className="flex items-end">
            <div className="flex flex-col items-center mb-2">
              <label htmlFor="newBlogName">Saisissez un nouveau nom</label>
              <Input onInputChange={onInputChange} value={newBlogName} name="newBlogName" type="text" />
            </div>
            <Button
              className="mb-2 ml-2"
              busy={isLoading}
              disabled={newBlogName === '' || newBlogName === undefined}
              onButtonClick={onSaveChanges}
              bgColor="green">
                Ok
            </Button>
          </div>
        }
        <div className="flex">
          <Button className="mr-2" onButtonClick={onToggleEdit} bgColor="blue">{editMode ? 'Annuler' : 'Modifier'}</Button>
          <Link className="bg-blue-500 py-2 px-4 rounded-md text-white" to={`/blogs/${blog.id}/create`}>
            Ajouter un article
          </Link>
        </div>
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