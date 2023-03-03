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
const sortOptionList = (0, graphql_request_1.gql) `
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
const filterOptionList = (0, graphql_request_1.gql) `
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
const searchStringList = (0, graphql_request_1.gql) `
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
const recommendStringList = (0, graphql_request_1.gql) `
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
const createStringList = (0, graphql_request_1.gql) `
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
const sortStringList = (0, graphql_request_1.gql) `
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
const filterStringList = (0, graphql_request_1.gql) `
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
