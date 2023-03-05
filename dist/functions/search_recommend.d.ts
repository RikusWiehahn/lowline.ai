import { CreateOptionListMutationVariables, CreateStringListMutationVariables, FilterOptionListMutationVariables, FilterStringListMutationVariables, OptionOutput, RecommendOptionListMutationVariables, RecommendStringListMutationVariables, SearchOptionListMutationVariables, SearchStringListMutationVariables, SortOptionListMutationVariables, SortStringListMutationVariables } from "../schema";
export declare const searchOptionList: (options: SearchOptionListMutationVariables) => Promise<{
    result: OptionOutput[];
    error: string;
}>;
export declare const recommendOptionList: (options: RecommendOptionListMutationVariables) => Promise<{
    result: OptionOutput[];
    error: string;
}>;
export declare const createOptionList: (options: CreateOptionListMutationVariables) => Promise<{
    result: OptionOutput[];
    error: string;
}>;
export declare const sortOptionList: (options: SortOptionListMutationVariables) => Promise<{
    result: OptionOutput[];
    error: string;
}>;
export declare const filterOptionList: (options: FilterOptionListMutationVariables) => Promise<{
    result: OptionOutput[];
    error: string;
}>;
export declare const searchStringList: (options: SearchStringListMutationVariables) => Promise<{
    result: string[];
    error: string;
}>;
export declare const recommendStringList: (options: RecommendStringListMutationVariables) => Promise<{
    result: string[];
    error: string;
}>;
export declare const createStringList: (options: CreateStringListMutationVariables) => Promise<{
    result: string[];
    error: string;
}>;
export declare const sortStringList: (options: SortStringListMutationVariables) => Promise<{
    result: string[];
    error: string;
}>;
export declare const filterStringList: (options: FilterStringListMutationVariables) => Promise<{
    result: string[];
    error: string;
}>;
