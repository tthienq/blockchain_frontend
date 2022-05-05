import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function AuthenticationRoute(route) {
  const { path, exact, routes, auth } = route
  return (
    <Route
      exact={exact}
      path={path}
      render={props => {
        let token = localStorage.getItem('token');
        if (auth && token) {
          return <route.component parentPath={path} {...props} routes={routes}/>;
        } else {
          return <Redirect to="/login" push={true} />;
        }
      }}
    />
  );
}