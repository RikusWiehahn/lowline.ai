import { gql } from "graphql-request";

//
//  ###### #####    ##    ####  #    # ###### #    # #####  ####
//  #      #    #  #  #  #    # ##  ## #      ##   #   #   #
//  #####  #    # #    # #      # ## # #####  # #  #   #    ####
//  #      #####  ###### #  ### #    # #      #  # #   #        #
//  #      #   #  #    # #    # #    # #      #   ##   #   #    #
//  #      #    # #    #  ####  #    # ###### #    #   #    ####

const optionOutput = gql`
  fragment OptionOutputFlat on OptionOutput {
    id
    text
  }
`;

//
//   ####  ######   ##   #####   ####  #    #     ####  #####  #####    #      #  ####  #####
//  #      #       #  #  #    # #    # #    #    #    # #    #   #      #      # #        #
//   ####  #####  #    # #    # #      ######    #    # #    #   #      #      #  ####    #
//       # #      ###### #####  #      #    #    #    # #####    #      #      #      #   #
//  #    # #      #    # #   #  #    # #    #    #    # #        #      #      # #    #   #
//   ####  ###### #    # #    #  ####  #    #     ####  #        #      ###### #  ####    #

const searchOptionList = gql`
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

//
//  #####  ######  ####   ####  #    # #    # ###### #    # #####      ####  #####  #####    #      #  ####  #####
//  #    # #      #    # #    # ##  ## ##  ## #      ##   # #    #    #    # #    #   #      #      # #        #
//  #    # #####  #      #    # # ## # # ## # #####  # #  # #    #    #    # #    #   #      #      #  ####    #
//  #####  #      #      #    # #    # #    # #      #  # # #    #    #    # #####    #      #      #      #   #
//  #   #  #      #    # #    # #    # #    # #      #   ## #    #    #    # #        #      #      # #    #   #
//  #    # ######  ####   ####  #    # #    # ###### #    # #####      ####  #        #      ###### #  ####    #

const recommendOptionList = gql`
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

//
//   ####  #####  ######   ##   ##### ######     ####  #####  #####    #      #  ####  #####
//  #    # #    # #       #  #    #   #         #    # #    #   #      #      # #        #
//  #      #    # #####  #    #   #   #####     #    # #    #   #      #      #  ####    #
//  #      #####  #      ######   #   #         #    # #####    #      #      #      #   #
//  #    # #   #  #      #    #   #   #         #    # #        #      #      # #    #   #
//   ####  #    # ###### #    #   #   ######     ####  #        #      ###### #  ####    #

const createOptionList = gql`
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

//
//   ####   ####  #####  #####     ####  #####  #####    #      #  ####  #####
//  #      #    # #    #   #      #    # #    #   #      #      # #        #
//   ####  #    # #    #   #      #    # #    #   #      #      #  ####    #
//       # #    # #####    #      #    # #####    #      #      #      #   #
//  #    # #    # #   #    #      #    # #        #      #      # #    #   #
//   ####   ####  #    #   #       ####  #        #      ###### #  ####    #

const sortOptionList = gql`
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

//
//  ###### # #      ##### ###### #####      ####  #####  #####    #      #  ####  #####
//  #      # #        #   #      #    #    #    # #    #   #      #      # #        #
//  #####  # #        #   #####  #    #    #    # #    #   #      #      #  ####    #
//  #      # #        #   #      #####     #    # #####    #      #      #      #   #
//  #      # #        #   #      #   #     #    # #        #      #      # #    #   #
//  #      # ######   #   ###### #    #     ####  #        #      ###### #  ####    #

const filterOptionList = gql`
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

//
//   ####  ######   ##   #####   ####  #    #     ####  ##### #####  # #    #  ####     #      #  ####  #####
//  #      #       #  #  #    # #    # #    #    #        #   #    # # ##   # #    #    #      # #        #
//   ####  #####  #    # #    # #      ######     ####    #   #    # # # #  # #         #      #  ####    #
//       # #      ###### #####  #      #    #         #   #   #####  # #  # # #  ###    #      #      #   #
//  #    # #      #    # #   #  #    # #    #    #    #   #   #   #  # #   ## #    #    #      # #    #   #
//   ####  ###### #    # #    #  ####  #    #     ####    #   #    # # #    #  ####     ###### #  ####    #

const searchStringList = gql`
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

