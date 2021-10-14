import JSResource from './JSResource'
//import { loadQuery } from 'react-relay/hooks';
//import RelayEnvironment from './RelayEnvironment';

const routes = [
  {
    component: JSResource('Root', () => import('./pages/Root')),
    routes: [
      {
        path: '/:user',
        exact: true,
        component: JSResource('Overview', () => import('./pages/Overview')),
      },
      {
        path: '/:user/stars',
        component: JSResource('Stars', () => import('./pages/Stars')),
      },
      {
        path: '/:user/followers',
        component: JSResource('Followers', () => import('./pages/Followers')),
      },
    ],
  },
]

export default routes
