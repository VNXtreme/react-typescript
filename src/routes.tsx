import { lazy } from 'react';

type Routes = {
  LoadComponent: React.ComponentType,
  exact: boolean,
  path: string,
  isPrivate?: boolean,
  subRoutes?: Routes[]
}
const routes: Routes[] = [
  {
    LoadComponent: lazy(() => import('components/pages/dashboard')),
    exact: true,
    path: '/',
    isPrivate: true,
  },
  {
    LoadComponent: lazy(() => import('components/pages/login')),
    exact: true,
    path: '/login',
  },
];
export default routes;
