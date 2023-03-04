import { SuggestChatResponseIntentsMutationVariables, SuggestChatResponseMultiMutationVariables, SuggestChatResponseMutationVariables } from "../schema";
export declare const suggestChatResponse: (options: SuggestChatResponseMutationVariables) => Promise<{
    data: string | null;
    error: string;
}>;
export declare const suggestChatResponseIntents: (options: SuggestChatResponseIntentsMutationVariables) => Promise<{
    data: string[];
    error: string;
}>;
export declare const suggestChatResponseMulti: (options: SuggestChatResponseMultiMutationVariables) => Promise<{
    data: string[];
    error: string;
}>;
