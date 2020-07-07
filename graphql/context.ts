import { InMemoryCache } from 'apollo-cache-inmemory';

// Apollo Context
export interface Context {
  cache: InMemoryCache;
}
