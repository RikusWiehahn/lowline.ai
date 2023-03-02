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
//   ####  ##### #####  # #    #  ####     #      #  ####  #####     ####  ######   ##   #####   ####  #    #
//  #        #   #    # # ##   # #    #    #      # #        #      #      #       #  #  #    # #    # #    #
//   ####    #   #    # # # #  # #         #      #  ####    #       ####  #####  #    # #    # #      ######
//       #   #   #####  # #  # # #  ###    #      #      #   #           # #      ###### #####  #      #    #
//  #    #   #   #   #  # #   ## #    #    #      # #    #   #      #    # #      #    # #   #  #    # #    #
//   ####    #   #    # # #    #  ####     ###### #  ####    #       ####  ###### #    # #    #  ####  #    #

const stringListSearch = gql`
  mutation stringListSearch(
    $count: Int
    $search_term: String!
    $search_items: [String!]!
  ) {
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

//
//   ####  #####  ##### #  ####  #    #    #      #  ####  #####     ####  ######   ##   #####   ####  #    #
//  #    # #    #   #   # #    # ##   #    #      # #        #      #      #       #  #  #    # #    # #    #
//  #    # #    #   #   # #    # # #  #    #      #  ####    #       ####  #####  #    # #    # #      ######
//  #    # #####    #   # #    # #  # #    #      #      #   #           # #      ###### #####  #      #    #
//  #    # #        #   # #    # #   ##    #      # #    #   #      #    # #      #    # #   #  #    # #    #
//   ####  #        #   #  ####  #    #    ###### #  ####    #       ####  ###### #    # #    #  ####  #    #

const optionListSearch = gql`
  mutation optionListSearch(
    $count: Int
    $search_term: String!
    $search_items: [OptionInput!]!
  ) {
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
`;