//
//  #####  ######  ####   ####  #    # #    # ###### #    # #####      ####  ##### #####     #      #  ####  #####
//  #    # #      #    # #    # ##  ## ##  ## #      ##   # #    #    #        #   #    #    #      # #        #
//  #    # #####  #      #    # # ## # # ## # #####  # #  # #    #     ####    #   #    #    #      #  ####    #
//  #####  #      #      #    # #    # #    # #      #  # # #    #         #   #   #####     #      #      #   #
//  #   #  #      #    # #    # #    # #    # #      #   ## #    #    #    #   #   #   #     #      # #    #   #
//  #    # ######  ####   ####  #    # #    # ###### #    # #####      ####    #   #    #    ###### #  ####    #

const recommendStringList = gql`
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

//
//   ####  #####  ######   ##   ##### ######     ####  ##### #####     #      #  ####  #####
//  #    # #    # #       #  #    #   #         #        #   #    #    #      # #        #
//  #      #    # #####  #    #   #   #####      ####    #   #    #    #      #  ####    #
//  #      #####  #      ######   #   #              #   #   #####     #      #      #   #
//  #    # #   #  #      #    #   #   #         #    #   #   #   #     #      # #    #   #
//   ####  #    # ###### #    #   #   ######     ####    #   #    #    ###### #  ####    #

const createStringList = gql`
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

//
//   ####   ####  #####  #####     ####  ##### #####     #      #  ####  #####
//  #      #    # #    #   #      #        #   #    #    #      # #        #
//   ####  #    # #    #   #       ####    #   #    #    #      #  ####    #
//       # #    # #####    #           #   #   #####     #      #      #   #
//  #    # #    # #   #    #      #    #   #   #   #     #      # #    #   #
//   ####   ####  #    #   #       ####    #   #    #    ###### #  ####    #

const sortStringList = gql`
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

//
//  ###### # #      ##### ###### #####      ####  ##### #####     #      #  ####  #####
//  #      # #        #   #      #    #    #        #   #    #    #      # #        #
//  #####  # #        #   #####  #    #     ####    #   #    #    #      #  ####    #
//  #      # #        #   #      #####          #   #   #####     #      #      #   #
//  #      # #        #   #      #   #     #    #   #   #   #     #      # #    #   #
//  #      # ######   #   ###### #    #     ####    #   #    #    ###### #  ####    #

const filterStringList = gql`
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

//
//   ####  #    #  ####   ####  ######  ####  #####     ####  #    #   ##   #####    #####  ######  ####
//  #      #    # #    # #    # #      #        #      #    # #    #  #  #    #      #    # #      #
//   ####  #    # #      #      #####   ####    #      #      ###### #    #   #      #    # #####   ####
//       # #    # #  ### #  ### #           #   #      #      #    # ######   #      #####  #           #
//  #    # #    # #    # #    # #      #    #   #      #    # #    # #    #   #      #   #  #      #    #
//   ####   ####   ####   ####  ######  ####    #       ####  #    # #    #   #      #    # ######  ####

const suggestChatResponse = gql`
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

//
//   ####  #    #  ####   ####  ######  ####  #####     ####  #    #   ##   #####    #####  ######  ####     # #    # ##### ###### #    # #####  ####
//  #      #    # #    # #    # #      #        #      #    # #    #  #  #    #      #    # #      #         # ##   #   #   #      ##   #   #   #
//   ####  #    # #      #      #####   ####    #      #      ###### #    #   #      #    # #####   ####     # # #  #   #   #####  # #  #   #    ####
//       # #    # #  ### #  ### #           #   #      #      #    # ######   #      #####  #           #    # #  # #   #   #      #  # #   #        #
//  #    # #    # #    # #    # #      #    #   #      #    # #    # #    #   #      #   #  #      #    #    # #   ##   #   #      #   ##   #   #    #
//   ####   ####   ####   ####  ######  ####    #       ####  #    # #    #   #      #    # ######  ####     # #    #   #   ###### #    #   #    ####

const suggestChatResponseIntents = gql`
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

