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
  mutation createOptionList(
    $count: Int!
    $option_type: String!
  ) {
    createOptionList(
      count: $count
      option_type: $option_type
    ) {
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
  mutation sortOptionList(
    $criteria: String!
    $options: [OptionInput!]!
  ) {
    sortOptionList(
      criteria: $criteria
      options: $options
    ) {
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
  mutation filterOptionList(
    $criteria: String!
    $options: [OptionInput!]!
  ) {
    filterOptionList(
      criteria: $criteria
      options: $options
    ) {
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
    searchStringList(
      search_term: $search_term
      items: $items
      count: $count
    ) {
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
    recommendStringList(
      items: $items
      interests: $interests
      count: $count
    ) {
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
  mutation createStringList(
    $count: Int!
    $item_type: String!
  ) {
    createStringList(
      count: $count
      item_type: $item_type
    ) {
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
  mutation sortStringList(
    $criteria: String!
    $items: [String!]!
  ) {
    sortStringList(
      criteria: $criteria
      items: $items
    ) {
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
  mutation filterStringList(
    $criteria: String!
    $items: [String!]!
  ) {
    filterStringList(
      criteria: $criteria
      items: $items
    ) {
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
    suggestChatResponse(
      intent: $intent
      chat_thread: $chat_thread
    ) {
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
    suggestChatResponseIntents(
      count: $count
      chat_thread: $chat_thread
    ) {
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

