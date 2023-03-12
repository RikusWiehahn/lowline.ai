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

export type ChatThreadInput = {
  content: Scalars['String'];
  name: Scalars['String'];
  role: Scalars['String'];
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
  classify?: Maybe<MutationClassifyResult>;
  createApiKey?: Maybe<MutationCreateApiKeyResult>;
  createCheckoutSession?: Maybe<MutationCreateCheckoutSessionResult>;
  createOptionList?: Maybe<MutationCreateOptionListResult>;
  createStringList?: Maybe<MutationCreateStringListResult>;
  createStripePortalSession?: Maybe<MutationCreateStripePortalSessionResult>;
  deleteApiKey?: Maybe<MutationDeleteApiKeyResult>;
  elaborate?: Maybe<MutationElaborateResult>;
  explain?: Maybe<MutationExplainResult>;
  filterOptionList?: Maybe<MutationFilterOptionListResult>;
  filterStringList?: Maybe<MutationFilterStringListResult>;
  fixGrammarErrors?: Maybe<MutationFixGrammarErrorsResult>;
  fixProfanity?: Maybe<MutationFixProfanityResult>;
  fixSpellingErrors?: Maybe<MutationFixSpellingErrorsResult>;
  generateKeywords?: Maybe<MutationGenerateKeywordsResult>;
  generatePlaintext?: Maybe<MutationGeneratePlaintextResult>;
  getKeywords?: Maybe<MutationGetKeywordsResult>;
  getTopic?: Maybe<MutationGetTopicResult>;
  hasEmojis?: Maybe<MutationHasEmojisResult>;
  hasGrammarErrors?: Maybe<MutationHasGrammarErrorsResult>;
  hasProfanity?: Maybe<MutationHasProfanityResult>;
  hasSpellingErrors?: Maybe<MutationHasSpellingErrorsResult>;
  helloMutation?: Maybe<Scalars['String']>;
  includesMentionOf?: Maybe<MutationIncludesMentionOfResult>;
  isEmoji?: Maybe<MutationIsEmojiResult>;
  isPlaintext?: Maybe<MutationIsPlaintextResult>;
  isQuestion?: Maybe<MutationIsQuestionResult>;
  plaintextToHTML?: Maybe<MutationPlaintextToHtmlResult>;
  plaintextToMarkdown?: Maybe<MutationPlaintextToMarkdownResult>;
  pluralize?: Maybe<MutationPluralizeResult>;
  recommendOptionList?: Maybe<MutationRecommendOptionListResult>;
  recommendStringList?: Maybe<MutationRecommendStringListResult>;
  removeEmojis?: Maybe<MutationRemoveEmojisResult>;
  requestNewPassword?: Maybe<MutationRequestNewPasswordResult>;
  searchOptionList?: Maybe<MutationSearchOptionListResult>;
  searchStringList?: Maybe<MutationSearchStringListResult>;
  seenNotifications?: Maybe<MutationSeenNotificationsResult>;
  signUpUser?: Maybe<MutationSignUpUserResult>;
  sortOptionList?: Maybe<MutationSortOptionListResult>;
  sortStringList?: Maybe<MutationSortStringListResult>;
  submitEnquiry?: Maybe<MutationSubmitEnquiryResult>;
  submitFeedback?: Maybe<MutationSubmitFeedbackResult>;
  suggestChatResponse?: Maybe<MutationSuggestChatResponseResult>;
  suggestChatResponseIntents?: Maybe<MutationSuggestChatResponseIntentsResult>;
  suggestChatResponseMulti?: Maybe<MutationSuggestChatResponseMultiResult>;
  suggestEdits?: Maybe<MutationSuggestEditsResult>;
  suggestEmoji?: Maybe<MutationSuggestEmojiResult>;
  summarize?: Maybe<MutationSummarizeResult>;
  summarizeKeyPoints?: Maybe<MutationSummarizeKeyPointsResult>;
  toSpellingUK?: Maybe<MutationToSpellingUkResult>;
  toSpellingUSA?: Maybe<MutationToSpellingUsaResult>;
  updateUser?: Maybe<MutationUpdateUserResult>;
};