//
//   ####  #    #  ####   ####  ######  ####  #####     ####  #    #   ##   #####    #####  ######  ####     #    # #    # #      ##### #
//  #      #    # #    # #    # #      #        #      #    # #    #  #  #    #      #    # #      #         ##  ## #    # #        #   #
//   ####  #    # #      #      #####   ####    #      #      ###### #    #   #      #    # #####   ####     # ## # #    # #        #   #
//       # #    # #  ### #  ### #           #   #      #      #    # ######   #      #####  #           #    #    # #    # #        #   #
//  #    # #    # #    # #    # #      #    #   #      #    # #    # #    #   #      #   #  #      #    #    #    # #    # #        #   #
//   ####   ####   ####   ####  ######  ####    #       ####  #    # #    #   #      #    # ######  ####     #    #  ####  ######   #   #

const suggestChatResponseMulti = gql`
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

//
//  #  ####     #####  #        ##   # #    #    ##### ###### #    # #####
//  # #         #    # #       #  #  # ##   #      #   #       #  #    #
//  #  ####     #    # #      #    # # # #  #      #   #####    ##     #
//  #      #    #####  #      ###### # #  # #      #   #        ##     #
//  # #    #    #      #      #    # # #   ##      #   #       #  #    #
//  #  ####     #      ###### #    # # #    #      #   ###### #    #   #

const isPlaintext = gql`
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

//
//   ####  ###### #    # ###### #####    ##   ##### ######    #####  #        ##   # #    #    ##### ###### #    # #####
//  #    # #      ##   # #      #    #  #  #    #   #         #    # #       #  #  # ##   #      #   #       #  #    #
//  #      #####  # #  # #####  #    # #    #   #   #####     #    # #      #    # # # #  #      #   #####    ##     #
//  #  ### #      #  # # #      #####  ######   #   #         #####  #      ###### # #  # #      #   #        ##     #
//  #    # #      #   ## #      #   #  #    #   #   #         #      #      #    # # #   ##      #   #       #  #    #
//   ####  ###### #    # ###### #    # #    #   #   ######    #      ###### #    # # #    #      #   ###### #    #   #

const generatePlaintext = gql`
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

//
//  #    #   ##    ####      ####  #####  ###### #      #      # #    #  ####     ###### #####  #####   ####  #####   ####
//  #    #  #  #  #         #      #    # #      #      #      # ##   # #    #    #      #    # #    # #    # #    # #
//  ###### #    #  ####      ####  #    # #####  #      #      # # #  # #         #####  #    # #    # #    # #    #  ####
//  #    # ######      #         # #####  #      #      #      # #  # # #  ###    #      #####  #####  #    # #####       #
//  #    # #    # #    #    #    # #      #      #      #      # #   ## #    #    #      #   #  #   #  #    # #   #  #    #
//  #    # #    #  ####      ####  #      ###### ###### ###### # #    #  ####     ###### #    # #    #  ####  #    #  ####

const hasSpellingErrors = gql`
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

//
//  ###### # #    #     ####  #####  ###### #      #      # #    #  ####     ###### #####  #####   ####  #####   ####
//  #      #  #  #     #      #    # #      #      #      # ##   # #    #    #      #    # #    # #    # #    # #
//  #####  #   ##       ####  #    # #####  #      #      # # #  # #         #####  #    # #    # #    # #    #  ####
//  #      #   ##           # #####  #      #      #      # #  # # #  ###    #      #####  #####  #    # #####       #
//  #      #  #  #     #    # #      #      #      #      # #   ## #    #    #      #   #  #   #  #    # #   #  #    #
//  #      # #    #     ####  #      ###### ###### ###### # #    #  ####     ###### #    # #    #  ####  #    #  ####

const fixSpellingErrors = gql`
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

//
//  #    #   ##    ####      ####  #####    ##   #    # #    #   ##   #####     ###### #####  #####   ####  #####   ####
//  #    #  #  #  #         #    # #    #  #  #  ##  ## ##  ##  #  #  #    #    #      #    # #    # #    # #    # #
//  ###### #    #  ####     #      #    # #    # # ## # # ## # #    # #    #    #####  #    # #    # #    # #    #  ####
//  #    # ######      #    #  ### #####  ###### #    # #    # ###### #####     #      #####  #####  #    # #####       #
//  #    # #    # #    #    #    # #   #  #    # #    # #    # #    # #   #     #      #   #  #   #  #    # #   #  #    #
//  #    # #    #  ####      ####  #    # #    # #    # #    # #    # #    #    ###### #    # #    #  ####  #    #  ####

const hasGrammarErrors = gql`
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

