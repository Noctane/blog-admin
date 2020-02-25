import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Auth from './AuthContext';
import PrivateRoute from './Acl/PrivateRoute';
import SignIn from '../SignIn';
import BlogList from '../BlogList';
import BlogDetails from '../BlogDetails';
import CreateArticle from '../CreateArticle';
import Navigation from '../../components/Navigation';

function App() {

  return (
    <Auth>
      <Router>
        <div>
          <Navigation />
          <Switch>
            <PrivateRoute exact path="/blogs" component={BlogList} />
            <PrivateRoute exact path="/blogs/:blogId" component={BlogDetails}/>
            <PrivateRoute path="/blogs/:blogId/create" component={CreateArticle} />
            <Route path="/">
              <SignIn />
            </Route>
            <Route path="*">
              <SignIn />
            </Route>
          </Switch>
        </div>
      </Router>
    </Auth>
  );
}

export default App;
