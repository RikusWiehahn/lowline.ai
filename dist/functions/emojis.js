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
exports.removeEmojis = exports.hasEmojis = exports.isEmoji = exports.suggestEmoji = void 0;
const __1 = require("..");
const suggestEmoji = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const res = yield __1.api.suggestEmoji(options);
    if (((_a = res.suggestEmoji) === null || _a === void 0 ? void 0 : _a.__typename) === "MutationSuggestEmojiSuccess") {
        return {
            result: res.suggestEmoji.data,
            error: "",
        };
    }
    return {
        result: null,
        error: ((_b = res.suggestEmoji) === null || _b === void 0 ? void 0 : _b.message) || "Unknown error",
    };
});
exports.suggestEmoji = suggestEmoji;
const isEmoji = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d;
    const res = yield __1.api.isEmoji(options);
    if (((_c = res.isEmoji) === null || _c === void 0 ? void 0 : _c.__typename) === "MutationIsEmojiSuccess") {
        return {
            result: res.isEmoji.data,
            error: "",
        };
    }
    return {
        result: null,
        error: ((_d = res.isEmoji) === null || _d === void 0 ? void 0 : _d.message) || "Unknown error",
    };
});
exports.isEmoji = isEmoji;
const hasEmojis = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _e, _f;
    const res = yield __1.api.hasEmojis(options);
    if (((_e = res.hasEmojis) === null || _e === void 0 ? void 0 : _e.__typename) === "MutationHasEmojisSuccess") {
        return {
            result: res.hasEmojis.data,
            error: "",
        };
    }
    return {
        result: null,
        error: ((_f = res.hasEmojis) === null || _f === void 0 ? void 0 : _f.message) || "Unknown error",
    };
});
exports.hasEmojis = hasEmojis;
const removeEmojis = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _g, _h;
    const res = yield __1.api.removeEmojis(options);
    if (((_g = res.removeEmojis) === null || _g === void 0 ? void 0 : _g.__typename) === "MutationRemoveEmojisSuccess") {
        return {
            result: res.removeEmojis.data,
            error: "",
        };
    }
    return {
        result: null,
        error: ((_h = res.removeEmojis) === null || _h === void 0 ? void 0 : _h.message) || "Unknown error",
    };
});
exports.removeEmojis = removeEmojis;