//
//  ###### # #    #     ####  #####    ##   #    # #    #   ##   #####     ###### #####  #####   ####  #####   ####
//  #      #  #  #     #    # #    #  #  #  ##  ## ##  ##  #  #  #    #    #      #    # #    # #    # #    # #
//  #####  #   ##      #      #    # #    # # ## # # ## # #    # #    #    #####  #    # #    # #    # #    #  ####
//  #      #   ##      #  ### #####  ###### #    # #    # ###### #####     #      #####  #####  #    # #####       #
//  #      #  #  #     #    # #   #  #    # #    # #    # #    # #   #     #      #   #  #   #  #    # #   #  #    #
//  #      # #    #     ####  #    # #    # #    # #    # #    # #    #    ###### #    # #    #  ####  #    #  ####

const fixGrammarErrors = gql`
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

//
//  #    #   ##    ####     #####  #####   ####  ######   ##   #    # # ##### #   #
//  #    #  #  #  #         #    # #    # #    # #       #  #  ##   # #   #    # #
//  ###### #    #  ####     #    # #    # #    # #####  #    # # #  # #   #     #
//  #    # ######      #    #####  #####  #    # #      ###### #  # # #   #     #
//  #    # #    # #    #    #      #   #  #    # #      #    # #   ## #   #     #
//  #    # #    #  ####     #      #    #  ####  #      #    # #    # #   #     #

const hasProfanity = gql`
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

//
//  ###### # #    #    #####  #####   ####  ######   ##   #    # # ##### #   #
//  #      #  #  #     #    # #    # #    # #       #  #  ##   # #   #    # #
//  #####  #   ##      #    # #    # #    # #####  #    # # #  # #   #     #
//  #      #   ##      #####  #####  #    # #      ###### #  # # #   #     #
//  #      #  #  #     #      #   #  #    # #      #    # #   ## #   #     #
//  #      # #    #    #      #    #  ####  #      #    # #    # #   #     #

const fixProfanity = gql`
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

//
//  # #    #  ####  #      #    # #####  ######  ####     #    # ###### #    # ##### #  ####  #    #     ####  ######
//  # ##   # #    # #      #    # #    # #      #         ##  ## #      ##   #   #   # #    # ##   #    #    # #
//  # # #  # #      #      #    # #    # #####   ####     # ## # #####  # #  #   #   # #    # # #  #    #    # #####
//  # #  # # #      #      #    # #    # #           #    #    # #      #  # #   #   # #    # #  # #    #    # #
//  # #   ## #    # #      #    # #    # #      #    #    #    # #      #   ##   #   # #    # #   ##    #    # #
//  # #    #  ####  ######  ####  #####  ######  ####     #    # ###### #    #   #   #  ####  #    #     ####  #

const includesMentionOf = gql`
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

//
//  #  ####      ####  #    # ######  ####  ##### #  ####  #    #
//  # #         #    # #    # #      #        #   # #    # ##   #
//  #  ####     #    # #    # #####   ####    #   # #    # # #  #
//  #      #    #  # # #    # #           #   #   # #    # #  # #
//  # #    #    #   #  #    # #      #    #   #   # #    # #   ##
//  #  ####      ### #  ####  ######  ####    #   #  ####  #    #

const isQuestion = gql`
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

//
//   ####  #    #  ####   ####  ######  ####  #####    ###### #####  # #####  ####
//  #      #    # #    # #    # #      #        #      #      #    # #   #   #
//   ####  #    # #      #      #####   ####    #      #####  #    # #   #    ####
//       # #    # #  ### #  ### #           #   #      #      #    # #   #        #
//  #    # #    # #    # #    # #      #    #   #      #      #    # #   #   #    #
//   ####   ####   ####   ####  ######  ####    #      ###### #####  #   #    ####

const suggestEdits = gql`
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

//
//   ####  #    # #    # #    # ###### #####  # ###### ######
//  #      #    # ##  ## ##  ## #      #    # #     #  #
//   ####  #    # # ## # # ## # #####  #    # #    #   #####
//       # #    # #    # #    # #      #####  #   #    #
//  #    # #    # #    # #    # #      #   #  #  #     #
//   ####   ####  #    # #    # ###### #    # # ###### ######

