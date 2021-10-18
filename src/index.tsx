import React from 'react'
import ReactDOM from 'react-dom'
import { RelayEnvironmentProvider } from 'react-relay/hooks'
import './index.css'
import RelayEnvironment from './RelayEnvironment'
import routes from './routes'
import RoutingContext from './routing/RoutingContext'
import createRouter from './routing/createRouter'
import RouterRenderer from './routing/RouteRenderer'
import { UnregisterCallback } from 'history'

//  export interface Router {
//   cleanup(): UnregisterCallback,
//   context: {
//     history: History;
//     get(): {
//         location: Location;
//         entries: any;
//     };
//     preloadCode(pathname: string): void;
//     preload(pathname: string): void;
//     subscribe(cb: any): () => void;
//   }
// }

// Uses the custom router setup to define a router instanace that we can pass through context
const router = createRouter(routes)
const container = document.getElementById('root')

ReactDOM.render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <RoutingContext.Provider value={router.context}>
      {/* Render the active route */}
      <RouterRenderer />
    </RoutingContext.Provider>
  </RelayEnvironmentProvider>,
  container
)
