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
exports.toSpellingUK = exports.toSpellingUSA = exports.plaintextToHTML = exports.plaintextToMarkdown = exports.pluralize = exports.getTopic = exports.generateKeywords = exports.getKeywords = exports.classify = exports.explain = exports.ExplanationLevels = exports.elaborate = exports.summarizeKeyPoints = exports.summarize = exports.suggestEdits = exports.isQuestion = exports.includesMentionOf = exports.fixProfanity = exports.hasProfanity = exports.fixGrammarErrors = exports.hasGrammarErrors = exports.fixSpellingErrors = exports.hasSpellingErrors = exports.generatePlaintext = exports.isPlaintext = void 0;
const __1 = require("..");
const isPlaintext = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const res = yield __1.api.isPlaintext(options);
    if (((_a = res.isPlaintext) === null || _a === void 0 ? void 0 : _a.__typename) === "MutationIsPlaintextSuccess") {
        return {
            result: res.isPlaintext.data,
            error: "",
        };
    }
    return {
        result: null,
        error: ((_b = res.isPlaintext) === null || _b === void 0 ? void 0 : _b.message) || "Unknown error",
    };
});
exports.isPlaintext = isPlaintext;
const generatePlaintext = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d;
    const res = yield __1.api.generatePlaintext(options);
    if (((_c = res.generatePlaintext) === null || _c === void 0 ? void 0 : _c.__typename) === "MutationGeneratePlaintextSuccess") {
        return {
            result: res.generatePlaintext.data,
            error: "",
        };
    }
    return {
        result: null,
        error: ((_d = res.generatePlaintext) === null || _d === void 0 ? void 0 : _d.message) || "Unknown error",
    };
});
exports.generatePlaintext = generatePlaintext;
const hasSpellingErrors = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _e, _f;
    const res = yield __1.api.hasSpellingErrors(options);
    if (((_e = res.hasSpellingErrors) === null || _e === void 0 ? void 0 : _e.__typename) === "MutationHasSpellingErrorsSuccess") {
        return {
            result: res.hasSpellingErrors.data,
            error: "",
        };
    }
    return {
        result: null,
        error: ((_f = res.hasSpellingErrors) === null || _f === void 0 ? void 0 : _f.message) || "Unknown error",
    };
});
exports.hasSpellingErrors = hasSpellingErrors;
const fixSpellingErrors = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _g, _h;
    const res = yield __1.api.fixSpellingErrors(options);
    if (((_g = res.fixSpellingErrors) === null || _g === void 0 ? void 0 : _g.__typename) === "MutationFixSpellingErrorsSuccess") {
        return {
            result: res.fixSpellingErrors.data,
            error: "",
        };
    }
    return {
        result: null,
        error: ((_h = res.fixSpellingErrors) === null || _h === void 0 ? void 0 : _h.message) || "Unknown error",
    };
});
exports.fixSpellingErrors = fixSpellingErrors;
const hasGrammarErrors = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _j, _k;
    const res = yield __1.api.hasGrammarErrors(options);
    if (((_j = res.hasGrammarErrors) === null || _j === void 0 ? void 0 : _j.__typename) === "MutationHasGrammarErrorsSuccess") {
        return {
            result: res.hasGrammarErrors.data,
            error: "",
        };
    }
    return {
        result: null,
        error: ((_k = res.hasGrammarErrors) === null || _k === void 0 ? void 0 : _k.message) || "Unknown error",
    };
});
exports.hasGrammarErrors = hasGrammarErrors;
const fixGrammarErrors = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _l, _m;
    const res = yield __1.api.fixGrammarErrors(options);
    if (((_l = res.fixGrammarErrors) === null || _l === void 0 ? void 0 : _l.__typename) === "MutationFixGrammarErrorsSuccess") {
        return {
            result: res.fixGrammarErrors.data,
            error: "",
        };
    }
    return {
        result: null,
        error: ((_m = res.fixGrammarErrors) === null || _m === void 0 ? void 0 : _m.message) || "Unknown error",
    };
});
exports.fixGrammarErrors = fixGrammarErrors;
const hasProfanity = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _o, _p;
    const res = yield __1.api.hasProfanity(options);
    if (((_o = res.hasProfanity) === null || _o === void 0 ? void 0 : _o.__typename) === "MutationHasProfanitySuccess") {
        return {
            result: res.hasProfanity.data,
            error: "",
        };
    }
    return {
        result: null,
        error: ((_p = res.hasProfanity) === null || _p === void 0 ? void 0 : _p.message) || "Unknown error",
    };
});
exports.hasProfanity = hasProfanity;
const fixProfanity = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _q, _r;
    const res = yield __1.api.fixProfanity(options);
    if (((_q = res.fixProfanity) === null || _q === void 0 ? void 0 : _q.__typename) === "MutationFixProfanitySuccess") {
        return {
            result: res.fixProfanity.data,
            error: "",
        };
    }
    return {
        result: null,
        error: ((_r = res.fixProfanity) === null || _r === void 0 ? void 0 : _r.message) || "Unknown error",
    };
});
exports.fixProfanity = fixProfanity;
const includesMentionOf = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _s, _t;
    const res = yield __1.api.includesMentionOf(options);
    if (((_s = res.includesMentionOf) === null || _s === void 0 ? void 0 : _s.__typename) === "MutationIncludesMentionOfSuccess") {
        return {
            result: res.includesMentionOf.data,
            error: "",
        };
    }
    return {
        result: null,
        error: ((_t = res.includesMentionOf) === null || _t === void 0 ? void 0 : _t.message) || "Unknown error",
    };
});
exports.includesMentionOf = includesMentionOf;
const isQuestion = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _u, _v;
    const res = yield __1.api.isQuestion(options);
    if (((_u = res.isQuestion) === null || _u === void 0 ? void 0 : _u.__typename) === "MutationIsQuestionSuccess") {
        return {
            result: res.isQuestion.data,
            error: "",
        };
    }
    return {
        result: null,
        error: ((_v = res.isQuestion) === null || _v === void 0 ? void 0 : _v.message) || "Unknown error",
    };
});
exports.isQuestion = isQuestion;
const suggestEdits = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _w, _x;
    const res = yield __1.api.suggestEdits(options);
    if (((_w = res.suggestEdits) === null || _w === void 0 ? void 0 : _w.__typename) === "MutationSuggestEditsSuccess") {
        return {
            result: res.suggestEdits.data,
            error: "",
        };
    }
    return {
        result: null,
        error: ((_x = res.suggestEdits) === null || _x === void 0 ? void 0 : _x.message) || "Unknown error",
    };
});
exports.suggestEdits = suggestEdits;
const summarize = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _y, _z;
    const res = yield __1.api.summarize(options);
    if (((_y = res.summarize) === null || _y === void 0 ? void 0 : _y.__typename) === "MutationSummarizeSuccess") {
        return {
            result: res.summarize.data,
            error: "",
        };
    }
    return {
        result: null,
        error: ((_z = res.summarize) === null || _z === void 0 ? void 0 : _z.message) || "Unknown error",
    };
});
exports.summarize = summarize;
const summarizeKeyPoints = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _0, _1;
    const res = yield __1.api.summarizeKeyPoints(options);
    if (((_0 = res.summarizeKeyPoints) === null || _0 === void 0 ? void 0 : _0.__typename) === "MutationSummarizeKeyPointsSuccess") {
        return {
            result: res.summarizeKeyPoints.data,
            error: "",
        };
    }
    return {
        result: null,
        error: ((_1 = res.summarizeKeyPoints) === null || _1 === void 0 ? void 0 : _1.message) || "Unknown error",
    };
});
exports.summarizeKeyPoints = summarizeKeyPoints;
const elaborate = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _2, _3;
    const res = yield __1.api.elaborate(options);
    if (((_2 = res.elaborate) === null || _2 === void 0 ? void 0 : _2.__typename) === "MutationElaborateSuccess") {
        return {
            result: res.elaborate.data,
            error: "",
        };
    }
    return {
        result: null,
        error: ((_3 = res.elaborate) === null || _3 === void 0 ? void 0 : _3.message) || "Unknown error",
    };
});
exports.elaborate = elaborate;
exports.ExplanationLevels = {
    beginner: "beginner",
    novice: "novice",
    intermediate: "intermediate",
    advanced: "advanced",
    expert: "expert",
};
const explain = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _4, _5;
    const res = yield __1.api.explain(options);
    if (((_4 = res.explain) === null || _4 === void 0 ? void 0 : _4.__typename) === "MutationExplainSuccess") {
        return {
            result: res.explain.data,
            error: "",
        };
    }
    return {
        result: null,
        error: ((_5 = res.explain) === null || _5 === void 0 ? void 0 : _5.message) || "Unknown error",
    };
});
exports.explain = explain;
const classify = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _6, _7;
    const res = yield __1.api.classify(options);
    if (((_6 = res.classify) === null || _6 === void 0 ? void 0 : _6.__typename) === "MutationClassifySuccess") {
        return {
            result: res.classify.data,
            error: "",
        };
    }
    return {
        result: null,
        error: ((_7 = res.classify) === null || _7 === void 0 ? void 0 : _7.message) || "Unknown error",
    };
});
exports.classify = classify;
const getKeywords = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _8, _9;
    const res = yield __1.api.getKeywords(options);
    if (((_8 = res.getKeywords) === null || _8 === void 0 ? void 0 : _8.__typename) === "MutationGetKeywordsSuccess") {
        return {
            result: res.getKeywords.data,
            error: "",
        };
    }
    return {
        result: [],
        error: ((_9 = res.getKeywords) === null || _9 === void 0 ? void 0 : _9.message) || "Unknown error",
    };
});
exports.getKeywords = getKeywords;
const generateKeywords = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _10, _11;
    const res = yield __1.api.generateKeywords(options);
    if (((_10 = res.generateKeywords) === null || _10 === void 0 ? void 0 : _10.__typename) === "MutationGenerateKeywordsSuccess") {
        return {
            result: res.generateKeywords.data,
            error: "",
        };
    }
    return {
        result: [],
        error: ((_11 = res.generateKeywords) === null || _11 === void 0 ? void 0 : _11.message) || "Unknown error",
    };
});
exports.generateKeywords = generateKeywords;
const getTopic = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _12, _13;
    const res = yield __1.api.getTopic(options);
    if (((_12 = res.getTopic) === null || _12 === void 0 ? void 0 : _12.__typename) === "MutationGetTopicSuccess") {
        return {
            result: res.getTopic.data,
            error: "",
        };
    }
    return {
        result: null,
        error: ((_13 = res.getTopic) === null || _13 === void 0 ? void 0 : _13.message) || "Unknown error",
    };
});
exports.getTopic = getTopic;
const pluralize = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _14, _15;
    const res = yield __1.api.pluralize(options);
    if (((_14 = res.pluralize) === null || _14 === void 0 ? void 0 : _14.__typename) === "MutationPluralizeSuccess") {
        return {
            result: res.pluralize.data,
            error: "",
        };
    }
    return {
        result: null,
        error: ((_15 = res.pluralize) === null || _15 === void 0 ? void 0 : _15.message) || "Unknown error",
    };
});
exports.pluralize = pluralize;
const plaintextToMarkdown = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _16, _17;
    const res = yield __1.api.plaintextToMarkdown(options);
    if (((_16 = res.plaintextToMarkdown) === null || _16 === void 0 ? void 0 : _16.__typename) === "MutationPlaintextToMarkdownSuccess") {
        return {
            result: res.plaintextToMarkdown.data,
            error: "",
        };
    }
    return {
        result: null,
        error: ((_17 = res.plaintextToMarkdown) === null || _17 === void 0 ? void 0 : _17.message) || "Unknown error",
    };
});
exports.plaintextToMarkdown = plaintextToMarkdown;
const plaintextToHTML = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _18, _19;
    const res = yield __1.api.plaintextToHTML(options);
    if (((_18 = res.plaintextToHTML) === null || _18 === void 0 ? void 0 : _18.__typename) === "MutationPlaintextToHTMLSuccess") {
        return {
            result: res.plaintextToHTML.data,
            error: "",
        };
    }
    return {
        result: null,
        error: ((_19 = res.plaintextToHTML) === null || _19 === void 0 ? void 0 : _19.message) || "Unknown error",
    };
});
exports.plaintextToHTML = plaintextToHTML;
const toSpellingUSA = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _20, _21;
    const res = yield __1.api.toSpellingUSA(options);
    if (((_20 = res.toSpellingUSA) === null || _20 === void 0 ? void 0 : _20.__typename) === "MutationToSpellingUSASuccess") {
        return {
            result: res.toSpellingUSA.data,
            error: "",
        };
    }
    return {
        result: null,
        error: ((_21 = res.toSpellingUSA) === null || _21 === void 0 ? void 0 : _21.message) || "Unknown error",
    };
});
exports.toSpellingUSA = toSpellingUSA;
const toSpellingUK = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _22, _23;
    const res = yield __1.api.toSpellingUK(options);
    if (((_22 = res.toSpellingUK) === null || _22 === void 0 ? void 0 : _22.__typename) === "MutationToSpellingUKSuccess") {
        return {
            result: res.toSpellingUK.data,
            error: "",
        };
    }
    return {
        result: null,
        error: ((_23 = res.toSpellingUK) === null || _23 === void 0 ? void 0 : _23.message) || "Unknown error",
    };
});
exports.toSpellingUK = toSpellingUK;