const summarize = gql`
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

//
//   ####  #    # #    # #    # ###### #####  # ###### ######    #    # ###### #   #    #####   ####  # #    # #####  ####
//  #      #    # ##  ## ##  ## #      #    # #     #  #         #   #  #       # #     #    # #    # # ##   #   #   #
//   ####  #    # # ## # # ## # #####  #    # #    #   #####     ####   #####    #      #    # #    # # # #  #   #    ####
//       # #    # #    # #    # #      #####  #   #    #         #  #   #        #      #####  #    # # #  # #   #        #
//  #    # #    # #    # #    # #      #   #  #  #     #         #   #  #        #      #      #    # # #   ##   #   #    #
//   ####   ####  #    # #    # ###### #    # # ###### ######    #    # ######   #      #       ####  # #    #   #    ####

const summarizeKeyPoints = gql`
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

//
//  ###### #        ##   #####   ####  #####    ##   ##### ######
//  #      #       #  #  #    # #    # #    #  #  #    #   #
//  #####  #      #    # #####  #    # #    # #    #   #   #####
//  #      #      ###### #    # #    # #####  ######   #   #
//  #      #      #    # #    # #    # #   #  #    #   #   #
//  ###### ###### #    # #####   ####  #    # #    #   #   ######

const elaborate = gql`
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

//
//  ###### #    # #####  #        ##   # #    #
//  #       #  #  #    # #       #  #  # ##   #
//  #####    ##   #    # #      #    # # # #  #
//  #        ##   #####  #      ###### # #  # #
//  #       #  #  #      #      #    # # #   ##
//  ###### #    # #      ###### #    # # #    #

const explain = gql`
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

//
//   ####  #        ##    ####   ####  # ###### #   #
//  #    # #       #  #  #      #      # #       # #
//  #      #      #    #  ####   ####  # #####    #
//  #      #      ######      #      # # #        #
//  #    # #      #    # #    # #    # # #        #
//   ####  ###### #    #  ####   ####  # #        #

const classify = gql`
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

//
//   ####  ###### #####    #    # ###### #   # #    #  ####  #####  #####   ####
//  #    # #        #      #   #  #       # #  #    # #    # #    # #    # #
//  #      #####    #      ####   #####    #   #    # #    # #    # #    #  ####
//  #  ### #        #      #  #   #        #   # ## # #    # #####  #    #      #
//  #    # #        #      #   #  #        #   ##  ## #    # #   #  #    # #    #
//   ####  ######   #      #    # ######   #   #    #  ####  #    # #####   ####

const getKeywords = gql`
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

//
//   ####  ###### #    # ###### #####    ##   ##### ######    #    # ###### #   # #    #  ####  #####  #####   ####
//  #    # #      ##   # #      #    #  #  #    #   #         #   #  #       # #  #    # #    # #    # #    # #
//  #      #####  # #  # #####  #    # #    #   #   #####     ####   #####    #   #    # #    # #    # #    #  ####
//  #  ### #      #  # # #      #####  ######   #   #         #  #   #        #   # ## # #    # #####  #    #      #
//  #    # #      #   ## #      #   #  #    #   #   #         #   #  #        #   ##  ## #    # #   #  #    # #    #
//   ####  ###### #    # ###### #    # #    #   #   ######    #    # ######   #   #    #  ####  #    # #####   ####

const generateKeywords = gql`
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

//
//   ####  ###### #####    #####  ####  #####  #  ####
//  #    # #        #        #   #    # #    # # #    #
//  #      #####    #        #   #    # #    # # #
//  #  ### #        #        #   #    # #####  # #
//  #    # #        #        #   #    # #      # #    #
//   ####  ######   #        #    ####  #      #  ####

const getTopic = gql`
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

//
//  #####  #      #    # #####    ##   #      # ###### ######
//  #    # #      #    # #    #  #  #  #      #     #  #
//  #    # #      #    # #    # #    # #      #    #   #####
//  #####  #      #    # #####  ###### #      #   #    #
//  #      #      #    # #   #  #    # #      #  #     #
//  #      ######  ####  #    # #    # ###### # ###### ######

