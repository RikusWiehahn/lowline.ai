import { OptionListSearchMutationVariables, OptionOutput, StringListSearchMutationVariables } from "./schema";
export declare const _ai: {
    init: ({ apiKey, mode, }: {
        apiKey: string;
        mode?: "production" | "development" | undefined;
    }) => void;
    stringListSearch: (options: StringListSearchMutationVariables) => Promise<{
        data: string[];
        error: string;
    }>;
    optionListSearch: (options: OptionListSearchMutationVariables) => Promise<{
        data: OptionOutput[];
        error: string;
    }>;
};
