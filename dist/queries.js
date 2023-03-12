"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_request_1 = require("graphql-request");
const optionOutput = (0, graphql_request_1.gql) `
  fragment OptionOutputFlat on OptionOutput {
    id
    text
  }
`;
const searchOptionList = (0, graphql_request_1.gql) `
  mutation searchOptionList(
    $count: Int
    $search_term: String!
    $options: [OptionInput!]!
  ) {
    searchOptionList(
      count: $count
      search_term: $search_term
      options: $options
    ) {
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
`;
const recommendOptionList = (0, graphql_request_1.gql) `
  mutation recommendOptionList(
    $count: Int
    $options: [OptionInput!]!
    $interests: [OptionInput!]!
  ) {
    recommendOptionList(
      count: $count
      options: $options
      interests: $interests
    ) {
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
`;
const createOptionList = (0, graphql_request_1.gql) `
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
`;
const sortOptionList = (0, graphql_request_1.gql) `
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
`;
const filterOptionList = (0, graphql_request_1.gql) `
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
`;
const searchStringList = (0, graphql_request_1.gql) `
  mutation searchStringList(
    $search_term: String!
    $items: [String!]!
    $count: Int
  ) {
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
const recommendStringList = (0, graphql_request_1.gql) `
  mutation recommendStringList(
    $items: [String!]!
    $interests: [String!]!
    $count: Int
  ) {
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
const createStringList = (0, graphql_request_1.gql) `
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
const sortStringList = (0, graphql_request_1.gql) `
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
const filterStringList = (0, graphql_request_1.gql) `
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
const suggestChatResponse = (0, graphql_request_1.gql) `
  mutation suggestChatResponse(
    $intent: String!
    $chat_thread: [ChatThreadInput!]!
  ) {
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
const suggestChatResponseIntents = (0, graphql_request_1.gql) `
  mutation suggestChatResponseIntents(
    $count: Int!
    $chat_thread: [ChatThreadInput!]!
  ) {
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
const suggestChatResponseMulti = (0, graphql_request_1.gql) `
  mutation suggestChatResponseMulti(
    $count: Int!
    $intent: String!
    $chat_thread: [ChatThreadInput!]!
  ) {
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
const isPlaintext = (0, graphql_request_1.gql) `
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
const generatePlaintext = (0, graphql_request_1.gql) `
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
const hasSpellingErrors = (0, graphql_request_1.gql) `
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
const fixSpellingErrors = (0, graphql_request_1.gql) `
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
const hasGrammarErrors = (0, graphql_request_1.gql) `
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
const fixGrammarErrors = (0, graphql_request_1.gql) `
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
const hasProfanity = (0, graphql_request_1.gql) `
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
const fixProfanity = (0, graphql_request_1.gql) `
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
const includesMentionOf = (0, graphql_request_1.gql) `
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
const isQuestion = (0, graphql_request_1.gql) `
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
const suggestEdits = (0, graphql_request_1.gql) `
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
const summarize = (0, graphql_request_1.gql) `
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
const summarizeKeyPoints = (0, graphql_request_1.gql) `
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
const elaborate = (0, graphql_request_1.gql) `
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
const explain = (0, graphql_request_1.gql) `
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
const classify = (0, graphql_request_1.gql) `
  mutation classify(
    $item: String!
    $criteria: String!
    $categories: [OptionInput!]!
  ) {
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
const getKeywords = (0, graphql_request_1.gql) `
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
const generateKeywords = (0, graphql_request_1.gql) `
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
const getTopic = (0, graphql_request_1.gql) `
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
const pluralize = (0, graphql_request_1.gql) `
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
const plaintextToMarkdown = (0, graphql_request_1.gql) `
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
const plaintextToHTML = (0, graphql_request_1.gql) `
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
const toSpellingUSA = (0, graphql_request_1.gql) `
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
const toSpellingUK = (0, graphql_request_1.gql) `
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
const suggestEmoji = (0, graphql_request_1.gql) `
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
const isEmoji = (0, graphql_request_1.gql) `
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
const hasEmojis = (0, graphql_request_1.gql) `
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
const removeEmojis = (0, graphql_request_1.gql) `
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
