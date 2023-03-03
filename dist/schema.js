"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdk = exports.FilterStringListDocument = exports.SortStringListDocument = exports.CreateStringListDocument = exports.RecommendStringListDocument = exports.SearchStringListDocument = exports.FilterOptionListDocument = exports.SortOptionListDocument = exports.CreateOptionListDocument = exports.RecommendOptionListDocument = exports.SearchOptionListDocument = exports.OptionOutputFlatFragmentDoc = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.OptionOutputFlatFragmentDoc = (0, graphql_tag_1.default) `
    fragment OptionOutputFlat on OptionOutput {
  id
  text
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
exports.SearchStringListDocument = (0, graphql_tag_1.default) `
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
exports.RecommendStringListDocument = (0, graphql_tag_1.default) `
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
exports.CreateStringListDocument = (0, graphql_tag_1.default) `
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
exports.SortStringListDocument = (0, graphql_tag_1.default) `
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
exports.FilterStringListDocument = (0, graphql_tag_1.default) `
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
const defaultWrapper = (action, _operationName, _operationType) => action();
function getSdk(client, withWrapper = defaultWrapper) {
    return {
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
        },
        searchStringList(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SearchStringListDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'searchStringList', 'mutation');
        },
        recommendStringList(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.RecommendStringListDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'recommendStringList', 'mutation');
        },
        createStringList(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateStringListDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'createStringList', 'mutation');
        },
        sortStringList(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SortStringListDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'sortStringList', 'mutation');
        },
        filterStringList(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.FilterStringListDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'filterStringList', 'mutation');
        }
    };
}
exports.getSdk = getSdk;
