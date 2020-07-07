import { StyleSheet } from 'react-native';
import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { oc } from 'ts-optchain';

import * as GQL from '../../graphql/generated/client';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface Props {
  className?: string;
}

const HomeScreen: React.FC<Props> = () => {
  const { loading, error, data } = GQL.useNetworkStatusQuery();
  const [updateNetworkStatus] = GQL.useUpdateNetworkStatusMutation();

  if (loading) {
    return <Text>Loading ...</Text>;
  }

  const isConnected = oc(data).networkStatus.isConnected(false);

  return (
    <Layout style={styles.container}>
      <Text category="h1">HOME {isConnected ? 'true' : 'false'} </Text>
      <button
        onClick={() => {
          updateNetworkStatus({
            variables: { isConnected: !isConnected },
          });
        }}
      >
        Update
      </button>
    </Layout>
  );
};

export default HomeScreen;
