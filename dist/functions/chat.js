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
exports.suggestChatResponseMulti = exports.suggestChatResponseIntents = exports.suggestChatResponse = void 0;
const __1 = require("..");
const suggestChatResponse = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const res = yield __1.api.suggestChatResponse(options);
    if (((_a = res.suggestChatResponse) === null || _a === void 0 ? void 0 : _a.__typename) === "MutationSuggestChatResponseSuccess") {
        return {
            result: res.suggestChatResponse.data,
            error: "",
        };
    }
    return {
        result: null,
        error: ((_b = res.suggestChatResponse) === null || _b === void 0 ? void 0 : _b.message) || "Unknown error",
    };
});
exports.suggestChatResponse = suggestChatResponse;
const suggestChatResponseIntents = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d;
    const res = yield __1.api.suggestChatResponseIntents(options);
    if (((_c = res.suggestChatResponseIntents) === null || _c === void 0 ? void 0 : _c.__typename) ===
        "MutationSuggestChatResponseIntentsSuccess") {
        return {
            result: res.suggestChatResponseIntents.data,
            error: "",
        };
    }
    return {
        result: [],
        error: ((_d = res.suggestChatResponseIntents) === null || _d === void 0 ? void 0 : _d.message) || "Unknown error",
    };
});
exports.suggestChatResponseIntents = suggestChatResponseIntents;
const suggestChatResponseMulti = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _e, _f;
    const res = yield __1.api.suggestChatResponseMulti(options);
    if (((_e = res.suggestChatResponseMulti) === null || _e === void 0 ? void 0 : _e.__typename) ===
        "MutationSuggestChatResponseMultiSuccess") {
        return {
            result: res.suggestChatResponseMulti.data,
            error: "",
        };
    }
    return {
        result: [],
        error: ((_f = res.suggestChatResponseMulti) === null || _f === void 0 ? void 0 : _f.message) || "Unknown error",
    };
});
exports.suggestChatResponseMulti = suggestChatResponseMulti;
