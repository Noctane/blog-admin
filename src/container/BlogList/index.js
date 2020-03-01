import React, { useState, useEffect } from 'react';
import { useStateValue } from '../App/BlogContext.js';

import BlogCard from '../../components/BlogCard';
import H1 from '../../components/H1';
import H2 from '../../components/H2';
import Input from '../../components/Input';
import Button from '../../components/Button';

function BlogList() {
  // Get blog store values and actions
  const [{ blogs }, dispatch] = useStateValue();

  // Hook to set the blog list state to the component
  const [list, setList] = useState([]);

  // Manage the state of the input value,
  // can be done with a ref added to the input though
  const [newBlogName, setNewBlogName] = useState({})

  useEffect(() => {
    setTimeout(() => {
      setList(blogs)
    }, 1000);
  }, [blogs, setList])

  const onInputChange = (e) => {
    setNewBlogName(e.target.value)
  }

  const onClickSubmitBtn = (e) => {
    e.preventDefault();
    dispatch({
      type: 'addBlog',
      newBlogName: newBlogName,
    })
  }

  const onClickDelete = (id) => {
    dispatch({
      type: 'deleteBlog',
      id,
    })
  }

  return (
    <div className="container mx-auto">
      <section className="mb-6">
        <H1>Mes blogs</H1>
        <div className="grid gap-2 grid-cols-3">
          {list.length > 0 &&
            list.map(blog => (
              <BlogCard blog={blog} key={blog.id} handleAction={onClickDelete} />
              ))
            }
        </div>
      </section>
      <section>
        <H2>Ajouter un blog</H2>
        <div className="p-4 text-center bg-white border border-gray-200 rounded-md">
          <form>
            <div className="flex">
              <Input type="text" onInputChange={onInputChange} placeholder="Titre du blog" className="mr-2" />
              <Button type="submit" bgColor="blue" onButtonClick={onClickSubmitBtn}>submit</Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default BlogList;