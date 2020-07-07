import { Resolvers, NetworkStatus } from '../generated/server';
import { Context } from '../context';

const defaults: NetworkStatus = {
  __typename: 'NetworkStatus',
  isConnected: true,
};

export default defaults;

export const mutation: Resolvers<Context>['Mutation'] = {
  updateNetworkStatus: (_, { isConnected }, { cache }) => {
    const data = {
      networkStatus: {
        __typename: defaults.__typename,
        isConnected,
      },
    };

    cache.writeData({ data });
    return data.networkStatus;
  },
};
