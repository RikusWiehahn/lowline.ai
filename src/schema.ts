import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
};

export type ApiKey = {
  __typename?: 'ApiKey';
  created_at?: Maybe<Scalars['String']>;
  daily_usage?: Maybe<Array<DailyUsageRecord>>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  starts_with?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['ID']>;
};

export type BaseError = Error & {
  __typename?: 'BaseError';
  message?: Maybe<Scalars['String']>;
};

export type DailyUsageRecord = {
  __typename?: 'DailyUsageRecord';
  api_key_id?: Maybe<Scalars['ID']>;
  created_at?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  request_origins?: Maybe<Array<RequestOrigin>>;
};

export type Error = {
  message?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createApiKey?: Maybe<MutationCreateApiKeyResult>;
  createCheckoutSession?: Maybe<MutationCreateCheckoutSessionResult>;
  createStripePortalSession?: Maybe<MutationCreateStripePortalSessionResult>;
  deleteApiKey?: Maybe<MutationDeleteApiKeyResult>;
  helloMutation?: Maybe<Scalars['String']>;
  optionListSearch?: Maybe<MutationOptionListSearchResult>;
  requestNewPassword?: Maybe<MutationRequestNewPasswordResult>;
  seenNotifications?: Maybe<MutationSeenNotificationsResult>;
  signUpUser?: Maybe<MutationSignUpUserResult>;
  stringListSearch?: Maybe<MutationStringListSearchResult>;
  submitEnquiry?: Maybe<MutationSubmitEnquiryResult>;
  submitFeedback?: Maybe<MutationSubmitFeedbackResult>;
  updateUser?: Maybe<MutationUpdateUserResult>;
};


export type MutationCreateApiKeyArgs = {
  name: Scalars['String'];
  token?: InputMaybe<Scalars['String']>;
};


export type MutationCreateCheckoutSessionArgs = {
  token?: InputMaybe<Scalars['String']>;
};


