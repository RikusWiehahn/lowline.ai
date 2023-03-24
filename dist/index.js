"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._ai = exports.api = void 0;
const graphql_request_1 = require("graphql-request");
const chat_1 = require("./functions/chat");
const emojis_1 = require("./functions/emojis");
const plaintext_1 = require("./functions/plaintext");
const search_recommend_1 = require("./functions/search_recommend");
const schema_1 = require("./schema");
const createClient = (url, isDev) => {
    const newClient = new graphql_request_1.GraphQLClient(`${url}/graphql`, {
        headers: {
            "api-key": API_KEY,
        },
        requestMiddleware(request) {
            if (isDev) {
                const info = JSON.parse(request.body);
                console.groupCollapsed(`%c ${info.operationName}`, "color:aqua");
                console.log(info.variables);
                console.groupEnd();
            }
            return request;
        },
        responseMiddleware(response) {
            if (isDev && response) {
                console.groupCollapsed(`%c response`, "color:yellow");
                console.log(response);
                console.groupEnd();
            }
            return response;
        },
    });
    return newClient;
};
const init = ({ apiKey, mode = "production", }) => {
    if (!apiKey) {
        console.log("No API key provided. Requests will have a delayed response.");
    }
    else {
        API_KEY = apiKey;
    }
    const isDev = mode === "development";
    const serverURL = isDev ? DEV_SERVER_URL : LIVE_SERVER_URL;
    client = createClient(serverURL, isDev);
    exports.api = (0, schema_1.getSdk)(client, clientWrapper);
};
const clientWrapper = (action, operationName, operationType) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield action();
        return res;
    }
    catch (e) {
        console.groupCollapsed(`%c ❌ ${operationName}`, "color:red");
        return {
            [operationName]: {
                message: e.message,
                data: null,
            },
        };
    }
});
let API_KEY = "";
const DEV_SERVER_URL = "http://localhost:4000";
const LIVE_SERVER_URL = "https://api.lowline.ai";
let client = createClient(LIVE_SERVER_URL, false);
exports.api = (0, schema_1.getSdk)(client, clientWrapper);
exports._ai = {
    init,
    searchOptionList: search_recommend_1.searchOptionList,
    recommendOptionList: search_recommend_1.recommendOptionList,
    createOptionList: search_recommend_1.createOptionList,
    sortOptionList: search_recommend_1.sortOptionList,
    filterOptionList: search_recommend_1.filterOptionList,
    searchStringList: search_recommend_1.searchStringList,
    recommendStringList: search_recommend_1.recommendStringList,
    createStringList: search_recommend_1.createStringList,
    sortStringList: search_recommend_1.sortStringList,
    filterStringList: search_recommend_1.filterStringList,
    suggestChatResponse: chat_1.suggestChatResponse,
    suggestChatResponseIntents: chat_1.suggestChatResponseIntents,
    suggestChatResponseMulti: chat_1.suggestChatResponseMulti,
    isPlaintext: plaintext_1.isPlaintext,
    generatePlaintext: plaintext_1.generatePlaintext,
    hasSpellingErrors: plaintext_1.hasSpellingErrors,
    fixSpellingErrors: plaintext_1.fixSpellingErrors,
    hasGrammarErrors: plaintext_1.hasGrammarErrors,
    fixGrammarErrors: plaintext_1.fixGrammarErrors,
    hasProfanity: plaintext_1.hasProfanity,
    fixProfanity: plaintext_1.fixProfanity,
    includesMentionOf: plaintext_1.includesMentionOf,
    isQuestion: plaintext_1.isQuestion,
    suggestEdits: plaintext_1.suggestEdits,
    summarize: plaintext_1.summarize,
    summarizeKeyPoints: plaintext_1.summarizeKeyPoints,
    elaborate: plaintext_1.elaborate,
    explain: plaintext_1.explain,
    classify: plaintext_1.classify,
    getKeywords: plaintext_1.getKeywords,
    generateKeywords: plaintext_1.generateKeywords,
    getTopic: plaintext_1.getTopic,
    pluralize: plaintext_1.pluralize,
    plaintextToMarkdown: plaintext_1.plaintextToMarkdown,
    plaintextToHTML: plaintext_1.plaintextToHTML,
    toSpellingUSA: plaintext_1.toSpellingUSA,
    toSpellingUK: plaintext_1.toSpellingUK,
    isEmoji: emojis_1.isEmoji,
    hasEmojis: emojis_1.hasEmojis,
    suggestEmoji: emojis_1.suggestEmoji,
    removeEmojis: emojis_1.removeEmojis,
};
exports.default = exports._ai;
