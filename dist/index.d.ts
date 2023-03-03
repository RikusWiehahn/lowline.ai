import { Sdk } from "./schema";
export declare let api: Sdk;
export declare const _ai: {
    init: ({ apiKey, mode, }: {
        apiKey?: string | undefined;
        mode?: "production" | "development" | undefined;
    }) => void;
    searchOptionList: (options: import("./schema").Exact<{
        count?: import("./schema").InputMaybe<number> | undefined;
        search_term: string;
        options: import("./schema").OptionInput | import("./schema").OptionInput[];
    }>) => Promise<{
        data: import("./schema").OptionOutput[];
        error: string;
    }>;
    recommendOptionList: (options: import("./schema").Exact<{
        count?: import("./schema").InputMaybe<number> | undefined;
        options: import("./schema").OptionInput | import("./schema").OptionInput[];
        interests: import("./schema").OptionInput | import("./schema").OptionInput[];
    }>) => Promise<{
        data: import("./schema").OptionOutput[];
        error: string;
    }>;
    createOptionList: (options: import("./schema").Exact<{
        count: number;
        option_type: string;
    }>) => Promise<{
        data: import("./schema").OptionOutput[];
        error: string;
    }>;
    sortOptionList: (options: import("./schema").Exact<{
        criteria: string;
        options: import("./schema").OptionInput | import("./schema").OptionInput[];
    }>) => Promise<{
        data: import("./schema").OptionOutput[];
        error: string;
    }>;
    filterOptionList: (options: import("./schema").Exact<{
        criteria: string;
        options: import("./schema").OptionInput | import("./schema").OptionInput[];
    }>) => Promise<{
        data: import("./schema").OptionOutput[];
        error: string;
    }>;
    searchStringList: (options: import("./schema").Exact<{
        search_term: string;
        items: string | string[];
        count?: import("./schema").InputMaybe<number> | undefined;
    }>) => Promise<{
        data: string[];
        error: string;
    }>;
    recommendStringList: (options: import("./schema").Exact<{
        items: string | string[];
        interests: string | string[];
        count?: import("./schema").InputMaybe<number> | undefined;
    }>) => Promise<{
        data: string[];
        error: string;
    }>;
    createStringList: (options: import("./schema").Exact<{
        count: number;
        item_type: string;
    }>) => Promise<{
        data: string[];
        error: string;
    }>;
    sortStringList: (options: import("./schema").Exact<{
        criteria: string;
        items: string | string[];
    }>) => Promise<{
        data: string[];
        error: string;
    }>;
    filterStringList: (options: import("./schema").Exact<{
        criteria: string;
        items: string | string[];
    }>) => Promise<{
        data: string[];
        error: string;
    }>;
};
export default _ai;
