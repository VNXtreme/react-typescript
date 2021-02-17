import React from 'react';
import { useSelector } from 'react-redux';
import {
  Route, RouteProps, Redirect,
} from 'react-router-dom';
import { Store } from 'redux/store';

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const loginPath = '/login';
  const { isAuth } = useSelector((state : Store) => state.auth);

  return (
    <Route
      {...rest}
      render={(innerProps) => (isAuth ? (
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
