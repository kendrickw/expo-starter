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

interface Props {
  className?: string;
}

const User: React.FC<Props> = () => (
  <Layout style={styles.container}>
    <Text category="h1">ORDERS</Text>
  </Layout>
);

export default User;
