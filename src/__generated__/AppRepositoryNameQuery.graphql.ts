/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime'

export type AppRepositoryNameQueryVariables = {}
export type AppRepositoryNameQueryResponse = {
  readonly repository: {
    readonly name: string
    readonly owner: {
      readonly id: string
    }
  } | null
}
export type AppRepositoryNameQuery = {
  readonly response: AppRepositoryNameQueryResponse
  readonly variables: AppRepositoryNameQueryVariables
}

/*
query AppRepositoryNameQuery {
  repository(owner: "facebook", name: "relay") {
    name
    owner {
      __typename
      id
    }
    id
  }
}
*/

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        kind: 'Literal',
        name: 'name',
        value: 'relay',
      },
      {
        kind: 'Literal',
        name: 'owner',
        value: 'facebook',
      },
    ],
    v1 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'name',
      storageKey: null,
    },
    v2 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'id',
      storageKey: null,
    }
  return {
    fragment: {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'AppRepositoryNameQuery',
      selections: [
        {
          alias: null,
          args: v0 /*: any*/,
          concreteType: 'Repository',
          kind: 'LinkedField',
          name: 'repository',
          plural: false,
          selections: [
            v1 /*: any*/,
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: 'LinkedField',
              name: 'owner',
              plural: false,
              selections: [v2 /*: any*/],
              storageKey: null,
            },
          ],
          storageKey: 'repository(name:"relay",owner:"facebook")',
        },
      ],
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: [],
      kind: 'Operation',
      name: 'AppRepositoryNameQuery',
      selections: [
        {
          alias: null,
          args: v0 /*: any*/,
          concreteType: 'Repository',
          kind: 'LinkedField',
          name: 'repository',
          plural: false,
          selections: [
            v1 /*: any*/,
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: 'LinkedField',
              name: 'owner',
              plural: false,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: '__typename',
                  storageKey: null,
                },
                v2 /*: any*/,
              ],
              storageKey: null,
            },
            v2 /*: any*/,
          ],
          storageKey: 'repository(name:"relay",owner:"facebook")',
        },
      ],
    },
    params: {
      cacheID: '04292195da8308abb5898b8e51160816',
      id: null,
      metadata: {},
      name: 'AppRepositoryNameQuery',
      operationKind: 'query',
      text: 'query AppRepositoryNameQuery {\n  repository(owner: "facebook", name: "relay") {\n    name\n    owner {\n      __typename\n      id\n    }\n    id\n  }\n}\n',
    },
  }
})()
;(node as any).hash = '10399ab77ea63ee7fcd31610015f1c49'
export default node
