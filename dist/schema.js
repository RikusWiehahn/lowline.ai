"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdk = exports.RemoveEmojisDocument = exports.HasEmojisDocument = exports.IsEmojiDocument = exports.SuggestEmojiDocument = exports.ToSpellingUkDocument = exports.ToSpellingUsaDocument = exports.PlaintextToHtmlDocument = exports.PlaintextToMarkdownDocument = exports.PluralizeDocument = exports.GetTopicDocument = exports.GenerateKeywordsDocument = exports.GetKeywordsDocument = exports.ClassifyDocument = exports.ExplainDocument = exports.ElaborateDocument = exports.SummarizeKeyPointsDocument = exports.SummarizeDocument = exports.SuggestEditsDocument = exports.IsQuestionDocument = exports.IncludesMentionOfDocument = exports.FixProfanityDocument = exports.HasProfanityDocument = exports.FixGrammarErrorsDocument = exports.HasGrammarErrorsDocument = exports.FixSpellingErrorsDocument = exports.HasSpellingErrorsDocument = exports.GeneratePlaintextDocument = exports.IsPlaintextDocument = exports.SuggestChatResponseMultiDocument = exports.SuggestChatResponseIntentsDocument = exports.SuggestChatResponseDocument = exports.FilterStringListDocument = exports.SortStringListDocument = exports.CreateStringListDocument = exports.RecommendStringListDocument = exports.SearchStringListDocument = exports.FilterOptionListDocument = exports.SortOptionListDocument = exports.CreateOptionListDocument = exports.RecommendOptionListDocument = exports.SearchOptionListDocument = exports.OptionOutputFlatFragmentDoc = void 0;
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
exports.SuggestChatResponseDocument = (0, graphql_tag_1.default) `
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
exports.SuggestChatResponseIntentsDocument = (0, graphql_tag_1.default) `
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
exports.SuggestChatResponseMultiDocument = (0, graphql_tag_1.default) `
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
exports.IsPlaintextDocument = (0, graphql_tag_1.default) `
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
exports.GeneratePlaintextDocument = (0, graphql_tag_1.default) `
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
exports.HasSpellingErrorsDocument = (0, graphql_tag_1.default) `
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
exports.FixSpellingErrorsDocument = (0, graphql_tag_1.default) `
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
exports.HasGrammarErrorsDocument = (0, graphql_tag_1.default) `
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
exports.FixGrammarErrorsDocument = (0, graphql_tag_1.default) `
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
exports.HasProfanityDocument = (0, graphql_tag_1.default) `
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
exports.FixProfanityDocument = (0, graphql_tag_1.default) `
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
exports.IncludesMentionOfDocument = (0, graphql_tag_1.default) `
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
exports.IsQuestionDocument = (0, graphql_tag_1.default) `
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
exports.SuggestEditsDocument = (0, graphql_tag_1.default) `
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
exports.SummarizeDocument = (0, graphql_tag_1.default) `
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
exports.SummarizeKeyPointsDocument = (0, graphql_tag_1.default) `
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
exports.ElaborateDocument = (0, graphql_tag_1.default) `
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
exports.ExplainDocument = (0, graphql_tag_1.default) `
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
exports.ClassifyDocument = (0, graphql_tag_1.default) `
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
exports.GetKeywordsDocument = (0, graphql_tag_1.default) `
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
exports.GenerateKeywordsDocument = (0, graphql_tag_1.default) `
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
exports.GetTopicDocument = (0, graphql_tag_1.default) `
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
exports.PluralizeDocument = (0, graphql_tag_1.default) `
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
exports.PlaintextToMarkdownDocument = (0, graphql_tag_1.default) `
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
exports.PlaintextToHtmlDocument = (0, graphql_tag_1.default) `
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
exports.ToSpellingUsaDocument = (0, graphql_tag_1.default) `
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
exports.ToSpellingUkDocument = (0, graphql_tag_1.default) `
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
exports.SuggestEmojiDocument = (0, graphql_tag_1.default) `
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
exports.IsEmojiDocument = (0, graphql_tag_1.default) `
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
exports.HasEmojisDocument = (0, graphql_tag_1.default) `
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
exports.RemoveEmojisDocument = (0, graphql_tag_1.default) `
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
        },
        suggestChatResponse(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SuggestChatResponseDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'suggestChatResponse', 'mutation');
        },
        suggestChatResponseIntents(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SuggestChatResponseIntentsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'suggestChatResponseIntents', 'mutation');
        },
        suggestChatResponseMulti(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SuggestChatResponseMultiDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'suggestChatResponseMulti', 'mutation');
        },
        isPlaintext(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.IsPlaintextDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'isPlaintext', 'mutation');
        },
        generatePlaintext(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GeneratePlaintextDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'generatePlaintext', 'mutation');
        },
        hasSpellingErrors(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.HasSpellingErrorsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'hasSpellingErrors', 'mutation');
        },
        fixSpellingErrors(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.FixSpellingErrorsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'fixSpellingErrors', 'mutation');
        },
        hasGrammarErrors(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.HasGrammarErrorsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'hasGrammarErrors', 'mutation');
        },
        fixGrammarErrors(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.FixGrammarErrorsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'fixGrammarErrors', 'mutation');
        },
        hasProfanity(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.HasProfanityDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'hasProfanity', 'mutation');
        },
        fixProfanity(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.FixProfanityDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'fixProfanity', 'mutation');
        },
        includesMentionOf(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.IncludesMentionOfDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'includesMentionOf', 'mutation');
        },
        isQuestion(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.IsQuestionDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'isQuestion', 'mutation');
        },
        suggestEdits(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SuggestEditsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'suggestEdits', 'mutation');
        },
        summarize(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SummarizeDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'summarize', 'mutation');
        },
        summarizeKeyPoints(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SummarizeKeyPointsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'summarizeKeyPoints', 'mutation');
        },
        elaborate(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ElaborateDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'elaborate', 'mutation');
        },
        explain(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ExplainDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'explain', 'mutation');
        },
        classify(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ClassifyDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'classify', 'mutation');
        },
        getKeywords(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetKeywordsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'getKeywords', 'mutation');
        },
        generateKeywords(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GenerateKeywordsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'generateKeywords', 'mutation');
        },
        getTopic(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetTopicDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'getTopic', 'mutation');
        },
        pluralize(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.PluralizeDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'pluralize', 'mutation');
        },
        plaintextToMarkdown(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.PlaintextToMarkdownDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'plaintextToMarkdown', 'mutation');
        },
        plaintextToHTML(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.PlaintextToHtmlDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'plaintextToHTML', 'mutation');
        },
        toSpellingUSA(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ToSpellingUsaDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'toSpellingUSA', 'mutation');
        },
        toSpellingUK(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ToSpellingUkDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'toSpellingUK', 'mutation');
        },
        suggestEmoji(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SuggestEmojiDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'suggestEmoji', 'mutation');
        },
        isEmoji(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.IsEmojiDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'isEmoji', 'mutation');
        },
        hasEmojis(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.HasEmojisDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'hasEmojis', 'mutation');
        },
        removeEmojis(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.RemoveEmojisDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'removeEmojis', 'mutation');
        }
    };
}
exports.getSdk = getSdk;
