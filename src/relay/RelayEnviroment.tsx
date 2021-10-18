import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const fetchQuery = async (operation: any, variables: any) => {
  const response = await fetch(process.env.GRAPHQL_URI, {
    method: "POST",
    headers: {
      'content-type': 'application/json',
      'authorization': ""
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    }),
  })

  return response.json()
}

export default new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
})