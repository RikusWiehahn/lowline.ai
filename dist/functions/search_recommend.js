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
exports.filterOptionList = exports.sortOptionList = exports.createOptionList = exports.recommendOptionList = exports.searchOptionList = exports.searchStringList = void 0;
const __1 = require("..");
const searchStringList = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const res = yield __1.api.searchStringList(options);
    if (((_a = res.searchStringList) === null || _a === void 0 ? void 0 : _a.__typename) === "MutationSearchStringListSuccess") {
        return {
            data: res.searchStringList.data,
            error: "",
        };
    }
    return {
        data: [],
        error: ((_b = res.searchStringList) === null || _b === void 0 ? void 0 : _b.message) || "Unknown error",
    };
});
exports.searchStringList = searchStringList;
const searchOptionList = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d;
    const res = yield __1.api.searchOptionList(options);
    if (((_c = res.searchOptionList) === null || _c === void 0 ? void 0 : _c.__typename) === "MutationSearchOptionListSuccess") {
        return {
            data: res.searchOptionList.data,
            error: "",
        };
    }
    return {
        data: [],
        error: ((_d = res.searchOptionList) === null || _d === void 0 ? void 0 : _d.message) || "Unknown error",
    };
});
exports.searchOptionList = searchOptionList;
const recommendOptionList = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _e, _f;
    const res = yield __1.api.recommendOptionList(options);
    if (((_e = res.recommendOptionList) === null || _e === void 0 ? void 0 : _e.__typename) === "MutationRecommendOptionListSuccess") {
        return {
            data: res.recommendOptionList.data,
            error: "",
        };
    }
    return {
        data: [],
        error: ((_f = res.recommendOptionList) === null || _f === void 0 ? void 0 : _f.message) || "Unknown error",
    };
});
exports.recommendOptionList = recommendOptionList;
const createOptionList = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _g, _h;
    const res = yield __1.api.createOptionList(options);
    if (((_g = res.createOptionList) === null || _g === void 0 ? void 0 : _g.__typename) === "MutationCreateOptionListSuccess") {
        return {
            data: res.createOptionList.data,
            error: "",
        };
    }
    return {
        data: [],
        error: ((_h = res.createOptionList) === null || _h === void 0 ? void 0 : _h.message) || "Unknown error",
    };
});
exports.createOptionList = createOptionList;
const sortOptionList = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _j, _k;
    const res = yield __1.api.sortOptionList(options);
    if (((_j = res.sortOptionList) === null || _j === void 0 ? void 0 : _j.__typename) === "MutationSortOptionListSuccess") {
        return {
            data: res.sortOptionList.data,
            error: "",
        };
    }
    return {
        data: [],
        error: ((_k = res.sortOptionList) === null || _k === void 0 ? void 0 : _k.message) || "Unknown error",
    };
});
exports.sortOptionList = sortOptionList;
const filterOptionList = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _l, _m;
    const res = yield __1.api.filterOptionList(options);
    if (((_l = res.filterOptionList) === null || _l === void 0 ? void 0 : _l.__typename) === "MutationFilterOptionListSuccess") {
        return {
            data: res.filterOptionList.data,
            error: "",
        };
    }
    return {
        data: [],
        error: ((_m = res.filterOptionList) === null || _m === void 0 ? void 0 : _m.message) || "Unknown error",
    };
});
exports.filterOptionList = filterOptionList;
