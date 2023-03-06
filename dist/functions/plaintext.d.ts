import { ClassifyMutationVariables, ElaborateMutationVariables, ExplainMutationVariables, FixGrammarErrorsMutationVariables, FixProfanityMutationVariables, FixSpellingErrorsMutationVariables, GenerateKeywordsMutationVariables, GeneratePlaintextMutationVariables, GetKeywordsMutationVariables, GetTopicMutationVariables, HasGrammarErrorsMutationVariables, HasProfanityMutationVariables, HasSpellingErrorsMutationVariables, IncludesMentionOfMutationVariables, IsPlaintextMutationVariables, IsQuestionMutationVariables, OptionOutput, PlaintextToHtmlMutationVariables, PlaintextToMarkdownMutationVariables, PluralizeMutationVariables, SuggestEditsMutationVariables, SummarizeKeyPointsMutationVariables, SummarizeMutationVariables, ToSpellingUkMutationVariables, ToSpellingUsaMutationVariables } from "../schema";
export declare const isPlaintext: (options: IsPlaintextMutationVariables) => Promise<{
    result: boolean | null;
    error: string;
}>;
export declare const generatePlaintext: (options: GeneratePlaintextMutationVariables) => Promise<{
    result: string | null;
    error: string;
}>;
export declare const hasSpellingErrors: (options: HasSpellingErrorsMutationVariables) => Promise<{
    result: boolean | null;
    error: string;
}>;
export declare const fixSpellingErrors: (options: FixSpellingErrorsMutationVariables) => Promise<{
    result: string | null;
    error: string;
}>;
export declare const hasGrammarErrors: (options: HasGrammarErrorsMutationVariables) => Promise<{
    result: boolean | null;
    error: string;
}>;
export declare const fixGrammarErrors: (options: FixGrammarErrorsMutationVariables) => Promise<{
    result: string | null;
    error: string;
}>;
export declare const hasProfanity: (options: HasProfanityMutationVariables) => Promise<{
    result: boolean | null;
    error: string;
}>;
export declare const fixProfanity: (options: FixProfanityMutationVariables) => Promise<{
    result: string | null;
    error: string;
}>;
export declare const includesMentionOf: (options: IncludesMentionOfMutationVariables) => Promise<{
    result: boolean | null;
    error: string;
}>;
export declare const isQuestion: (options: IsQuestionMutationVariables) => Promise<{
    result: boolean | null;
    error: string;
}>;
export declare const suggestEdits: (options: SuggestEditsMutationVariables) => Promise<{
    result: string | null;
    error: string;
}>;
export declare const summarize: (options: SummarizeMutationVariables) => Promise<{
    result: string | null;
    error: string;
}>;
export declare const summarizeKeyPoints: (options: SummarizeKeyPointsMutationVariables) => Promise<{
    result: string | null;
    error: string;
}>;
export declare const elaborate: (options: ElaborateMutationVariables) => Promise<{
    result: string | null;
    error: string;
}>;
export declare const ExplanationLevels: {
    readonly beginner: "beginner";
    readonly novice: "novice";
    readonly intermediate: "intermediate";
    readonly advanced: "advanced";
    readonly expert: "expert";
};
export type ExplanationLevel = typeof ExplanationLevels[keyof typeof ExplanationLevels];
export declare const explain: (options: ExplainMutationVariables & {
    level: ExplanationLevel;
}) => Promise<{
    result: string | null;
    error: string;
}>;
export declare const classify: (options: ClassifyMutationVariables) => Promise<{
    result: OptionOutput | null;
    error: string;
}>;
export declare const getKeywords: (options: GetKeywordsMutationVariables) => Promise<{
    result: string[];
    error: string;
}>;
export declare const generateKeywords: (options: GenerateKeywordsMutationVariables) => Promise<{
    result: string[];
    error: string;
}>;
export declare const getTopic: (options: GetTopicMutationVariables) => Promise<{
    result: string | null;
    error: string;
}>;
export declare const pluralize: (options: PluralizeMutationVariables) => Promise<{
    result: string | null;
    error: string;
}>;
export declare const plaintextToMarkdown: (options: PlaintextToMarkdownMutationVariables) => Promise<{
    result: string | null;
    error: string;
}>;
export declare const plaintextToHTML: (options: PlaintextToHtmlMutationVariables) => Promise<{
    result: string | null;
    error: string;
}>;
export declare const toSpellingUSA: (options: ToSpellingUsaMutationVariables) => Promise<{
    result: string | null;
    error: string;
}>;
export declare const toSpellingUK: (options: ToSpellingUkMutationVariables) => Promise<{
    result: string | null;
    error: string;
}>;
