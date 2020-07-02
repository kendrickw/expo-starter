import { StyleSheet } from 'react-native';
import React from 'react';
import { Layout, Text } from '@ui-kitten/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeScreen = () => (
  <Layout style={styles.container}>
    <Text category="h1">HOME</Text>
  </Layout>
);

export default HomeScreen;
