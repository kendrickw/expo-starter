import gql from 'graphql-tag';

const QUERY_NETWORK_STATUS = gql`
  query NetworkStatus {
    networkStatus @client {
      isConnected
    }
  }
`;

const UPDATE_NETWORK_STATUS = gql`
  mutation UpdateNetworkStatus($isConnected: Boolean!) {
    updateNetworkStatus(isConnected: $isConnected) @client {
      isConnected
    }
  }
`;
