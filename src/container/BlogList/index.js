import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useStateValue } from '../App/BlogContext.js';

import BlogCard from '../../components/BlogCard'

function BlogList() {

  const [{ blogs }, dispatch] = useStateValue();

  const { url } = useRouteMatch();
  const [list, setList] = useState([]);
  const [newBlogName, setNewBlogName] = useState({})

  useEffect(() => {
    const getBlogList = setTimeout(() => {
      setList(blogs)
    }, 1000);

    return () => clearTimeout(getBlogList);

  }, [blogs, setList])
console.log('blogs', url);

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

  console.log('newBlog', newBlogName);

  return (
    <div className="container mx-auto">
      <section className="mb-6">
        <h1 className="text-2xl font-semibold mb-4">Mes blogs</h1>
        <div className="grid gap-2 grid-cols-3">
          {list.length > 0 &&
            list.map(blog => (
              <BlogCard blog={blog} key={blog.id} handleAction={onClickDelete} />
              ))
            }
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-4">Ajouter un blog</h2>
        <form>
          <input className="p-4 border border-gray-200 rounded-md" type="text" onChange={onInputChange} placeholder="title" />
          <button type="submit" onClick={onClickSubmitBtn}>submit</button>
        </form>
      </section>
    </div>
  )
}

export default BlogList;