import React from 'react';
import { useSelector } from 'react-redux';
import {
  Route, RouteProps, Redirect,
} from 'react-router-dom';
import { Store } from 'redux/store';

// import useAuth from 'hooks/useAuth';

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const loginPath = '/login';
  const { isAuth } = useSelector((state : Store) => state.auth);
  console.log('isAuth', isAuth);
  if (!children) return null;

  return (
    <Route
      {...rest}
      render={(innerProps: any) => (isAuth ? (
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
