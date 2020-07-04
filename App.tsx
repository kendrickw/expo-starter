import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import HomeScreen from './components/home-screen';

export default () => {
  // const client = new ApolloClient({
  //   uri: 'http://localhost:3000/graphql',
  // });

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      {/* <ApolloProvider client={client}> */}
      <HomeScreen />
      {/* </ApolloProvider> */}
    </ApplicationProvider>
  );
};
