import { createHttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { GRAPHQL_ENDPOINT } from 'config';

export const setupApollo = async () => {
  const httpLink = createHttpLink({ uri: GRAPHQL_ENDPOINT });

  const cache = new InMemoryCache();

  const client = new ApolloClient({
    cache,
    link: httpLink,
  });

  return client;
};

export default setupApollo;
