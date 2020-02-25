import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import { BlogsProvider } from '../BlogContext';

import { initialState, reducer } from '../../../ressources/blogStore';

function PrivateRoute({ component: Component, ...rest }) {

  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Redirect to="/" />
  }
  return (
      <Route path={rest.to} render={props => (
        <BlogsProvider initialState={initialState} reducer={reducer}>
          <Component {...props} />
        </BlogsProvider>
        )}
      />
  )
}

export default PrivateRoute;