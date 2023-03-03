import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
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
    createOptionList?: Maybe<MutationCreateOptionListResult>;
    createStringList?: Maybe<MutationCreateStringListResult>;
    createStripePortalSession?: Maybe<MutationCreateStripePortalSessionResult>;
    deleteApiKey?: Maybe<MutationDeleteApiKeyResult>;
    filterOptionList?: Maybe<MutationFilterOptionListResult>;
    filterStringList?: Maybe<MutationFilterStringListResult>;
    helloMutation?: Maybe<Scalars['String']>;
    recommendOptionList?: Maybe<MutationRecommendOptionListResult>;
    recommendStringList?: Maybe<MutationRecommendStringListResult>;
    requestNewPassword?: Maybe<MutationRequestNewPasswordResult>;
    searchOptionList?: Maybe<MutationSearchOptionListResult>;
    searchStringList?: Maybe<MutationSearchStringListResult>;
    seenNotifications?: Maybe<MutationSeenNotificationsResult>;
    signUpUser?: Maybe<MutationSignUpUserResult>;
    sortOptionList?: Maybe<MutationSortOptionListResult>;
    sortStringList?: Maybe<MutationSortStringListResult>;
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
export type MutationCreateOptionListArgs = {
    count: Scalars['Int'];
    option_type: Scalars['String'];
};
export type MutationCreateStringListArgs = {
    count: Scalars['Int'];
    item_type: Scalars['String'];
};
export type MutationCreateStripePortalSessionArgs = {
    token?: InputMaybe<Scalars['String']>;
};
export type MutationDeleteApiKeyArgs = {
    id: Scalars['String'];
    token?: InputMaybe<Scalars['String']>;
};
export type MutationFilterOptionListArgs = {
    criteria: Scalars['String'];
    options: Array<OptionInput>;
};
export type MutationFilterStringListArgs = {
    criteria: Scalars['String'];
    items: Array<Scalars['String']>;
};
export type MutationHelloMutationArgs = {
    name: Scalars['String'];
};
export type MutationRecommendOptionListArgs = {
    count?: InputMaybe<Scalars['Int']>;
    interests: Array<OptionInput>;
    options: Array<OptionInput>;
};
export type MutationRecommendStringListArgs = {
    count?: InputMaybe<Scalars['Int']>;
    interests: Array<Scalars['String']>;
    items: Array<Scalars['String']>;
};
export type MutationRequestNewPasswordArgs = {
    email: Scalars['String'];
};
export type MutationSearchOptionListArgs = {
    count?: InputMaybe<Scalars['Int']>;
    options: Array<OptionInput>;
    search_term: Scalars['String'];
};
export type MutationSearchStringListArgs = {
    count?: InputMaybe<Scalars['Int']>;
    items: Array<Scalars['String']>;
    search_term: Scalars['String'];
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
export type MutationSortOptionListArgs = {
    criteria: Scalars['String'];
    options: Array<OptionInput>;
};
export type MutationSortStringListArgs = {
    criteria: Scalars['String'];
    items: Array<Scalars['String']>;
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
export type MutationCreateOptionListResult = BaseError | MutationCreateOptionListSuccess;
export type MutationCreateOptionListSuccess = {
    __typename?: 'MutationCreateOptionListSuccess';
    data: Array<OptionOutput>;
};
export type MutationCreateStringListResult = BaseError | MutationCreateStringListSuccess;
export type MutationCreateStringListSuccess = {
    __typename?: 'MutationCreateStringListSuccess';
    data: Array<Scalars['String']>;
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
export type MutationFilterOptionListResult = BaseError | MutationFilterOptionListSuccess;
export type MutationFilterOptionListSuccess = {
    __typename?: 'MutationFilterOptionListSuccess';
    data: Array<OptionOutput>;
};
export type MutationFilterStringListResult = BaseError | MutationFilterStringListSuccess;
export type MutationFilterStringListSuccess = {
    __typename?: 'MutationFilterStringListSuccess';
    data: Array<Scalars['String']>;
};
export type MutationRecommendOptionListResult = BaseError | MutationRecommendOptionListSuccess;
export type MutationRecommendOptionListSuccess = {
    __typename?: 'MutationRecommendOptionListSuccess';
    data: Array<OptionOutput>;
};
export type MutationRecommendStringListResult = BaseError | MutationRecommendStringListSuccess;
export type MutationRecommendStringListSuccess = {
    __typename?: 'MutationRecommendStringListSuccess';
    data: Array<Scalars['String']>;
};
export type MutationRequestNewPasswordResult = BaseError | MutationRequestNewPasswordSuccess;
export type MutationRequestNewPasswordSuccess = {
    __typename?: 'MutationRequestNewPasswordSuccess';
    data: Scalars['String'];
};
export type MutationSearchOptionListResult = BaseError | MutationSearchOptionListSuccess;
export type MutationSearchOptionListSuccess = {
    __typename?: 'MutationSearchOptionListSuccess';
    data: Array<OptionOutput>;
};
export type MutationSearchStringListResult = BaseError | MutationSearchStringListSuccess;
export type MutationSearchStringListSuccess = {
    __typename?: 'MutationSearchStringListSuccess';
    data: Array<Scalars['String']>;
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
export type MutationSortOptionListResult = BaseError | MutationSortOptionListSuccess;
export type MutationSortOptionListSuccess = {
    __typename?: 'MutationSortOptionListSuccess';
    data: Array<OptionOutput>;
};
export type MutationSortStringListResult = BaseError | MutationSortStringListSuccess;
export type MutationSortStringListSuccess = {
    __typename?: 'MutationSortStringListSuccess';
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
export type OptionOutputFlatFragment = {
    __typename?: 'OptionOutput';
    id: string;
    text: string;
};
export type SearchOptionListMutationVariables = Exact<{
    count?: InputMaybe<Scalars['Int']>;
    search_term: Scalars['String'];
    options: Array<OptionInput> | OptionInput;
}>;
export type SearchOptionListMutation = {
    __typename?: 'Mutation';
    searchOptionList?: {
        __typename: 'BaseError';
        message?: string | null;
    } | {
        __typename: 'MutationSearchOptionListSuccess';
        data: Array<{
            __typename?: 'OptionOutput';
            id: string;
            text: string;
        }>;
    } | null;
};
export type RecommendOptionListMutationVariables = Exact<{
    count?: InputMaybe<Scalars['Int']>;
    options: Array<OptionInput> | OptionInput;
    interests: Array<OptionInput> | OptionInput;
}>;
export type RecommendOptionListMutation = {
    __typename?: 'Mutation';
    recommendOptionList?: {
        __typename: 'BaseError';
        message?: string | null;
    } | {
        __typename: 'MutationRecommendOptionListSuccess';
        data: Array<{
            __typename?: 'OptionOutput';
            id: string;
            text: string;
        }>;
    } | null;
};
export type CreateOptionListMutationVariables = Exact<{
    count: Scalars['Int'];
    option_type: Scalars['String'];
}>;
export type CreateOptionListMutation = {
    __typename?: 'Mutation';
    createOptionList?: {
        __typename: 'BaseError';
        message?: string | null;
    } | {
        __typename: 'MutationCreateOptionListSuccess';
        data: Array<{
            __typename?: 'OptionOutput';
            id: string;
            text: string;
        }>;
    } | null;
};
export type SortOptionListMutationVariables = Exact<{
    criteria: Scalars['String'];
    options: Array<OptionInput> | OptionInput;
}>;
export type SortOptionListMutation = {
    __typename?: 'Mutation';
    sortOptionList?: {
        __typename: 'BaseError';
        message?: string | null;
    } | {
        __typename: 'MutationSortOptionListSuccess';
        data: Array<{
            __typename?: 'OptionOutput';
            id: string;
            text: string;
        }>;
    } | null;
};
export type FilterOptionListMutationVariables = Exact<{
    criteria: Scalars['String'];
    options: Array<OptionInput> | OptionInput;
}>;
export type FilterOptionListMutation = {
    __typename?: 'Mutation';
    filterOptionList?: {
        __typename: 'BaseError';
        message?: string | null;
    } | {
        __typename: 'MutationFilterOptionListSuccess';
        data: Array<{
            __typename?: 'OptionOutput';
            id: string;
            text: string;
        }>;
    } | null;
};
export type SearchStringListMutationVariables = Exact<{
    search_term: Scalars['String'];
    items: Array<Scalars['String']> | Scalars['String'];
    count?: InputMaybe<Scalars['Int']>;
}>;
export type SearchStringListMutation = {
    __typename?: 'Mutation';
    searchStringList?: {
        __typename: 'BaseError';
        message?: string | null;
    } | {
        __typename: 'MutationSearchStringListSuccess';
        data: Array<string>;
    } | null;
};
export type RecommendStringListMutationVariables = Exact<{
    items: Array<Scalars['String']> | Scalars['String'];
    interests: Array<Scalars['String']> | Scalars['String'];
    count?: InputMaybe<Scalars['Int']>;
}>;
export type RecommendStringListMutation = {
    __typename?: 'Mutation';
    recommendStringList?: {
        __typename: 'BaseError';
        message?: string | null;
    } | {
        __typename: 'MutationRecommendStringListSuccess';
        data: Array<string>;
    } | null;
};
export type CreateStringListMutationVariables = Exact<{
    count: Scalars['Int'];
    item_type: Scalars['String'];
}>;
export type CreateStringListMutation = {
    __typename?: 'Mutation';
    createStringList?: {
        __typename: 'BaseError';
        message?: string | null;
    } | {
        __typename: 'MutationCreateStringListSuccess';
        data: Array<string>;
    } | null;
};
export type SortStringListMutationVariables = Exact<{
    criteria: Scalars['String'];
    items: Array<Scalars['String']> | Scalars['String'];
}>;
export type SortStringListMutation = {
    __typename?: 'Mutation';
    sortStringList?: {
        __typename: 'BaseError';
        message?: string | null;
    } | {
        __typename: 'MutationSortStringListSuccess';
        data: Array<string>;
    } | null;
};
export type FilterStringListMutationVariables = Exact<{
    criteria: Scalars['String'];
    items: Array<Scalars['String']> | Scalars['String'];
}>;
export type FilterStringListMutation = {
    __typename?: 'Mutation';
    filterStringList?: {
        __typename: 'BaseError';
        message?: string | null;
    } | {
        __typename: 'MutationFilterStringListSuccess';
        data: Array<string>;
    } | null;
};
export declare const OptionOutputFlatFragmentDoc: import("graphql").DocumentNode;
export declare const SearchOptionListDocument: import("graphql").DocumentNode;
export declare const RecommendOptionListDocument: import("graphql").DocumentNode;
export declare const CreateOptionListDocument: import("graphql").DocumentNode;
export declare const SortOptionListDocument: import("graphql").DocumentNode;
export declare const FilterOptionListDocument: import("graphql").DocumentNode;
export declare const SearchStringListDocument: import("graphql").DocumentNode;
export declare const RecommendStringListDocument: import("graphql").DocumentNode;
export declare const CreateStringListDocument: import("graphql").DocumentNode;
export declare const SortStringListDocument: import("graphql").DocumentNode;
export declare const FilterStringListDocument: import("graphql").DocumentNode;
export type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    searchOptionList(variables: SearchOptionListMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SearchOptionListMutation>;
    recommendOptionList(variables: RecommendOptionListMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RecommendOptionListMutation>;
    createOptionList(variables: CreateOptionListMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateOptionListMutation>;
    sortOptionList(variables: SortOptionListMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SortOptionListMutation>;
    filterOptionList(variables: FilterOptionListMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FilterOptionListMutation>;
    searchStringList(variables: SearchStringListMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SearchStringListMutation>;
    recommendStringList(variables: RecommendStringListMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RecommendStringListMutation>;
    createStringList(variables: CreateStringListMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateStringListMutation>;
    sortStringList(variables: SortStringListMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SortStringListMutation>;
    filterStringList(variables: FilterStringListMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FilterStringListMutation>;
};
export type Sdk = ReturnType<typeof getSdk>;
