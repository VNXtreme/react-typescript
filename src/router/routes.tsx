import React, { lazy } from 'react';

type Routes = {
  LoadComponent: React.ComponentType,
  exact: boolean,
  path: string,
  isPrivate?: boolean,
  subRoutes?: Routes[]
}

const routes: Routes[] = [
  {
    path: '/',
    LoadComponent: lazy(() => import('components/pages/dashboard')),
    isPrivate: true,
    exact: true,
  },
  {
    path: '/login',
    LoadComponent: lazy(() => import('components/pages/login')),
    exact: true,
  },
];

export default routes;
