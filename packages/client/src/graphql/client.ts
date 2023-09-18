import { ApolloClient, InMemoryCache } from '@apollo/client'

const appolloClient = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
})

export default appolloClient
