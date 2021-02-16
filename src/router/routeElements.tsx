import PrivateRoute from 'router/PrivateRoute';
import React from 'react';
import { Route } from 'react-router-dom';
import MenuAppBar from 'components/organismos/MenuAppBar';
import routes from './routes';

const routeElements = () => routes.map(({ isPrivate, LoadComponent, ...rest }, i) => {
  if (isPrivate) {
    return (
      <PrivateRoute key={rest.path} {...rest}>
        <MenuAppBar />
        <LoadComponent />
      </PrivateRoute>
    );
  }

  return (
    <Route key={rest.path} {...rest}>
      <LoadComponent />
    </Route>
  );
});

export default routeElements;
