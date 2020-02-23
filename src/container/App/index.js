import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { BlogsProvider } from './BlogContext';

import SignIn from '../SignIn';
import BlogList from '../BlogList';
import BlogDetails from '../BlogDetails';
import CreateArticle from '../CreateArticle';

import DATA from '../../ressources/blogs.json';

function App() {

  const initialState = {
    count: 3,
    blogs: DATA,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'addBlog': {
        const newCount = state.count + 1;
        const newBlog = {
          id: newCount,
          name: action.newBlogName,
          articles: []
        }
        return {
          count: newCount,
          blogs: [...state.blogs, newBlog]
        };
      }
      case 'editBlog': {
        const blogId = state.blogs.findIndex(b => b.id === action.id);
        const blog = Object.assign({}, state.blogs[blogId]);
        blog.name = action.blogName;
        const blogs = Object.assign([], state.blogs);
        blogs.splice(blogId, 1, blog);
        return {
          count: state.count,
          blogs
        };
      }
      case 'deleteBlog': {
        const blogId = state.blogs.findIndex(b => b.id === action.id);
        const blogs = Object.assign([], state.blogs);
        blogs.splice(blogId, 1);
        return {
          count: state.count,
          blogs: blogs,
        };
      }
      default:
        return state;
    }
  };

  return (
    <BlogsProvider initialState={initialState} reducer={reducer}>
      <Router>
        <div>
          <nav className="border-b border-gray-200 p-4 mb-6">
            <ul className="flex">
              <li className="p-2">
                <Link to="/">Home</Link>
              </li>
              <li className="p-2">
                <Link to="/blogs">Blogs</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/blogs">
              <BlogList />
            </Route>
            <Route exact path="/blogs/:blogId">
              <BlogDetails />
            </Route>
            <Route path="/blogs/:blogId/create">
              <CreateArticle />
            </Route>
            <Route path="/">
              <SignIn />
            </Route>
            <Route path="*">
              <SignIn />
            </Route>
          </Switch>
        </div>
      </Router>
    </BlogsProvider>
  );
}

export default App;