const pluralize = gql`
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

//
//   ####   ####  #    # #    # ###### #####  #####    #####  ####     #    #   ##   #####  #    # #####   ####  #    # #    #
//  #    # #    # ##   # #    # #      #    #   #        #   #    #    ##  ##  #  #  #    # #   #  #    # #    # #    # ##   #
//  #      #    # # #  # #    # #####  #    #   #        #   #    #    # ## # #    # #    # ####   #    # #    # #    # # #  #
//  #      #    # #  # # #    # #      #####    #        #   #    #    #    # ###### #####  #  #   #    # #    # # ## # #  # #
//  #    # #    # #   ##  #  #  #      #   #    #        #   #    #    #    # #    # #   #  #   #  #    # #    # ##  ## #   ##
//   ####   ####  #    #   ##   ###### #    #   #        #    ####     #    # #    # #    # #    # #####   ####  #    # #    #

const plaintextToMarkdown = gql`
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

//
//   ####   ####  #    # #    # ###### #####  #####    #####  ####     #    # ##### #    # #
//  #    # #    # ##   # #    # #      #    #   #        #   #    #    #    #   #   ##  ## #
//  #      #    # # #  # #    # #####  #    #   #        #   #    #    ######   #   # ## # #
//  #      #    # #  # # #    # #      #####    #        #   #    #    #    #   #   #    # #
//  #    # #    # #   ##  #  #  #      #   #    #        #   #    #    #    #   #   #    # #
//   ####   ####  #    #   ##   ###### #    #   #        #    ####     #    #   #   #    # ######

const plaintextToHTML = gql`
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

//
//  #####  ####     #    #  ####    ##       ####  #####  ###### #      #      # #    #  ####
//    #   #    #    #    # #       #  #     #      #    # #      #      #      # ##   # #    #
//    #   #    #    #    #  ####  #    #     ####  #    # #####  #      #      # # #  # #
//    #   #    #    #    #      # ######         # #####  #      #      #      # #  # # #  ###
//    #   #    #    #    # #    # #    #    #    # #      #      #      #      # #   ## #    #
//    #    ####      ####   ####  #    #     ####  #      ###### ###### ###### # #    #  ####

const toSpellingUSA = gql`
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

//
//  #####  ####     #    # #    #     ####  #####  ###### #      #      # #    #  ####
//    #   #    #    #    # #   #     #      #    # #      #      #      # ##   # #    #
//    #   #    #    #    # ####       ####  #    # #####  #      #      # # #  # #
//    #   #    #    #    # #  #           # #####  #      #      #      # #  # # #  ###
//    #   #    #    #    # #   #     #    # #      #      #      #      # #   ## #    #
//    #    ####      ####  #    #     ####  #      ###### ###### ###### # #    #  ####

const toSpellingUK = gql`
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

//
//   ####  #    #  ####   ####  ######  ####  #####    ###### #    #  ####       # #
//  #      #    # #    # #    # #      #        #      #      ##  ## #    #      # #
//   ####  #    # #      #      #####   ####    #      #####  # ## # #    #      # #
//       # #    # #  ### #  ### #           #   #      #      #    # #    #      # #
//  #    # #    # #    # #    # #      #    #   #      #      #    # #    # #    # #
//   ####   ####   ####   ####  ######  ####    #      ###### #    #  ####   ####  #

const suggestEmoji = gql`
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

//
//  #  ####     ###### #    #  ####       # #
//  # #         #      ##  ## #    #      # #
//  #  ####     #####  # ## # #    #      # #
//  #      #    #      #    # #    #      # #
//  # #    #    #      #    # #    # #    # #
//  #  ####     ###### #    #  ####   ####  #

const isEmoji = gql`
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

//
//  #    #   ##    ####     ###### #    #  ####       # #  ####
//  #    #  #  #  #         #      ##  ## #    #      # # #
//  ###### #    #  ####     #####  # ## # #    #      # #  ####
//  #    # ######      #    #      #    # #    #      # #      #
//  #    # #    # #    #    #      #    # #    # #    # # #    #
//  #    # #    #  ####     ###### #    #  ####   ####  #  ####

const hasEmojis = gql`
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

//
//  #####  ###### #    #  ####  #    # ######    ###### #    #  ####       # #  ####
//  #    # #      ##  ## #    # #    # #         #      ##  ## #    #      # # #
//  #    # #####  # ## # #    # #    # #####     #####  # ## # #    #      # #  ####
//  #####  #      #    # #    # #    # #         #      #    # #    #      # #      #
//  #   #  #      #    # #    #  #  #  #         #      #    # #    # #    # # #    #
//  #    # ###### #    #  ####    ##   ######    ###### #    #  ####   ####  #  ####

const removeEmojis = gql`
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
