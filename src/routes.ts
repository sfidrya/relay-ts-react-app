import { loadQuery } from 'react-relay'
import JSResource from './JSResource'
import RelayEnvironment from './RelayEnvironment'
//import { loadQuery } from 'react-relay/hooks';
//import RelayEnvironment from './RelayEnvironment';

const routes = [
  {
    prepare: () => {
      const RootQuery = require('./__generated__/AppRepositoryNameQuery.graphql')
      return {
        rootQuery: loadQuery(
          RelayEnvironment,
          RootQuery,
          {
            owner: 'facebook',
            name: 'relay',
          },
          // The fetchPolicy allows us to specify whether to render from cached
          // data if possible (store-or-network) or only fetch from network
          // (network-only).
          { fetchPolicy: 'store-or-network' }
        ),
      }
    },
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
