import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { BlogContext } from './BlogContext';

import SignIn from '../SignIn';
import BlogList from '../BlogList';
import BlogDetails from '../BlogDetails';
import CreateArticle from '../CreateArticle';

import DATA from '../../ressources/blogs.json';

const blogs = DATA;

function App() {
  return (
    <BlogContext.Provider value={blogs}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/blogs">
              <BlogList />
            </Route>
            <Route path="/blogs/:blogId">
              <BlogDetails />
            </Route>
            <Route path="/blogs/:blogId/create">
              <CreateArticle />
            </Route>
            <Route path="/">
              <SignIn />
            </Route>
          </Switch>
        </div>
      </Router>
    </BlogContext.Provider>
  );
}

export default App;
