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

import { initialState, reducer } from '../../ressources/blogStore';

function App() {

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
