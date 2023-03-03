"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdk = exports.FilterOptionListDocument = exports.SortOptionListDocument = exports.CreateOptionListDocument = exports.RecommendOptionListDocument = exports.SearchOptionListDocument = exports.SearchStringListDocument = exports.OptionOutputFlatFragmentDoc = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.OptionOutputFlatFragmentDoc = (0, graphql_tag_1.default) `
    fragment OptionOutputFlat on OptionOutput {
  id
  text
}
    `;
exports.SearchStringListDocument = (0, graphql_tag_1.default) `
    mutation searchStringList($count: Int, $search_term: String!, $search_items: [String!]!) {
  searchStringList(
    count: $count
    search_term: $search_term
    search_items: $search_items
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
exports.SearchOptionListDocument = (0, graphql_tag_1.default) `
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
    ${exports.OptionOutputFlatFragmentDoc}`;
exports.RecommendOptionListDocument = (0, graphql_tag_1.default) `
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
    ${exports.OptionOutputFlatFragmentDoc}`;
exports.CreateOptionListDocument = (0, graphql_tag_1.default) `
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
    ${exports.OptionOutputFlatFragmentDoc}`;
exports.SortOptionListDocument = (0, graphql_tag_1.default) `
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
    ${exports.OptionOutputFlatFragmentDoc}`;
exports.FilterOptionListDocument = (0, graphql_tag_1.default) `
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
    ${exports.OptionOutputFlatFragmentDoc}`;
const defaultWrapper = (action, _operationName, _operationType) => action();
function getSdk(client, withWrapper = defaultWrapper) {
    return {
        searchStringList(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SearchStringListDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'searchStringList', 'mutation');
        },
        searchOptionList(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SearchOptionListDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'searchOptionList', 'mutation');
        },
        recommendOptionList(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.RecommendOptionListDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'recommendOptionList', 'mutation');
        },
        createOptionList(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateOptionListDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'createOptionList', 'mutation');
        },
        sortOptionList(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SortOptionListDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'sortOptionList', 'mutation');
        },
        filterOptionList(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.FilterOptionListDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'filterOptionList', 'mutation');
        }
    };
}
exports.getSdk = getSdk;
