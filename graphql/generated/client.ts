import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateNetworkStatus?: Maybe<NetworkStatus>;
};


export type MutationUpdateNetworkStatusArgs = {
  isConnected: Scalars['Boolean'];
};

export type NetworkStatus = {
  __typename?: 'NetworkStatus';
  isConnected?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  networkStatus?: Maybe<NetworkStatus>;
};

export type NetworkStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type NetworkStatusQuery = (
  { __typename?: 'Query' }
  & { networkStatus?: Maybe<(
    { __typename?: 'NetworkStatus' }
    & Pick<NetworkStatus, 'isConnected'>
  )> }
);

export type UpdateNetworkStatusMutationVariables = Exact<{
  isConnected: Scalars['Boolean'];
}>;


export type UpdateNetworkStatusMutation = (
  { __typename?: 'Mutation' }
  & { updateNetworkStatus?: Maybe<(
    { __typename?: 'NetworkStatus' }
    & Pick<NetworkStatus, 'isConnected'>
  )> }
);


export const NetworkStatusDocument = gql`
    query NetworkStatus {
  networkStatus @client {
    isConnected
  }
}
    `;

/**
 * __useNetworkStatusQuery__
 *
 * To run a query within a React component, call `useNetworkStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useNetworkStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNetworkStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useNetworkStatusQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<NetworkStatusQuery, NetworkStatusQueryVariables>) {
        return ApolloReactHooks.useQuery<NetworkStatusQuery, NetworkStatusQueryVariables>(NetworkStatusDocument, baseOptions);
      }
export function useNetworkStatusLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NetworkStatusQuery, NetworkStatusQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<NetworkStatusQuery, NetworkStatusQueryVariables>(NetworkStatusDocument, baseOptions);
        }
export type NetworkStatusQueryHookResult = ReturnType<typeof useNetworkStatusQuery>;
export type NetworkStatusLazyQueryHookResult = ReturnType<typeof useNetworkStatusLazyQuery>;
export type NetworkStatusQueryResult = ApolloReactCommon.QueryResult<NetworkStatusQuery, NetworkStatusQueryVariables>;
export const UpdateNetworkStatusDocument = gql`
    mutation UpdateNetworkStatus($isConnected: Boolean!) {
  updateNetworkStatus(isConnected: $isConnected) @client {
    isConnected
  }
}
    `;

/**
 * __useUpdateNetworkStatusMutation__
 *
 * To run a mutation, you first call `useUpdateNetworkStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNetworkStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNetworkStatusMutation, { data, loading, error }] = useUpdateNetworkStatusMutation({
 *   variables: {
 *      isConnected: // value for 'isConnected'
 *   },
 * });
 */
export function useUpdateNetworkStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateNetworkStatusMutation, UpdateNetworkStatusMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateNetworkStatusMutation, UpdateNetworkStatusMutationVariables>(UpdateNetworkStatusDocument, baseOptions);
      }
export type UpdateNetworkStatusMutationHookResult = ReturnType<typeof useUpdateNetworkStatusMutation>;
export type UpdateNetworkStatusMutationResult = ApolloReactCommon.MutationResult<UpdateNetworkStatusMutation>;
export type UpdateNetworkStatusMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateNetworkStatusMutation, UpdateNetworkStatusMutationVariables>;