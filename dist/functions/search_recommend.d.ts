import { CreateOptionListMutationVariables, CreateStringListMutationVariables, FilterOptionListMutationVariables, FilterStringListMutationVariables, OptionOutput, RecommendOptionListMutationVariables, RecommendStringListMutationVariables, SearchOptionListMutationVariables, SearchStringListMutationVariables, SortOptionListMutationVariables, SortStringListMutationVariables } from "../schema";
export declare const searchOptionList: (options: SearchOptionListMutationVariables) => Promise<{
    data: OptionOutput[];
    error: string;
}>;
export declare const recommendOptionList: (options: RecommendOptionListMutationVariables) => Promise<{
    data: OptionOutput[];
    error: string;
}>;
export declare const createOptionList: (options: CreateOptionListMutationVariables) => Promise<{
    data: OptionOutput[];
    error: string;
}>;
export declare const sortOptionList: (options: SortOptionListMutationVariables) => Promise<{
    data: OptionOutput[];
    error: string;
}>;
export declare const filterOptionList: (options: FilterOptionListMutationVariables) => Promise<{
    data: OptionOutput[];
    error: string;
}>;
export declare const searchStringList: (options: SearchStringListMutationVariables) => Promise<{
    data: string[];
    error: string;
}>;
export declare const recommendStringList: (options: RecommendStringListMutationVariables) => Promise<{
    data: string[];
    error: string;
}>;
export declare const createStringList: (options: CreateStringListMutationVariables) => Promise<{
    data: string[];
    error: string;
}>;
export declare const sortStringList: (options: SortStringListMutationVariables) => Promise<{
    data: string[];
    error: string;
}>;
export declare const filterStringList: (options: FilterStringListMutationVariables) => Promise<{
    data: string[];
    error: string;
}>;
