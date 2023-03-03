import { CreateOptionListMutationVariables, FilterOptionListMutationVariables, OptionOutput, RecommendOptionListMutationVariables, SearchOptionListMutationVariables, SearchStringListMutationVariables, SortOptionListMutationVariables } from "../schema";
export declare const searchStringList: (options: SearchStringListMutationVariables) => Promise<{
    data: string[];
    error: string;
}>;
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
