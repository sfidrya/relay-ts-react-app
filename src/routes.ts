import { Module } from 'history'
import { loadQuery } from 'react-relay'
import JSResource from './JSResource'
import RelayEnvironment from './RelayEnvironment'
//import { loadQuery } from 'react-relay/hooks';
//import RelayEnvironment from './RelayEnvironment';

const routes = [
  {
    component: JSResource('Root', () => import('./components/Root')),
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
    routes: [
      // {
      //   path: '/',
      //   exact: true,
      //   component: JSResource('Overview', () => import('./pages/Overview')),
      //   prepare: () => {
      //     const RootQuery = require('./__generated__/AppRepositoryNameQuery.graphql')
      //     return {
      //       rootQuery: loadQuery(
      //         RelayEnvironment,
      //         RootQuery,
      //         {
      //           owner: 'facebook',
      //           name: 'relay',
      //         },
      //         // The fetchPolicy allows us to specify whether to render from cached
      //         // data if possible (store-or-network) or only fetch from network
      //         // (network-only).
      //         { fetchPolicy: 'store-or-network' }
      //       ),
      //     }
      //   },
      // },
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
        path: '/:user',
        exact: true,
        component: JSResource(
          'Overview',
          () => import('./components/Overview')
        ),
      },
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
        path: '/:user/stars',
        component: JSResource('Stars', () => import('./components/Stars')),
      },
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
        path: '/:user/followers',
        component: JSResource(
          'Followers',
          () => import('./components/Followers')
        ),
      },
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
        path: '/:user/achievements',
        exact: true,
        component: JSResource(
          'Achievements',
          () => import('./components/Achievements')
        ),
      },
    ],
  },
]

export default routes
