import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Auth from './AuthContext';
import PrivateRoute from './Acl/PrivateRoute';
import SignIn from '../SignIn';
import BlogList from '../BlogList';
import BlogDetails from '../BlogDetails';
import CreateArticle from '../CreateArticle';
import Navigation from '../../components/Navigation';

function App() {
  console.log('localStorage.getItem', localStorage);
  return (
    <Auth>
      <Router>
        <div>
          <Navigation />
          <Switch>
            <PrivateRoute exact path="/blogs" component={BlogList} />
            <PrivateRoute exact path="/blogs/:blogId" component={BlogDetails}/>
            <PrivateRoute exact path="/blogs/:blogId/create" component={CreateArticle} />
            <PrivateRoute exact path="/blogs/:blogId/edit/:articleId" component={CreateArticle} />
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
