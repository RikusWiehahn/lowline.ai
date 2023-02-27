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
exports._ai = void 0;
const schema_1 = require("./schema");
const graphql_request_1 = require("graphql-request");
const createClient = (url, isDev) => {
    client = new graphql_request_1.GraphQLClient(`${url}/graphql`, {
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
    return client;
};
let API_KEY = "";
const DEV_SERVER_URL = "https://localhost:4000";
const LIVE_SERVER_URL = "https://api.lowline.ai";
let client = createClient(LIVE_SERVER_URL, false);
const init = ({ apiKey, mode = "production", }) => {
    if (!apiKey)
        throw new Error("lowline.ai: API key is required");
    API_KEY = apiKey;
    const isDev = mode === "development";
    const serverURL = isDev ? DEV_SERVER_URL : LIVE_SERVER_URL;
    client = createClient(serverURL, isDev);
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
const api = (0, schema_1.getSdk)(client, clientWrapper);
const stringListSearch = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const res = yield api.stringListSearch(options);
    if (((_a = res.stringListSearch) === null || _a === void 0 ? void 0 : _a.__typename) === "MutationStringListSearchSuccess") {
        return {
            data: res.stringListSearch.data,
            error: "",
        };
    }
    return {
        data: [],
        error: ((_b = res.stringListSearch) === null || _b === void 0 ? void 0 : _b.message) || "Unknown error",
    };
});
const optionListSearch = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d;
    const res = yield api.optionListSearch(options);
    if (((_c = res.optionListSearch) === null || _c === void 0 ? void 0 : _c.__typename) === "MutationOptionListSearchSuccess") {
        return {
            data: res.optionListSearch.data,
            error: "",
        };
    }
    return {
        data: [],
        error: ((_d = res.optionListSearch) === null || _d === void 0 ? void 0 : _d.message) || "Unknown error",
    };
});
exports._ai = {
    init,
    stringListSearch,
    optionListSearch,
};
