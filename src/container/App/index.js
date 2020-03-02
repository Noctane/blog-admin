import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Auth from './AuthContext';
// Components
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
        <Navigation />
        <Switch>
          <PrivateRoute exact path="/blogs" component={BlogList} />
          <PrivateRoute exact path="/blogs/:blogId" component={BlogDetails}/>
          <PrivateRoute exact path="/blogs/:blogId/create" component={CreateArticle} />
          <PrivateRoute exact path="/blogs/:blogId/edit/:articleId" component={CreateArticle} />
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route path="*">
            <SignIn />
          </Route>
        </Switch>
      </Router>
    </Auth>
  );
}

export default App;
