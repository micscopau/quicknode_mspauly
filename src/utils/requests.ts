
// TODO QN2: Add type defining results from this query.
export function fetchTrending(): Promise<any> {

  //TODO QN1: Add .catch
  
  return fetch('https://graphql.icy.tools/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query TrendingCollections {
        trendingCollections(orderBy: SALES, orderDirection: DESC) {
          edges {
            node {
              address
              ... on ERC721Contract {
                name
                stats {
                  totalSales
                  average
                  ceiling
                  floor
                  volume
                }
                symbol
              }
            }
          }
        }
      }`
    }),
  })
    .then(res => res.json())
    .then(res => { return res.data; });

}