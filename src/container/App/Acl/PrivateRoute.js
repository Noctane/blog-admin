import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import { BlogsProvider } from '../BlogContext';

function PrivateRoute({ component: Component, ...rest }) {

  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Redirect to="/" />
  }
  return (
      <Route path={rest.path} render={props => (
        <BlogsProvider>
          <Component {...props} />
        </BlogsProvider>
        )}
      />
  )
}

export default PrivateRoute;