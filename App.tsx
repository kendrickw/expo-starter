import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { ApolloProvider } from '@apollo/react-hooks';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import localStateDefaults from './graphql/local-state';
import resolvers from './graphql/resolvers';

import BottomTab from './components/bottom-tab';

const App: React.FC = () => {
  const cache = new InMemoryCache();

  const client = new ApolloClient({
    cache,
    // link: new HttpLink({ uri: 'http://localhost:3000/graphql' }),
    // @ts-ignore
    resolvers,
  });

  // Initialize local state
  cache.writeData({
    data: localStateDefaults,
  });

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <ApolloProvider client={client}>
          <BottomTab />
        </ApolloProvider>
      </ApplicationProvider>
    </>
  );
};

export default App;
