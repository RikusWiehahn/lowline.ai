import { HasEmojisMutationVariables, IsEmojiMutationVariables, RemoveEmojisMutationVariables, SuggestEmojiMutationVariables } from "../schema";
export declare const suggestEmoji: (options: SuggestEmojiMutationVariables) => Promise<{
    result: string | null;
    error: string;
}>;
export declare const isEmoji: (options: IsEmojiMutationVariables) => Promise<{
    result: boolean | null;
    error: string;
}>;
export declare const hasEmojis: (options: HasEmojisMutationVariables) => Promise<{
    result: boolean | null;
    error: string;
}>;
export declare const removeEmojis: (options: RemoveEmojisMutationVariables) => Promise<{
    result: string | null;
    error: string;
}>;
