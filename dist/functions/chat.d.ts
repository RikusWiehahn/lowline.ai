import { SuggestChatResponseIntentsMutationVariables, SuggestChatResponseMultiMutationVariables, SuggestChatResponseMutationVariables } from "../schema";
export declare const suggestChatResponse: (options: SuggestChatResponseMutationVariables) => Promise<{
    result: string | null;
    error: string;
}>;
export declare const suggestChatResponseIntents: (options: SuggestChatResponseIntentsMutationVariables) => Promise<{
    result: string[];
    error: string;
}>;
export declare const suggestChatResponseMulti: (options: SuggestChatResponseMultiMutationVariables) => Promise<{
    result: string[];
    error: string;
}>;
