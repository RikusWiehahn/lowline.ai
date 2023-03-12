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
        result: import("./schema").OptionOutput[];
        error: string;
    }>;
    recommendOptionList: (options: import("./schema").Exact<{
        count?: import("./schema").InputMaybe<number> | undefined;
        options: import("./schema").OptionInput | import("./schema").OptionInput[];
        interests: import("./schema").OptionInput | import("./schema").OptionInput[];
    }>) => Promise<{
        result: import("./schema").OptionOutput[];
        error: string;
    }>;
    createOptionList: (options: import("./schema").Exact<{
        count: number;
        option_type: string;
    }>) => Promise<{
        result: import("./schema").OptionOutput[];
        error: string;
    }>;
    sortOptionList: (options: import("./schema").Exact<{
        criteria: string;
        options: import("./schema").OptionInput | import("./schema").OptionInput[];
    }>) => Promise<{
        result: import("./schema").OptionOutput[];
        error: string;
    }>;
    filterOptionList: (options: import("./schema").Exact<{
        criteria: string;
        options: import("./schema").OptionInput | import("./schema").OptionInput[];
    }>) => Promise<{
        result: import("./schema").OptionOutput[];
        error: string;
    }>;
    searchStringList: (options: import("./schema").Exact<{
        search_term: string;
        items: string | string[];
        count?: import("./schema").InputMaybe<number> | undefined;
    }>) => Promise<{
        result: string[];
        error: string;
    }>;
    recommendStringList: (options: import("./schema").Exact<{
        items: string | string[];
        interests: string | string[];
        count?: import("./schema").InputMaybe<number> | undefined;
    }>) => Promise<{
        result: string[];
        error: string;
    }>;
    createStringList: (options: import("./schema").Exact<{
        count: number;
        item_type: string;
    }>) => Promise<{
        result: string[];
        error: string;
    }>;
    sortStringList: (options: import("./schema").Exact<{
        criteria: string;
        items: string | string[];
    }>) => Promise<{
        result: string[];
        error: string;
    }>;
    filterStringList: (options: import("./schema").Exact<{
        criteria: string;
        items: string | string[];
    }>) => Promise<{
        result: string[];
        error: string;
    }>;
    suggestChatResponse: (options: import("./schema").Exact<{
        intent: string;
        chat_thread: import("./schema").ChatThreadInput | import("./schema").ChatThreadInput[];
    }>) => Promise<{
        result: string | null;
        error: string;
    }>;
    suggestChatResponseIntents: (options: import("./schema").Exact<{
        count: number;
        chat_thread: import("./schema").ChatThreadInput | import("./schema").ChatThreadInput[];
    }>) => Promise<{
        result: string[];
        error: string;
    }>;
    suggestChatResponseMulti: (options: import("./schema").Exact<{
        count: number;
        intent: string;
        chat_thread: import("./schema").ChatThreadInput | import("./schema").ChatThreadInput[];
    }>) => Promise<{
        result: string[];
        error: string;
    }>;
    isPlaintext: (options: import("./schema").Exact<{
        text: string;
    }>) => Promise<{
        result: boolean | null;
        error: string;
    }>;
    generatePlaintext: (options: import("./schema").Exact<{
        prompt: string;
    }>) => Promise<{
        result: string | null;
        error: string;
    }>;
    hasSpellingErrors: (options: import("./schema").Exact<{
        text: string;
    }>) => Promise<{
        result: boolean | null;
        error: string;
    }>;
    fixSpellingErrors: (options: import("./schema").Exact<{
        text: string;
    }>) => Promise<{
        result: string | null;
        error: string;
    }>;
    hasGrammarErrors: (options: import("./schema").Exact<{
        text: string;
    }>) => Promise<{
        result: boolean | null;
        error: string;
    }>;
    fixGrammarErrors: (options: import("./schema").Exact<{
        text: string;
    }>) => Promise<{
        result: string | null;
        error: string;
    }>;
    hasProfanity: (options: import("./schema").Exact<{
        text: string;
    }>) => Promise<{
        result: boolean | null;
        error: string;
    }>;
    fixProfanity: (options: import("./schema").Exact<{
        text: string;
    }>) => Promise<{
        result: string | null;
        error: string;
    }>;
    includesMentionOf: (options: import("./schema").Exact<{
        text: string;
        subject: string;
    }>) => Promise<{
        result: boolean | null;
        error: string;
    }>;
    isQuestion: (options: import("./schema").Exact<{
        text: string;
    }>) => Promise<{
        result: boolean | null;
        error: string;
    }>;
    suggestEdits: (options: import("./schema").Exact<{
        text: string;
    }>) => Promise<{
        result: string | null;
        error: string;
    }>;
    summarize: (options: import("./schema").Exact<{
        text: string;
        sentence_count: number;
    }>) => Promise<{
        result: string | null;
        error: string;
    }>;
    summarizeKeyPoints: (options: import("./schema").Exact<{
        text: string;
    }>) => Promise<{
        result: string | null;
        error: string;
    }>;
    elaborate: (options: import("./schema").Exact<{
        text: string;
        sentence_count: number;
    }>) => Promise<{
        result: string | null;
        error: string;
    }>;
    explain: (options: import("./schema").Exact<{
        text: string;
        level: string;
    }> & {
        level: import("./functions/plaintext").ExplanationLevel;
    }) => Promise<{
        result: string | null;
        error: string;
    }>;
    classify: (options: import("./schema").Exact<{
        item: string;
        criteria: string;
        categories: import("./schema").OptionInput | import("./schema").OptionInput[];
    }>) => Promise<{
        result: import("./schema").OptionOutput | null;
        error: string;
    }>;
    getKeywords: (options: import("./schema").Exact<{
        text: string;
        count: number;
    }>) => Promise<{
        result: string[];
        error: string;
    }>;
    generateKeywords: (options: import("./schema").Exact<{
        topic: string;
        count: number;
    }>) => Promise<{
        result: string[];
        error: string;
    }>;
    getTopic: (options: import("./schema").Exact<{
        text: string;
    }>) => Promise<{
        result: string | null;
        error: string;
    }>;
    pluralize: (options: import("./schema").Exact<{
        item: string;
        count: number;
    }>) => Promise<{
        result: string | null;
        error: string;
    }>;
    plaintextToMarkdown: (options: import("./schema").Exact<{
        text: string;
    }>) => Promise<{
        result: string | null;
        error: string;
    }>;
    plaintextToHTML: (options: import("./schema").Exact<{
        text: string;
    }>) => Promise<{
        result: string | null;
        error: string;
    }>;
    toSpellingUSA: (options: import("./schema").Exact<{
        text: string;
    }>) => Promise<{
        result: string | null;
        error: string;
    }>;
    toSpellingUK: (options: import("./schema").Exact<{
        text: string;
    }>) => Promise<{
        result: string | null;
        error: string;
    }>;
    isEmoji: (options: import("./schema").Exact<{
        text: string;
    }>) => Promise<{
        result: boolean | null;
        error: string;
    }>;
    hasEmojis: (options: import("./schema").Exact<{
        text: string;
    }>) => Promise<{
        result: boolean | null;
        error: string;
    }>;
    suggestEmoji: (options: import("./schema").Exact<{
        text: string;
    }>) => Promise<{
        result: string | null;
        error: string;
    }>;
    removeEmojis: (options: import("./schema").Exact<{
        text: string;
    }>) => Promise<{
        result: string | null;
        error: string;
    }>;
};
export default _ai;
