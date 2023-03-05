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
exports.filterStringList = exports.sortStringList = exports.createStringList = exports.recommendStringList = exports.searchStringList = exports.filterOptionList = exports.sortOptionList = exports.createOptionList = exports.recommendOptionList = exports.searchOptionList = void 0;
const __1 = require("..");
const searchOptionList = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const res = yield __1.api.searchOptionList(options);
    if (((_a = res.searchOptionList) === null || _a === void 0 ? void 0 : _a.__typename) === "MutationSearchOptionListSuccess") {
        return {
            result: res.searchOptionList.data,
            error: "",
        };
    }
    return {
        result: [],
        error: ((_b = res.searchOptionList) === null || _b === void 0 ? void 0 : _b.message) || "Unknown error",
    };
});
exports.searchOptionList = searchOptionList;
const recommendOptionList = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d;
    const res = yield __1.api.recommendOptionList(options);
    if (((_c = res.recommendOptionList) === null || _c === void 0 ? void 0 : _c.__typename) === "MutationRecommendOptionListSuccess") {
        return {
            result: res.recommendOptionList.data,
            error: "",
        };
    }
    return {
        result: [],
        error: ((_d = res.recommendOptionList) === null || _d === void 0 ? void 0 : _d.message) || "Unknown error",
    };
});
exports.recommendOptionList = recommendOptionList;
const createOptionList = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _e, _f;
    const res = yield __1.api.createOptionList(options);
    if (((_e = res.createOptionList) === null || _e === void 0 ? void 0 : _e.__typename) === "MutationCreateOptionListSuccess") {
        return {
            result: res.createOptionList.data,
            error: "",
        };
    }
    return {
        result: [],
        error: ((_f = res.createOptionList) === null || _f === void 0 ? void 0 : _f.message) || "Unknown error",
    };
});
exports.createOptionList = createOptionList;
const sortOptionList = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _g, _h;
    const res = yield __1.api.sortOptionList(options);
    if (((_g = res.sortOptionList) === null || _g === void 0 ? void 0 : _g.__typename) === "MutationSortOptionListSuccess") {
        return {
            result: res.sortOptionList.data,
            error: "",
        };
    }
    return {
        result: [],
        error: ((_h = res.sortOptionList) === null || _h === void 0 ? void 0 : _h.message) || "Unknown error",
    };
});
exports.sortOptionList = sortOptionList;
const filterOptionList = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _j, _k;
    const res = yield __1.api.filterOptionList(options);
    if (((_j = res.filterOptionList) === null || _j === void 0 ? void 0 : _j.__typename) === "MutationFilterOptionListSuccess") {
        return {
            result: res.filterOptionList.data,
            error: "",
        };
    }
    return {
        result: [],
        error: ((_k = res.filterOptionList) === null || _k === void 0 ? void 0 : _k.message) || "Unknown error",
    };
});
exports.filterOptionList = filterOptionList;
const searchStringList = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _l, _m;
    const res = yield __1.api.searchStringList(options);
    if (((_l = res.searchStringList) === null || _l === void 0 ? void 0 : _l.__typename) === "MutationSearchStringListSuccess") {
        return {
            result: res.searchStringList.data,
            error: "",
        };
    }
    return {
        result: [],
        error: ((_m = res.searchStringList) === null || _m === void 0 ? void 0 : _m.message) || "Unknown error",
    };
});
exports.searchStringList = searchStringList;
const recommendStringList = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _o, _p;
    const res = yield __1.api.recommendStringList(options);
    if (((_o = res.recommendStringList) === null || _o === void 0 ? void 0 : _o.__typename) === "MutationRecommendStringListSuccess") {
        return {
            result: res.recommendStringList.data,
            error: "",
        };
    }
    return {
        result: [],
        error: ((_p = res.recommendStringList) === null || _p === void 0 ? void 0 : _p.message) || "Unknown error",
    };
});
exports.recommendStringList = recommendStringList;
const createStringList = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _q, _r;
    const res = yield __1.api.createStringList(options);
    if (((_q = res.createStringList) === null || _q === void 0 ? void 0 : _q.__typename) === "MutationCreateStringListSuccess") {
        return {
            result: res.createStringList.data,
            error: "",
        };
    }
    return {
        result: [],
        error: ((_r = res.createStringList) === null || _r === void 0 ? void 0 : _r.message) || "Unknown error",
    };
});
exports.createStringList = createStringList;
const sortStringList = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _s, _t;
    const res = yield __1.api.sortStringList(options);
    if (((_s = res.sortStringList) === null || _s === void 0 ? void 0 : _s.__typename) === "MutationSortStringListSuccess") {
        return {
            result: res.sortStringList.data,
            error: "",
        };
    }
    return {
        result: [],
        error: ((_t = res.sortStringList) === null || _t === void 0 ? void 0 : _t.message) || "Unknown error",
    };
});
exports.sortStringList = sortStringList;
const filterStringList = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _u, _v;
    const res = yield __1.api.filterStringList(options);
    if (((_u = res.filterStringList) === null || _u === void 0 ? void 0 : _u.__typename) === "MutationFilterStringListSuccess") {
        return {
            result: res.filterStringList.data,
            error: "",
        };
    }
    return {
        result: [],
        error: ((_v = res.filterStringList) === null || _v === void 0 ? void 0 : _v.message) || "Unknown error",
    };
});
exports.filterStringList = filterStringList;
