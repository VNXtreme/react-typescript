import React from 'react';
import {
  Route, RouteProps, Redirect,
} from 'react-router-dom';
import useAuth from 'hooks/useAuth';

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const loginPath = '/login';
  const { isAuthenticated } = useAuth();

  if (!children) return null;

  return (
    <Route
      {...rest}
      render={(innerProps: any) => (isAuthenticated ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: loginPath,
            state: { from: innerProps.location },
          }}
        />
      ))}
    />
  );
};

export default PrivateRoute;
