import { StyleSheet } from 'react-native';
import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const LOOKUP = gql`
  {
    lookup {
      asset {
        fixed
        equity
        alternative
      }
    }
  }
`;

const HomeScreen = () => {
  const { loading, error, data } = useQuery(LOOKUP);

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) return <Text>Error :(</Text>;

  return (
    <Layout style={styles.container}>
      <Text category="h1">HOME</Text>
    </Layout>
  );
};

export default HomeScreen;