export type MutationClassifyArgs = {
  categories: Array<OptionInput>;
  criteria: Scalars['String'];
  item: Scalars['String'];
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


export type MutationElaborateArgs = {
  sentence_count: Scalars['Int'];
  text: Scalars['String'];
};


export type MutationExplainArgs = {
  level: Scalars['String'];
  text: Scalars['String'];
};


export type MutationFilterOptionListArgs = {
  criteria: Scalars['String'];
  options: Array<OptionInput>;
};


export type MutationFilterStringListArgs = {
  criteria: Scalars['String'];
  items: Array<Scalars['String']>;
};


export type MutationFixGrammarErrorsArgs = {
  text: Scalars['String'];
};


export type MutationFixProfanityArgs = {
  text: Scalars['String'];
};


export type MutationFixSpellingErrorsArgs = {
  text: Scalars['String'];
};


export type MutationGenerateKeywordsArgs = {
  count: Scalars['Int'];
  topic: Scalars['String'];
};


export type MutationGeneratePlaintextArgs = {
  prompt: Scalars['String'];
};


export type MutationGetKeywordsArgs = {
  count: Scalars['Int'];
  text: Scalars['String'];
};


export type MutationGetTopicArgs = {
  text: Scalars['String'];
};


export type MutationHasEmojisArgs = {
  text: Scalars['String'];
};


export type MutationHasGrammarErrorsArgs = {
  text: Scalars['String'];
};


export type MutationHasProfanityArgs = {
  text: Scalars['String'];
};


export type MutationHasSpellingErrorsArgs = {
  text: Scalars['String'];
};


export type MutationHelloMutationArgs = {
  name: Scalars['String'];
};


export type MutationIncludesMentionOfArgs = {
  subject: Scalars['String'];
  text: Scalars['String'];
};


export type MutationIsEmojiArgs = {
  text: Scalars['String'];
};


export type MutationIsPlaintextArgs = {
  text: Scalars['String'];
};


export type MutationIsQuestionArgs = {
  text: Scalars['String'];
};


export type MutationPlaintextToHtmlArgs = {
  text: Scalars['String'];
};


export type MutationPlaintextToMarkdownArgs = {
  text: Scalars['String'];
};


export type MutationPluralizeArgs = {
  count: Scalars['Int'];
  item: Scalars['String'];
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


export type MutationRemoveEmojisArgs = {
  text: Scalars['String'];
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


export type MutationSuggestChatResponseArgs = {
  chat_thread: Array<ChatThreadInput>;
  intent: Scalars['String'];
};


export type MutationSuggestChatResponseIntentsArgs = {
  chat_thread: Array<ChatThreadInput>;
  count: Scalars['Int'];
};


export type MutationSuggestChatResponseMultiArgs = {
  chat_thread: Array<ChatThreadInput>;
  count: Scalars['Int'];
  intent: Scalars['String'];
};


export type MutationSuggestEditsArgs = {
  text: Scalars['String'];
};


export type MutationSuggestEmojiArgs = {
  text: Scalars['String'];
};


export type MutationSummarizeArgs = {
  sentence_count: Scalars['Int'];
  text: Scalars['String'];
};


export type MutationSummarizeKeyPointsArgs = {
  text: Scalars['String'];
};


export type MutationToSpellingUkArgs = {
  text: Scalars['String'];
};


export type MutationToSpellingUsaArgs = {
  text: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  token: Scalars['String'];
};

export type MutationClassifyResult = BaseError | MutationClassifySuccess;

export type MutationClassifySuccess = {
  __typename?: 'MutationClassifySuccess';
  data: OptionOutput;
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

export type MutationElaborateResult = BaseError | MutationElaborateSuccess;

export type MutationElaborateSuccess = {
  __typename?: 'MutationElaborateSuccess';
  data: Scalars['String'];
};

export type MutationExplainResult = BaseError | MutationExplainSuccess;

export type MutationExplainSuccess = {
  __typename?: 'MutationExplainSuccess';
  data: Scalars['String'];
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

export type MutationFixGrammarErrorsResult = BaseError | MutationFixGrammarErrorsSuccess;

export type MutationFixGrammarErrorsSuccess = {
  __typename?: 'MutationFixGrammarErrorsSuccess';
  data: Scalars['String'];
};

export type MutationFixProfanityResult = BaseError | MutationFixProfanitySuccess;

export type MutationFixProfanitySuccess = {
  __typename?: 'MutationFixProfanitySuccess';
  data: Scalars['String'];
};

export type MutationFixSpellingErrorsResult = BaseError | MutationFixSpellingErrorsSuccess;

export type MutationFixSpellingErrorsSuccess = {
  __typename?: 'MutationFixSpellingErrorsSuccess';
  data: Scalars['String'];
};

export type MutationGenerateKeywordsResult = BaseError | MutationGenerateKeywordsSuccess;

export type MutationGenerateKeywordsSuccess = {
  __typename?: 'MutationGenerateKeywordsSuccess';
  data: Array<Scalars['String']>;
};

export type MutationGeneratePlaintextResult = BaseError | MutationGeneratePlaintextSuccess;

export type MutationGeneratePlaintextSuccess = {
  __typename?: 'MutationGeneratePlaintextSuccess';
  data: Scalars['String'];
};

export type MutationGetKeywordsResult = BaseError | MutationGetKeywordsSuccess;

export type MutationGetKeywordsSuccess = {
  __typename?: 'MutationGetKeywordsSuccess';
  data: Array<Scalars['String']>;
};

export type MutationGetTopicResult = BaseError | MutationGetTopicSuccess;

export type MutationGetTopicSuccess = {
  __typename?: 'MutationGetTopicSuccess';
  data: Scalars['String'];
};

export type MutationHasEmojisResult = BaseError | MutationHasEmojisSuccess;

export type MutationHasEmojisSuccess = {
  __typename?: 'MutationHasEmojisSuccess';
  data: Scalars['Boolean'];
};

export type MutationHasGrammarErrorsResult = BaseError | MutationHasGrammarErrorsSuccess;

export type MutationHasGrammarErrorsSuccess = {
  __typename?: 'MutationHasGrammarErrorsSuccess';
  data: Scalars['Boolean'];
};

export type MutationHasProfanityResult = BaseError | MutationHasProfanitySuccess;

export type MutationHasProfanitySuccess = {
  __typename?: 'MutationHasProfanitySuccess';
  data: Scalars['Boolean'];
};

export type MutationHasSpellingErrorsResult = BaseError | MutationHasSpellingErrorsSuccess;

export type MutationHasSpellingErrorsSuccess = {
  __typename?: 'MutationHasSpellingErrorsSuccess';
  data: Scalars['Boolean'];
};

export type MutationIncludesMentionOfResult = BaseError | MutationIncludesMentionOfSuccess;

export type MutationIncludesMentionOfSuccess = {
  __typename?: 'MutationIncludesMentionOfSuccess';
  data: Scalars['Boolean'];
};

export type MutationIsEmojiResult = BaseError | MutationIsEmojiSuccess;

export type MutationIsEmojiSuccess = {
  __typename?: 'MutationIsEmojiSuccess';
  data: Scalars['Boolean'];
};

export type MutationIsPlaintextResult = BaseError | MutationIsPlaintextSuccess;

export type MutationIsPlaintextSuccess = {
  __typename?: 'MutationIsPlaintextSuccess';
  data: Scalars['Boolean'];
};

export type MutationIsQuestionResult = BaseError | MutationIsQuestionSuccess;

export type MutationIsQuestionSuccess = {
  __typename?: 'MutationIsQuestionSuccess';
  data: Scalars['Boolean'];
};

export type MutationPlaintextToHtmlResult = BaseError | MutationPlaintextToHtmlSuccess;

export type MutationPlaintextToHtmlSuccess = {
  __typename?: 'MutationPlaintextToHTMLSuccess';
  data: Scalars['String'];
};

export type MutationPlaintextToMarkdownResult = BaseError | MutationPlaintextToMarkdownSuccess;

export type MutationPlaintextToMarkdownSuccess = {
  __typename?: 'MutationPlaintextToMarkdownSuccess';
  data: Scalars['String'];
};

export type MutationPluralizeResult = BaseError | MutationPluralizeSuccess;

export type MutationPluralizeSuccess = {
  __typename?: 'MutationPluralizeSuccess';
  data: Scalars['String'];
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

export type MutationRemoveEmojisResult = BaseError | MutationRemoveEmojisSuccess;

export type MutationRemoveEmojisSuccess = {
  __typename?: 'MutationRemoveEmojisSuccess';
  data: Scalars['String'];
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

export type MutationSuggestChatResponseIntentsResult = BaseError | MutationSuggestChatResponseIntentsSuccess;

export type MutationSuggestChatResponseIntentsSuccess = {
  __typename?: 'MutationSuggestChatResponseIntentsSuccess';
  data: Array<Scalars['String']>;
};

export type MutationSuggestChatResponseMultiResult = BaseError | MutationSuggestChatResponseMultiSuccess;

export type MutationSuggestChatResponseMultiSuccess = {
  __typename?: 'MutationSuggestChatResponseMultiSuccess';
  data: Array<Scalars['String']>;
};

export type MutationSuggestChatResponseResult = BaseError | MutationSuggestChatResponseSuccess;

export type MutationSuggestChatResponseSuccess = {
  __typename?: 'MutationSuggestChatResponseSuccess';
  data: Scalars['String'];
};

export type MutationSuggestEditsResult = BaseError | MutationSuggestEditsSuccess;

export type MutationSuggestEditsSuccess = {
  __typename?: 'MutationSuggestEditsSuccess';
  data: Scalars['String'];
};

export type MutationSuggestEmojiResult = BaseError | MutationSuggestEmojiSuccess;

export type MutationSuggestEmojiSuccess = {
  __typename?: 'MutationSuggestEmojiSuccess';
  data: Scalars['String'];
};

export type MutationSummarizeKeyPointsResult = BaseError | MutationSummarizeKeyPointsSuccess;

export type MutationSummarizeKeyPointsSuccess = {
  __typename?: 'MutationSummarizeKeyPointsSuccess';
  data: Scalars['String'];
};

export type MutationSummarizeResult = BaseError | MutationSummarizeSuccess;

export type MutationSummarizeSuccess = {
  __typename?: 'MutationSummarizeSuccess';
  data: Scalars['String'];
};

export type MutationToSpellingUkResult = BaseError | MutationToSpellingUkSuccess;

export type MutationToSpellingUkSuccess = {
  __typename?: 'MutationToSpellingUKSuccess';
  data: Scalars['String'];
};

export type MutationToSpellingUsaResult = BaseError | MutationToSpellingUsaSuccess;

export type MutationToSpellingUsaSuccess = {
  __typename?: 'MutationToSpellingUSASuccess';
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

export type SearchOptionListMutationVariables = Exact<{
  count?: InputMaybe<Scalars['Int']>;
  search_term: Scalars['String'];
  options: Array<OptionInput> | OptionInput;
}>;


export type SearchOptionListMutation = { __typename?: 'Mutation', searchOptionList?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationSearchOptionListSuccess', data: Array<{ __typename?: 'OptionOutput', id: string, text: string }> } | null };

export type RecommendOptionListMutationVariables = Exact<{
  count?: InputMaybe<Scalars['Int']>;
  options: Array<OptionInput> | OptionInput;
  interests: Array<OptionInput> | OptionInput;
}>;


export type RecommendOptionListMutation = { __typename?: 'Mutation', recommendOptionList?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationRecommendOptionListSuccess', data: Array<{ __typename?: 'OptionOutput', id: string, text: string }> } | null };

export type CreateOptionListMutationVariables = Exact<{
  count: Scalars['Int'];
  option_type: Scalars['String'];
}>;


export type CreateOptionListMutation = { __typename?: 'Mutation', createOptionList?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationCreateOptionListSuccess', data: Array<{ __typename?: 'OptionOutput', id: string, text: string }> } | null };

export type SortOptionListMutationVariables = Exact<{
  criteria: Scalars['String'];
  options: Array<OptionInput> | OptionInput;
}>;


export type SortOptionListMutation = { __typename?: 'Mutation', sortOptionList?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationSortOptionListSuccess', data: Array<{ __typename?: 'OptionOutput', id: string, text: string }> } | null };

export type FilterOptionListMutationVariables = Exact<{
  criteria: Scalars['String'];
  options: Array<OptionInput> | OptionInput;
}>;


export type FilterOptionListMutation = { __typename?: 'Mutation', filterOptionList?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationFilterOptionListSuccess', data: Array<{ __typename?: 'OptionOutput', id: string, text: string }> } | null };

export type SearchStringListMutationVariables = Exact<{
  search_term: Scalars['String'];
  items: Array<Scalars['String']> | Scalars['String'];
  count?: InputMaybe<Scalars['Int']>;
}>;


export type SearchStringListMutation = { __typename?: 'Mutation', searchStringList?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationSearchStringListSuccess', data: Array<string> } | null };

export type RecommendStringListMutationVariables = Exact<{
  items: Array<Scalars['String']> | Scalars['String'];
  interests: Array<Scalars['String']> | Scalars['String'];
  count?: InputMaybe<Scalars['Int']>;
}>;


export type RecommendStringListMutation = { __typename?: 'Mutation', recommendStringList?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationRecommendStringListSuccess', data: Array<string> } | null };

export type CreateStringListMutationVariables = Exact<{
  count: Scalars['Int'];
  item_type: Scalars['String'];
}>;


export type CreateStringListMutation = { __typename?: 'Mutation', createStringList?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationCreateStringListSuccess', data: Array<string> } | null };

export type SortStringListMutationVariables = Exact<{
  criteria: Scalars['String'];
  items: Array<Scalars['String']> | Scalars['String'];
}>;


export type SortStringListMutation = { __typename?: 'Mutation', sortStringList?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationSortStringListSuccess', data: Array<string> } | null };

export type FilterStringListMutationVariables = Exact<{
  criteria: Scalars['String'];
  items: Array<Scalars['String']> | Scalars['String'];
}>;


export type FilterStringListMutation = { __typename?: 'Mutation', filterStringList?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationFilterStringListSuccess', data: Array<string> } | null };

export type SuggestChatResponseMutationVariables = Exact<{
  intent: Scalars['String'];
  chat_thread: Array<ChatThreadInput> | ChatThreadInput;
}>;


export type SuggestChatResponseMutation = { __typename?: 'Mutation', suggestChatResponse?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationSuggestChatResponseSuccess', data: string } | null };

export type SuggestChatResponseIntentsMutationVariables = Exact<{
  count: Scalars['Int'];
  chat_thread: Array<ChatThreadInput> | ChatThreadInput;
}>;


export type SuggestChatResponseIntentsMutation = { __typename?: 'Mutation', suggestChatResponseIntents?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationSuggestChatResponseIntentsSuccess', data: Array<string> } | null };

export type SuggestChatResponseMultiMutationVariables = Exact<{
  count: Scalars['Int'];
  intent: Scalars['String'];
  chat_thread: Array<ChatThreadInput> | ChatThreadInput;
}>;


export type SuggestChatResponseMultiMutation = { __typename?: 'Mutation', suggestChatResponseMulti?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationSuggestChatResponseMultiSuccess', data: Array<string> } | null };

export type IsPlaintextMutationVariables = Exact<{
  text: Scalars['String'];
}>;


export type IsPlaintextMutation = { __typename?: 'Mutation', isPlaintext?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationIsPlaintextSuccess', data: boolean } | null };

export type GeneratePlaintextMutationVariables = Exact<{
  prompt: Scalars['String'];
}>;


export type GeneratePlaintextMutation = { __typename?: 'Mutation', generatePlaintext?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationGeneratePlaintextSuccess', data: string } | null };

export type HasSpellingErrorsMutationVariables = Exact<{
  text: Scalars['String'];
}>;


export type HasSpellingErrorsMutation = { __typename?: 'Mutation', hasSpellingErrors?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationHasSpellingErrorsSuccess', data: boolean } | null };

export type FixSpellingErrorsMutationVariables = Exact<{
  text: Scalars['String'];
}>;


export type FixSpellingErrorsMutation = { __typename?: 'Mutation', fixSpellingErrors?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationFixSpellingErrorsSuccess', data: string } | null };

export type HasGrammarErrorsMutationVariables = Exact<{
  text: Scalars['String'];
}>;


export type HasGrammarErrorsMutation = { __typename?: 'Mutation', hasGrammarErrors?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationHasGrammarErrorsSuccess', data: boolean } | null };

export type FixGrammarErrorsMutationVariables = Exact<{
  text: Scalars['String'];
}>;


export type FixGrammarErrorsMutation = { __typename?: 'Mutation', fixGrammarErrors?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationFixGrammarErrorsSuccess', data: string } | null };

export type HasProfanityMutationVariables = Exact<{
  text: Scalars['String'];
}>;


export type HasProfanityMutation = { __typename?: 'Mutation', hasProfanity?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationHasProfanitySuccess', data: boolean } | null };

export type FixProfanityMutationVariables = Exact<{
  text: Scalars['String'];
}>;


export type FixProfanityMutation = { __typename?: 'Mutation', fixProfanity?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationFixProfanitySuccess', data: string } | null };

export type IncludesMentionOfMutationVariables = Exact<{
  text: Scalars['String'];
  subject: Scalars['String'];
}>;


export type IncludesMentionOfMutation = { __typename?: 'Mutation', includesMentionOf?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationIncludesMentionOfSuccess', data: boolean } | null };

export type IsQuestionMutationVariables = Exact<{
  text: Scalars['String'];
}>;


export type IsQuestionMutation = { __typename?: 'Mutation', isQuestion?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationIsQuestionSuccess', data: boolean } | null };

export type SuggestEditsMutationVariables = Exact<{
  text: Scalars['String'];
}>;


export type SuggestEditsMutation = { __typename?: 'Mutation', suggestEdits?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationSuggestEditsSuccess', data: string } | null };

export type SummarizeMutationVariables = Exact<{
  text: Scalars['String'];
  sentence_count: Scalars['Int'];
}>;


export type SummarizeMutation = { __typename?: 'Mutation', summarize?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationSummarizeSuccess', data: string } | null };

export type SummarizeKeyPointsMutationVariables = Exact<{
  text: Scalars['String'];
}>;


export type SummarizeKeyPointsMutation = { __typename?: 'Mutation', summarizeKeyPoints?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationSummarizeKeyPointsSuccess', data: string } | null };

export type ElaborateMutationVariables = Exact<{
  text: Scalars['String'];
  sentence_count: Scalars['Int'];
}>;


export type ElaborateMutation = { __typename?: 'Mutation', elaborate?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationElaborateSuccess', data: string } | null };

export type ExplainMutationVariables = Exact<{
  text: Scalars['String'];
  level: Scalars['String'];
}>;


export type ExplainMutation = { __typename?: 'Mutation', explain?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationExplainSuccess', data: string } | null };

export type ClassifyMutationVariables = Exact<{
  item: Scalars['String'];
  criteria: Scalars['String'];
  categories: Array<OptionInput> | OptionInput;
}>;


export type ClassifyMutation = { __typename?: 'Mutation', classify?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationClassifySuccess', data: { __typename?: 'OptionOutput', id: string, text: string } } | null };

export type GetKeywordsMutationVariables = Exact<{
  text: Scalars['String'];
  count: Scalars['Int'];
}>;


export type GetKeywordsMutation = { __typename?: 'Mutation', getKeywords?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationGetKeywordsSuccess', data: Array<string> } | null };

export type GenerateKeywordsMutationVariables = Exact<{
  topic: Scalars['String'];
  count: Scalars['Int'];
}>;


export type GenerateKeywordsMutation = { __typename?: 'Mutation', generateKeywords?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationGenerateKeywordsSuccess', data: Array<string> } | null };

export type GetTopicMutationVariables = Exact<{
  text: Scalars['String'];
}>;


export type GetTopicMutation = { __typename?: 'Mutation', getTopic?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationGetTopicSuccess', data: string } | null };

export type PluralizeMutationVariables = Exact<{
  item: Scalars['String'];
  count: Scalars['Int'];
}>;


export type PluralizeMutation = { __typename?: 'Mutation', pluralize?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationPluralizeSuccess', data: string } | null };

export type PlaintextToMarkdownMutationVariables = Exact<{
  text: Scalars['String'];
}>;


export type PlaintextToMarkdownMutation = { __typename?: 'Mutation', plaintextToMarkdown?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationPlaintextToMarkdownSuccess', data: string } | null };

export type PlaintextToHtmlMutationVariables = Exact<{
  text: Scalars['String'];
}>;


export type PlaintextToHtmlMutation = { __typename?: 'Mutation', plaintextToHTML?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationPlaintextToHTMLSuccess', data: string } | null };

export type ToSpellingUsaMutationVariables = Exact<{
  text: Scalars['String'];
}>;


export type ToSpellingUsaMutation = { __typename?: 'Mutation', toSpellingUSA?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationToSpellingUSASuccess', data: string } | null };

export type ToSpellingUkMutationVariables = Exact<{
  text: Scalars['String'];
}>;


export type ToSpellingUkMutation = { __typename?: 'Mutation', toSpellingUK?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationToSpellingUKSuccess', data: string } | null };

export type SuggestEmojiMutationVariables = Exact<{
  text: Scalars['String'];
}>;


export type SuggestEmojiMutation = { __typename?: 'Mutation', suggestEmoji?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationSuggestEmojiSuccess', data: string } | null };

export type IsEmojiMutationVariables = Exact<{
  text: Scalars['String'];
}>;


export type IsEmojiMutation = { __typename?: 'Mutation', isEmoji?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationIsEmojiSuccess', data: boolean } | null };

export type HasEmojisMutationVariables = Exact<{
  text: Scalars['String'];
}>;


export type HasEmojisMutation = { __typename?: 'Mutation', hasEmojis?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationHasEmojisSuccess', data: boolean } | null };

export type RemoveEmojisMutationVariables = Exact<{
  text: Scalars['String'];
}>;


export type RemoveEmojisMutation = { __typename?: 'Mutation', removeEmojis?: { __typename: 'BaseError', message?: string | null } | { __typename: 'MutationRemoveEmojisSuccess', data: string } | null };

export const OptionOutputFlatFragmentDoc = gql`
    fragment OptionOutputFlat on OptionOutput {
  id
  text
}
    `;
export const SearchOptionListDocument = gql`
    mutation searchOptionList($count: Int, $search_term: String!, $options: [OptionInput!]!) {
  searchOptionList(count: $count, search_term: $search_term, options: $options) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationSearchOptionListSuccess {
      data {
        ...OptionOutputFlat
      }
    }
  }
}
    ${OptionOutputFlatFragmentDoc}`;
export const RecommendOptionListDocument = gql`
    mutation recommendOptionList($count: Int, $options: [OptionInput!]!, $interests: [OptionInput!]!) {
  recommendOptionList(count: $count, options: $options, interests: $interests) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationRecommendOptionListSuccess {
      data {
        ...OptionOutputFlat
      }
    }
  }
}
    ${OptionOutputFlatFragmentDoc}`;
export const CreateOptionListDocument = gql`
    mutation createOptionList($count: Int!, $option_type: String!) {
  createOptionList(count: $count, option_type: $option_type) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationCreateOptionListSuccess {
      data {
        ...OptionOutputFlat
      }
    }
  }
}
    ${OptionOutputFlatFragmentDoc}`;
export const SortOptionListDocument = gql`
    mutation sortOptionList($criteria: String!, $options: [OptionInput!]!) {
  sortOptionList(criteria: $criteria, options: $options) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationSortOptionListSuccess {
      data {
        ...OptionOutputFlat
      }
    }
  }
}
    ${OptionOutputFlatFragmentDoc}`;
export const FilterOptionListDocument = gql`
    mutation filterOptionList($criteria: String!, $options: [OptionInput!]!) {
  filterOptionList(criteria: $criteria, options: $options) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationFilterOptionListSuccess {
      data {
        ...OptionOutputFlat
      }
    }
  }
}
    ${OptionOutputFlatFragmentDoc}`;
export const SearchStringListDocument = gql`
    mutation searchStringList($search_term: String!, $items: [String!]!, $count: Int) {
  searchStringList(search_term: $search_term, items: $items, count: $count) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationSearchStringListSuccess {
      data
    }
  }
}
    `;
export const RecommendStringListDocument = gql`
    mutation recommendStringList($items: [String!]!, $interests: [String!]!, $count: Int) {
  recommendStringList(items: $items, interests: $interests, count: $count) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationRecommendStringListSuccess {
      data
    }
  }
}
    `;
export const CreateStringListDocument = gql`
    mutation createStringList($count: Int!, $item_type: String!) {
  createStringList(count: $count, item_type: $item_type) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationCreateStringListSuccess {
      data
    }
  }
}
    `;
export const SortStringListDocument = gql`
    mutation sortStringList($criteria: String!, $items: [String!]!) {
  sortStringList(criteria: $criteria, items: $items) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationSortStringListSuccess {
      data
    }
  }
}
    `;
export const FilterStringListDocument = gql`
    mutation filterStringList($criteria: String!, $items: [String!]!) {
  filterStringList(criteria: $criteria, items: $items) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationFilterStringListSuccess {
      data
    }
  }
}
    `;
export const SuggestChatResponseDocument = gql`
    mutation suggestChatResponse($intent: String!, $chat_thread: [ChatThreadInput!]!) {
  suggestChatResponse(intent: $intent, chat_thread: $chat_thread) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationSuggestChatResponseSuccess {
      data
    }
  }
}
    `;
export const SuggestChatResponseIntentsDocument = gql`
    mutation suggestChatResponseIntents($count: Int!, $chat_thread: [ChatThreadInput!]!) {
  suggestChatResponseIntents(count: $count, chat_thread: $chat_thread) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationSuggestChatResponseIntentsSuccess {
      data
    }
  }
}
    `;
export const SuggestChatResponseMultiDocument = gql`
    mutation suggestChatResponseMulti($count: Int!, $intent: String!, $chat_thread: [ChatThreadInput!]!) {
  suggestChatResponseMulti(
    count: $count
    intent: $intent
    chat_thread: $chat_thread
  ) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationSuggestChatResponseMultiSuccess {
      data
    }
  }
}
    `;
export const IsPlaintextDocument = gql`
    mutation isPlaintext($text: String!) {
  isPlaintext(text: $text) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationIsPlaintextSuccess {
      data
    }
  }
}
    `;
export const GeneratePlaintextDocument = gql`
    mutation generatePlaintext($prompt: String!) {
  generatePlaintext(prompt: $prompt) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationGeneratePlaintextSuccess {
      data
    }
  }
}
    `;
export const HasSpellingErrorsDocument = gql`
    mutation hasSpellingErrors($text: String!) {
  hasSpellingErrors(text: $text) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationHasSpellingErrorsSuccess {
      data
    }
  }
}
    `;
export const FixSpellingErrorsDocument = gql`
    mutation fixSpellingErrors($text: String!) {
  fixSpellingErrors(text: $text) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationFixSpellingErrorsSuccess {
      data
    }
  }
}
    `;
export const HasGrammarErrorsDocument = gql`
    mutation hasGrammarErrors($text: String!) {
  hasGrammarErrors(text: $text) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationHasGrammarErrorsSuccess {
      data
    }
  }
}
    `;
export const FixGrammarErrorsDocument = gql`
    mutation fixGrammarErrors($text: String!) {
  fixGrammarErrors(text: $text) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationFixGrammarErrorsSuccess {
      data
    }
  }
}
    `;
export const HasProfanityDocument = gql`
    mutation hasProfanity($text: String!) {
  hasProfanity(text: $text) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationHasProfanitySuccess {
      data
    }
  }
}
    `;
export const FixProfanityDocument = gql`
    mutation fixProfanity($text: String!) {
  fixProfanity(text: $text) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationFixProfanitySuccess {
      data
    }
  }
}
    `;
export const IncludesMentionOfDocument = gql`
    mutation includesMentionOf($text: String!, $subject: String!) {
  includesMentionOf(text: $text, subject: $subject) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationIncludesMentionOfSuccess {
      data
    }
  }
}
    `;
export const IsQuestionDocument = gql`
    mutation isQuestion($text: String!) {
  isQuestion(text: $text) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationIsQuestionSuccess {
      data
    }
  }
}
    `;
export const SuggestEditsDocument = gql`
    mutation suggestEdits($text: String!) {
  suggestEdits(text: $text) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationSuggestEditsSuccess {
      data
    }
  }
}
    `;
export const SummarizeDocument = gql`
    mutation summarize($text: String!, $sentence_count: Int!) {
  summarize(text: $text, sentence_count: $sentence_count) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationSummarizeSuccess {
      data
    }
  }
}
    `;
export const SummarizeKeyPointsDocument = gql`
    mutation summarizeKeyPoints($text: String!) {
  summarizeKeyPoints(text: $text) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationSummarizeKeyPointsSuccess {
      data
    }
  }
}
    `;
export const ElaborateDocument = gql`
    mutation elaborate($text: String!, $sentence_count: Int!) {
  elaborate(text: $text, sentence_count: $sentence_count) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationElaborateSuccess {
      data
    }
  }
}
    `;
export const ExplainDocument = gql`
    mutation explain($text: String!, $level: String!) {
  explain(text: $text, level: $level) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationExplainSuccess {
      data
    }
  }
}
    `;
export const ClassifyDocument = gql`
    mutation classify($item: String!, $criteria: String!, $categories: [OptionInput!]!) {
  classify(item: $item, criteria: $criteria, categories: $categories) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationClassifySuccess {
      data {
        id
        text
      }
    }
  }
}
    `;
export const GetKeywordsDocument = gql`
    mutation getKeywords($text: String!, $count: Int!) {
  getKeywords(text: $text, count: $count) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationGetKeywordsSuccess {
      data
    }
  }
}
    `;
export const GenerateKeywordsDocument = gql`
    mutation generateKeywords($topic: String!, $count: Int!) {
  generateKeywords(topic: $topic, count: $count) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationGenerateKeywordsSuccess {
      data
    }
  }
}
    `;
export const GetTopicDocument = gql`
    mutation getTopic($text: String!) {
  getTopic(text: $text) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationGetTopicSuccess {
      data
    }
  }
}
    `;
export const PluralizeDocument = gql`
    mutation pluralize($item: String!, $count: Int!) {
  pluralize(item: $item, count: $count) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationPluralizeSuccess {
      data
    }
  }
}
    `;
export const PlaintextToMarkdownDocument = gql`
    mutation plaintextToMarkdown($text: String!) {
  plaintextToMarkdown(text: $text) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationPlaintextToMarkdownSuccess {
      data
    }
  }
}
    `;
export const PlaintextToHtmlDocument = gql`
    mutation plaintextToHTML($text: String!) {
  plaintextToHTML(text: $text) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationPlaintextToHTMLSuccess {
      data
    }
  }
}
    `;
export const ToSpellingUsaDocument = gql`
    mutation toSpellingUSA($text: String!) {
  toSpellingUSA(text: $text) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationToSpellingUSASuccess {
      data
    }
  }
}
    `;
export const ToSpellingUkDocument = gql`
    mutation toSpellingUK($text: String!) {
  toSpellingUK(text: $text) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationToSpellingUKSuccess {
      data
    }
  }
}
    `;
export const SuggestEmojiDocument = gql`
    mutation suggestEmoji($text: String!) {
  suggestEmoji(text: $text) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationSuggestEmojiSuccess {
      data
    }
  }
}
    `;
export const IsEmojiDocument = gql`
    mutation isEmoji($text: String!) {
  isEmoji(text: $text) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationIsEmojiSuccess {
      data
    }
  }
}
    `;
export const HasEmojisDocument = gql`
    mutation hasEmojis($text: String!) {
  hasEmojis(text: $text) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationHasEmojisSuccess {
      data
    }
  }
}
    `;
export const RemoveEmojisDocument = gql`
    mutation removeEmojis($text: String!) {
  removeEmojis(text: $text) {
    __typename
    ... on BaseError {
      message
    }
    ... on MutationRemoveEmojisSuccess {
      data
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    searchOptionList(variables: SearchOptionListMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SearchOptionListMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SearchOptionListMutation>(SearchOptionListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'searchOptionList', 'mutation');
    },
    recommendOptionList(variables: RecommendOptionListMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RecommendOptionListMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RecommendOptionListMutation>(RecommendOptionListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'recommendOptionList', 'mutation');
    },
    createOptionList(variables: CreateOptionListMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateOptionListMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateOptionListMutation>(CreateOptionListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createOptionList', 'mutation');
    },
    sortOptionList(variables: SortOptionListMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SortOptionListMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SortOptionListMutation>(SortOptionListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sortOptionList', 'mutation');
    },
    filterOptionList(variables: FilterOptionListMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FilterOptionListMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<FilterOptionListMutation>(FilterOptionListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'filterOptionList', 'mutation');
    },
    searchStringList(variables: SearchStringListMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SearchStringListMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SearchStringListMutation>(SearchStringListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'searchStringList', 'mutation');
    },
    recommendStringList(variables: RecommendStringListMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RecommendStringListMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RecommendStringListMutation>(RecommendStringListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'recommendStringList', 'mutation');
    },
    createStringList(variables: CreateStringListMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateStringListMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateStringListMutation>(CreateStringListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createStringList', 'mutation');
    },
    sortStringList(variables: SortStringListMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SortStringListMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SortStringListMutation>(SortStringListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sortStringList', 'mutation');
    },
    filterStringList(variables: FilterStringListMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FilterStringListMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<FilterStringListMutation>(FilterStringListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'filterStringList', 'mutation');
    },
    suggestChatResponse(variables: SuggestChatResponseMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SuggestChatResponseMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SuggestChatResponseMutation>(SuggestChatResponseDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'suggestChatResponse', 'mutation');
    },
    suggestChatResponseIntents(variables: SuggestChatResponseIntentsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SuggestChatResponseIntentsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SuggestChatResponseIntentsMutation>(SuggestChatResponseIntentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'suggestChatResponseIntents', 'mutation');
    },
    suggestChatResponseMulti(variables: SuggestChatResponseMultiMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SuggestChatResponseMultiMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SuggestChatResponseMultiMutation>(SuggestChatResponseMultiDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'suggestChatResponseMulti', 'mutation');
    },
    isPlaintext(variables: IsPlaintextMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IsPlaintextMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<IsPlaintextMutation>(IsPlaintextDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'isPlaintext', 'mutation');
    },
    generatePlaintext(variables: GeneratePlaintextMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GeneratePlaintextMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<GeneratePlaintextMutation>(GeneratePlaintextDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'generatePlaintext', 'mutation');
    },
    hasSpellingErrors(variables: HasSpellingErrorsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<HasSpellingErrorsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<HasSpellingErrorsMutation>(HasSpellingErrorsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'hasSpellingErrors', 'mutation');
    },
    fixSpellingErrors(variables: FixSpellingErrorsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FixSpellingErrorsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<FixSpellingErrorsMutation>(FixSpellingErrorsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'fixSpellingErrors', 'mutation');
    },
    hasGrammarErrors(variables: HasGrammarErrorsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<HasGrammarErrorsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<HasGrammarErrorsMutation>(HasGrammarErrorsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'hasGrammarErrors', 'mutation');
    },
    fixGrammarErrors(variables: FixGrammarErrorsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FixGrammarErrorsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<FixGrammarErrorsMutation>(FixGrammarErrorsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'fixGrammarErrors', 'mutation');
    },
    hasProfanity(variables: HasProfanityMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<HasProfanityMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<HasProfanityMutation>(HasProfanityDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'hasProfanity', 'mutation');
    },
    fixProfanity(variables: FixProfanityMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FixProfanityMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<FixProfanityMutation>(FixProfanityDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'fixProfanity', 'mutation');
    },
    includesMentionOf(variables: IncludesMentionOfMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IncludesMentionOfMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<IncludesMentionOfMutation>(IncludesMentionOfDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'includesMentionOf', 'mutation');
    },
    isQuestion(variables: IsQuestionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IsQuestionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<IsQuestionMutation>(IsQuestionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'isQuestion', 'mutation');
    },
    suggestEdits(variables: SuggestEditsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SuggestEditsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SuggestEditsMutation>(SuggestEditsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'suggestEdits', 'mutation');
    },
    summarize(variables: SummarizeMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SummarizeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SummarizeMutation>(SummarizeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'summarize', 'mutation');
    },
    summarizeKeyPoints(variables: SummarizeKeyPointsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SummarizeKeyPointsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SummarizeKeyPointsMutation>(SummarizeKeyPointsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'summarizeKeyPoints', 'mutation');
    },
    elaborate(variables: ElaborateMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ElaborateMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ElaborateMutation>(ElaborateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'elaborate', 'mutation');
    },
    explain(variables: ExplainMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ExplainMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ExplainMutation>(ExplainDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'explain', 'mutation');
    },
    classify(variables: ClassifyMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ClassifyMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ClassifyMutation>(ClassifyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'classify', 'mutation');
    },
    getKeywords(variables: GetKeywordsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetKeywordsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetKeywordsMutation>(GetKeywordsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getKeywords', 'mutation');
    },
    generateKeywords(variables: GenerateKeywordsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GenerateKeywordsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<GenerateKeywordsMutation>(GenerateKeywordsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'generateKeywords', 'mutation');
    },
    getTopic(variables: GetTopicMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTopicMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTopicMutation>(GetTopicDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTopic', 'mutation');
    },
    pluralize(variables: PluralizeMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PluralizeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<PluralizeMutation>(PluralizeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pluralize', 'mutation');
    },
    plaintextToMarkdown(variables: PlaintextToMarkdownMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PlaintextToMarkdownMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<PlaintextToMarkdownMutation>(PlaintextToMarkdownDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'plaintextToMarkdown', 'mutation');
    },
    plaintextToHTML(variables: PlaintextToHtmlMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PlaintextToHtmlMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<PlaintextToHtmlMutation>(PlaintextToHtmlDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'plaintextToHTML', 'mutation');
    },
    toSpellingUSA(variables: ToSpellingUsaMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ToSpellingUsaMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ToSpellingUsaMutation>(ToSpellingUsaDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'toSpellingUSA', 'mutation');
    },
    toSpellingUK(variables: ToSpellingUkMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ToSpellingUkMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ToSpellingUkMutation>(ToSpellingUkDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'toSpellingUK', 'mutation');
    },
    suggestEmoji(variables: SuggestEmojiMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SuggestEmojiMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SuggestEmojiMutation>(SuggestEmojiDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'suggestEmoji', 'mutation');
    },
    isEmoji(variables: IsEmojiMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IsEmojiMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<IsEmojiMutation>(IsEmojiDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'isEmoji', 'mutation');
    },
    hasEmojis(variables: HasEmojisMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<HasEmojisMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<HasEmojisMutation>(HasEmojisDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'hasEmojis', 'mutation');
    },
    removeEmojis(variables: RemoveEmojisMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RemoveEmojisMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveEmojisMutation>(RemoveEmojisDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'removeEmojis', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;