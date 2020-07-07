import { Resolvers } from '../generated/server';

import { Context } from '../context';
import * as networkStatus from './network-status';

const resolvers: Resolvers<Context> = {
  Query: {},
  Mutation: {
    ...networkStatus.mutation,
  },
};

export default resolvers;