export type MutationCreateStripePortalSessionArgs = {
  token?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteApiKeyArgs = {
  id: Scalars['String'];
  token?: InputMaybe<Scalars['String']>;
};


export type MutationHelloMutationArgs = {
  name: Scalars['String'];
};


export type MutationOptionListSearchArgs = {
  count?: InputMaybe<Scalars['Int']>;
  search_items: Array<OptionInput>;
  search_term: Scalars['String'];
};


export type MutationRequestNewPasswordArgs = {
  email: Scalars['String'];
};


export type MutationSeenNotificationsArgs = {
  ids: Array<Scalars['String']>;
  token: Scalars['String'];
};


export type MutationSignUpUserArgs = {
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  password: Scalars['String'];
};


export type MutationStringListSearchArgs = {
  count?: InputMaybe<Scalars['Int']>;
  search_items: Array<Scalars['String']>;
  search_term: Scalars['String'];
};


export type MutationSubmitEnquiryArgs = {
  email: Scalars['String'];
  message: Scalars['String'];
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
};


export type MutationSubmitFeedbackArgs = {
  emoji?: InputMaybe<Scalars['String']>;
  page: Scalars['String'];
  text: Scalars['String'];
  token: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  token: Scalars['String'];
};

export type MutationCreateApiKeyResult = BaseError | MutationCreateApiKeySuccess;

export type MutationCreateApiKeySuccess = {
  __typename?: 'MutationCreateApiKeySuccess';
  data: Scalars['String'];
};

export type MutationCreateCheckoutSessionResult = BaseError | MutationCreateCheckoutSessionSuccess;

export type MutationCreateCheckoutSessionSuccess = {
  __typename?: 'MutationCreateCheckoutSessionSuccess';
  data: Scalars['String'];
};

export type MutationCreateStripePortalSessionResult = BaseError | MutationCreateStripePortalSessionSuccess;

export type MutationCreateStripePortalSessionSuccess = {
  __typename?: 'MutationCreateStripePortalSessionSuccess';
  data: Scalars['String'];
};

export type MutationDeleteApiKeyResult = BaseError | MutationDeleteApiKeySuccess;

export type MutationDeleteApiKeySuccess = {
  __typename?: 'MutationDeleteApiKeySuccess';
  data: User;
};

export type MutationOptionListSearchResult = BaseError | MutationOptionListSearchSuccess;

export type MutationOptionListSearchSuccess = {
  __typename?: 'MutationOptionListSearchSuccess';
  data: Array<OptionOutput>;
};

export type MutationRequestNewPasswordResult = BaseError | MutationRequestNewPasswordSuccess;

export type MutationRequestNewPasswordSuccess = {
  __typename?: 'MutationRequestNewPasswordSuccess';
  data: Scalars['String'];
};

export type MutationSeenNotificationsResult = BaseError | MutationSeenNotificationsSuccess;

export type MutationSeenNotificationsSuccess = {
  __typename?: 'MutationSeenNotificationsSuccess';
  data: Array<Notification>;
};

export type MutationSignUpUserResult = BaseError | MutationSignUpUserSuccess;

export type MutationSignUpUserSuccess = {
  __typename?: 'MutationSignUpUserSuccess';
  data: Scalars['String'];
};

export type MutationStringListSearchResult = BaseError | MutationStringListSearchSuccess;

export type MutationStringListSearchSuccess = {
  __typename?: 'MutationStringListSearchSuccess';
  data: Array<Scalars['String']>;
};

export type MutationSubmitEnquiryResult = BaseError | MutationSubmitEnquirySuccess;

export type MutationSubmitEnquirySuccess = {
  __typename?: 'MutationSubmitEnquirySuccess';
  data: Scalars['String'];
};

export type MutationSubmitFeedbackResult = BaseError | MutationSubmitFeedbackSuccess;

export type MutationSubmitFeedbackSuccess = {
  __typename?: 'MutationSubmitFeedbackSuccess';
  data: Scalars['String'];
};

export type MutationUpdateUserResult = BaseError | MutationUpdateUserSuccess;

export type MutationUpdateUserSuccess = {
  __typename?: 'MutationUpdateUserSuccess';
  data: User;
};

export type Notification = {
  __typename?: 'Notification';
  created_at?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  seen?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  user_id?: Maybe<Scalars['ID']>;
};

export type OptionInput = {
  id: Scalars['String'];
  text: Scalars['String'];
};

export type OptionOutput = {
  __typename?: 'OptionOutput';
  id: Scalars['String'];
  text: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getAuthTokenWithPasswordResetToken?: Maybe<QueryGetAuthTokenWithPasswordResetTokenResult>;
  getNotifications?: Maybe<QueryGetNotificationsResult>;
  getUser?: Maybe<QueryGetUserResult>;
  helloQuery?: Maybe<Scalars['String']>;
  signInUser?: Maybe<QuerySignInUserResult>;
};


export type QueryGetAuthTokenWithPasswordResetTokenArgs = {
  resetToken: Scalars['String'];
};


export type QueryGetNotificationsArgs = {
  token: Scalars['String'];
};


export type QueryGetUserArgs = {
  token: Scalars['String'];
};


export type QueryHelloQueryArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type QuerySignInUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type QueryGetAuthTokenWithPasswordResetTokenResult = BaseError | QueryGetAuthTokenWithPasswordResetTokenSuccess;

export type QueryGetAuthTokenWithPasswordResetTokenSuccess = {
  __typename?: 'QueryGetAuthTokenWithPasswordResetTokenSuccess';
  data: Scalars['String'];
};

export type QueryGetNotificationsResult = BaseError | QueryGetNotificationsSuccess;

export type QueryGetNotificationsSuccess = {
  __typename?: 'QueryGetNotificationsSuccess';
  data: Array<Notification>;
};

export type QueryGetUserResult = BaseError | QueryGetUserSuccess;

export type QueryGetUserSuccess = {
  __typename?: 'QueryGetUserSuccess';
  data: User;
};

export type QuerySignInUserResult = BaseError | QuerySignInUserSuccess;

export type QuerySignInUserSuccess = {
  __typename?: 'QuerySignInUserSuccess';
  data: Scalars['String'];
};

export type RequestOrigin = {
  __typename?: 'RequestOrigin';
  daily_usage_record_id?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  origin?: Maybe<Scalars['String']>;
  request_count?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  api_keys?: Maybe<Array<ApiKey>>;
  created_at?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  last_name?: Maybe<Scalars['String']>;
  subscription_status?: Maybe<Scalars['String']>;
};

export type OptionOutputFlatFragment = { __typename?: 'OptionOutput', id: string, text: string };

export type StringListSearchMutationVariables = Exact<{
  count?: InputMaybe<Scalars['Int']>;
  search_term: Scalars['String'];
  search_items: Array<Scalars['String']> | Scalars['String'];
}>;


export type StringListSearchMutation = { __typename?: 'Mutation', stringListSearch?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationStringListSearchSuccess', data: Array<string> } | null };

export type OptionListSearchMutationVariables = Exact<{
  count?: InputMaybe<Scalars['Int']>;
  search_term: Scalars['String'];
  search_items: Array<OptionInput> | OptionInput;
}>;


export type OptionListSearchMutation = { __typename?: 'Mutation', optionListSearch?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationOptionListSearchSuccess', data: Array<{ __typename?: 'OptionOutput', id: string, text: string }> } | null };

export const OptionOutputFlatFragmentDoc = gql`
    fragment OptionOutputFlat on OptionOutput {
  id
  text
}
    `;
export const StringListSearchDocument = gql`
    mutation stringListSearch($count: Int, $search_term: String!, $search_items: [String!]!) {
  stringListSearch(
    count: $count
    search_term: $search_term
    search_items: $search_items
  ) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationStringListSearchSuccess {
      data
    }
  }
}
    `;
export const OptionListSearchDocument = gql`
    mutation optionListSearch($count: Int, $search_term: String!, $search_items: [OptionInput!]!) {
  optionListSearch(
    count: $count
    search_term: $search_term
    search_items: $search_items
  ) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationOptionListSearchSuccess {
      data {
        ...OptionOutputFlat
      }
    }
  }
}
    ${OptionOutputFlatFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    stringListSearch(variables: StringListSearchMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StringListSearchMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<StringListSearchMutation>(StringListSearchDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'stringListSearch', 'mutation');
    },
    optionListSearch(variables: OptionListSearchMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OptionListSearchMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<OptionListSearchMutation>(OptionListSearchDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'optionListSearch', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;