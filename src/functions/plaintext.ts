import { api } from "..";
import {
  ClassifyMutationVariables,
  ElaborateMutationVariables,
  ExplainMutationVariables,
  FixGrammarErrorsMutationVariables,
  FixProfanityMutationVariables,
  FixSpellingErrorsMutationVariables,
  GenerateKeywordsMutationVariables,
  GeneratePlaintextMutationVariables,
  GetKeywordsMutationVariables,
  GetTopicMutationVariables,
  HasGrammarErrorsMutationVariables,
  HasProfanityMutationVariables,
  HasSpellingErrorsMutationVariables,
  IncludesMentionOfMutationVariables,
  IsPlaintextMutationVariables,
  IsQuestionMutationVariables,
  OptionOutput,
  PlaintextToHtmlMutationVariables,
  PlaintextToMarkdownMutationVariables,
  PluralizeMutationVariables,
  SuggestEditsMutationVariables,
  SummarizeKeyPointsMutationVariables,
  SummarizeMutationVariables,
  ToSpellingUkMutationVariables,
  ToSpellingUsaMutationVariables,
} from "../schema";

//
//  #  ####     #####  #        ##   # #    #    ##### ###### #    # #####
//  # #         #    # #       #  #  # ##   #      #   #       #  #    #
//  #  ####     #    # #      #    # # # #  #      #   #####    ##     #
//  #      #    #####  #      ###### # #  # #      #   #        ##     #
//  # #    #    #      #      #    # # #   ##      #   #       #  #    #
//  #  ####     #      ###### #    # # #    #      #   ###### #    #   #

export const isPlaintext = async (
  options: IsPlaintextMutationVariables
): Promise<{
  result: boolean | null;
  error: string;
}> => {
  const res = await api.isPlaintext(options);
  if (res.isPlaintext?.__typename === "MutationIsPlaintextSuccess") {
    return {
      result: res.isPlaintext.data,
      error: "",
    };
  }
  return {
    result: null,
    error: res.isPlaintext?.message || "Unknown error",
  };
};

//
//   ####  ###### #    # ###### #####    ##   ##### ######    #####  #        ##   # #    #    ##### ###### #    # #####
//  #    # #      ##   # #      #    #  #  #    #   #         #    # #       #  #  # ##   #      #   #       #  #    #
//  #      #####  # #  # #####  #    # #    #   #   #####     #    # #      #    # # # #  #      #   #####    ##     #
//  #  ### #      #  # # #      #####  ######   #   #         #####  #      ###### # #  # #      #   #        ##     #
//  #    # #      #   ## #      #   #  #    #   #   #         #      #      #    # # #   ##      #   #       #  #    #
//   ####  ###### #    # ###### #    # #    #   #   ######    #      ###### #    # # #    #      #   ###### #    #   #

export const generatePlaintext = async (
  options: GeneratePlaintextMutationVariables
): Promise<{
  result: string | null;
  error: string;
}> => {
  const res = await api.generatePlaintext(options);
  if (
    res.generatePlaintext?.__typename === "MutationGeneratePlaintextSuccess"
  ) {
    return {
      result: res.generatePlaintext.data,
      error: "",
    };
  }
  return {
    result: null,
    error: res.generatePlaintext?.message || "Unknown error",
  };
};

//
//  #    #   ##    ####      ####  #####  ###### #      #      # #    #  ####     ###### #####  #####   ####  #####   ####
//  #    #  #  #  #         #      #    # #      #      #      # ##   # #    #    #      #    # #    # #    # #    # #
//  ###### #    #  ####      ####  #    # #####  #      #      # # #  # #         #####  #    # #    # #    # #    #  ####
//  #    # ######      #         # #####  #      #      #      # #  # # #  ###    #      #####  #####  #    # #####       #
//  #    # #    # #    #    #    # #      #      #      #      # #   ## #    #    #      #   #  #   #  #    # #   #  #    #
//  #    # #    #  ####      ####  #      ###### ###### ###### # #    #  ####     ###### #    # #    #  ####  #    #  ####

export const hasSpellingErrors = async (
  options: HasSpellingErrorsMutationVariables
): Promise<{
  result: boolean | null;
  error: string;
}> => {
  const res = await api.hasSpellingErrors(options);
  if (
    res.hasSpellingErrors?.__typename === "MutationHasSpellingErrorsSuccess"
  ) {
    return {
      result: res.hasSpellingErrors.data,
      error: "",
    };
  }
  return {
    result: null,
    error: res.hasSpellingErrors?.message || "Unknown error",
  };
};

//
//  ###### # #    #     ####  #####  ###### #      #      # #    #  ####     ###### #####  #####   ####  #####   ####
//  #      #  #  #     #      #    # #      #      #      # ##   # #    #    #      #    # #    # #    # #    # #
//  #####  #   ##       ####  #    # #####  #      #      # # #  # #         #####  #    # #    # #    # #    #  ####
//  #      #   ##           # #####  #      #      #      # #  # # #  ###    #      #####  #####  #    # #####       #
//  #      #  #  #     #    # #      #      #      #      # #   ## #    #    #      #   #  #   #  #    # #   #  #    #
//  #      # #    #     ####  #      ###### ###### ###### # #    #  ####     ###### #    # #    #  ####  #    #  ####

export const fixSpellingErrors = async (
  options: FixSpellingErrorsMutationVariables
): Promise<{
  result: string | null;
  error: string;
}> => {
  const res = await api.fixSpellingErrors(options);
  if (
    res.fixSpellingErrors?.__typename === "MutationFixSpellingErrorsSuccess"
  ) {
    return {
      result: res.fixSpellingErrors.data,
      error: "",
    };
  }
  return {
    result: null,
    error: res.fixSpellingErrors?.message || "Unknown error",
  };
};

//
//  #    #   ##    ####      ####  #####    ##   #    # #    #   ##   #####     ###### #####  #####   ####  #####   ####
//  #    #  #  #  #         #    # #    #  #  #  ##  ## ##  ##  #  #  #    #    #      #    # #    # #    # #    # #
//  ###### #    #  ####     #      #    # #    # # ## # # ## # #    # #    #    #####  #    # #    # #    # #    #  ####
//  #    # ######      #    #  ### #####  ###### #    # #    # ###### #####     #      #####  #####  #    # #####       #
//  #    # #    # #    #    #    # #   #  #    # #    # #    # #    # #   #     #      #   #  #   #  #    # #   #  #    #
//  #    # #    #  ####      ####  #    # #    # #    # #    # #    # #    #    ###### #    # #    #  ####  #    #  ####

export const hasGrammarErrors = async (
  options: HasGrammarErrorsMutationVariables
): Promise<{
  result: boolean | null;
  error: string;
}> => {
  const res = await api.hasGrammarErrors(options);
  if (res.hasGrammarErrors?.__typename === "MutationHasGrammarErrorsSuccess") {
    return {
      result: res.hasGrammarErrors.data,
      error: "",
    };
  }
  return {
    result: null,
    error: res.hasGrammarErrors?.message || "Unknown error",
  };
};

//
//  ###### # #    #     ####  #####    ##   #    # #    #   ##   #####     ###### #####  #####   ####  #####   ####
//  #      #  #  #     #    # #    #  #  #  ##  ## ##  ##  #  #  #    #    #      #    # #    # #    # #    # #
//  #####  #   ##      #      #    # #    # # ## # # ## # #    # #    #    #####  #    # #    # #    # #    #  ####
//  #      #   ##      #  ### #####  ###### #    # #    # ###### #####     #      #####  #####  #    # #####       #
//  #      #  #  #     #    # #   #  #    # #    # #    # #    # #   #     #      #   #  #   #  #    # #   #  #    #
//  #      # #    #     ####  #    # #    # #    # #    # #    # #    #    ###### #    # #    #  ####  #    #  ####

export const fixGrammarErrors = async (
  options: FixGrammarErrorsMutationVariables
): Promise<{
  result: string | null;
  error: string;
}> => {
  const res = await api.fixGrammarErrors(options);
  if (res.fixGrammarErrors?.__typename === "MutationFixGrammarErrorsSuccess") {
    return {
      result: res.fixGrammarErrors.data,
      error: "",
    };
  }
  return {
    result: null,
    error: res.fixGrammarErrors?.message || "Unknown error",
  };
};

//
//  #    #   ##    ####     #####  #####   ####  ######   ##   #    # # ##### #   #
//  #    #  #  #  #         #    # #    # #    # #       #  #  ##   # #   #    # #
//  ###### #    #  ####     #    # #    # #    # #####  #    # # #  # #   #     #
//  #    # ######      #    #####  #####  #    # #      ###### #  # # #   #     #
//  #    # #    # #    #    #      #   #  #    # #      #    # #   ## #   #     #
//  #    # #    #  ####     #      #    #  ####  #      #    # #    # #   #     #

export const hasProfanity = async (
  options: HasProfanityMutationVariables
): Promise<{
  result: boolean | null;
  error: string;
}> => {
  const res = await api.hasProfanity(options);
  if (res.hasProfanity?.__typename === "MutationHasProfanitySuccess") {
    return {
      result: res.hasProfanity.data,
      error: "",
    };
  }
  return {
    result: null,
    error: res.hasProfanity?.message || "Unknown error",
  };
};

//
//  ###### # #    #    #####  #####   ####  ######   ##   #    # # ##### #   #
//  #      #  #  #     #    # #    # #    # #       #  #  ##   # #   #    # #
//  #####  #   ##      #    # #    # #    # #####  #    # # #  # #   #     #
//  #      #   ##      #####  #####  #    # #      ###### #  # # #   #     #
//  #      #  #  #     #      #   #  #    # #      #    # #   ## #   #     #
//  #      # #    #    #      #    #  ####  #      #    # #    # #   #     #

export const fixProfanity = async (
  options: FixProfanityMutationVariables
): Promise<{
  result: string | null;
  error: string;
}> => {
  const res = await api.fixProfanity(options);
  if (res.fixProfanity?.__typename === "MutationFixProfanitySuccess") {
    return {
      result: res.fixProfanity.data,
      error: "",
    };
  }
  return {
    result: null,
    error: res.fixProfanity?.message || "Unknown error",
  };
};

//
//  # #    #  ####  #      #    # #####  ######  ####     #    # ###### #    # ##### #  ####  #    #     ####  ######
//  # ##   # #    # #      #    # #    # #      #         ##  ## #      ##   #   #   # #    # ##   #    #    # #
//  # # #  # #      #      #    # #    # #####   ####     # ## # #####  # #  #   #   # #    # # #  #    #    # #####
//  # #  # # #      #      #    # #    # #           #    #    # #      #  # #   #   # #    # #  # #    #    # #
//  # #   ## #    # #      #    # #    # #      #    #    #    # #      #   ##   #   # #    # #   ##    #    # #
//  # #    #  ####  ######  ####  #####  ######  ####     #    # ###### #    #   #   #  ####  #    #     ####  #

export const includesMentionOf = async (
  options: IncludesMentionOfMutationVariables
): Promise<{
  result: boolean | null;
  error: string;
}> => {
  const res = await api.includesMentionOf(options);
  if (
    res.includesMentionOf?.__typename === "MutationIncludesMentionOfSuccess"
  ) {
    return {
      result: res.includesMentionOf.data,
      error: "",
    };
  }
  return {
    result: null,
    error: res.includesMentionOf?.message || "Unknown error",
  };
};

//
//  #  ####      ####  #    # ######  ####  ##### #  ####  #    #
//  # #         #    # #    # #      #        #   # #    # ##   #
//  #  ####     #    # #    # #####   ####    #   # #    # # #  #
//  #      #    #  # # #    # #           #   #   # #    # #  # #
//  # #    #    #   #  #    # #      #    #   #   # #    # #   ##
//  #  ####      ### #  ####  ######  ####    #   #  ####  #    #

export const isQuestion = async (
  options: IsQuestionMutationVariables
): Promise<{
  result: boolean | null;
  error: string;
}> => {
  const res = await api.isQuestion(options);
  if (res.isQuestion?.__typename === "MutationIsQuestionSuccess") {
    return {
      result: res.isQuestion.data,
      error: "",
    };
  }
  return {
    result: null,
    error: res.isQuestion?.message || "Unknown error",
  };
};

//
//   ####  #    #  ####   ####  ######  ####  #####    ###### #####  # #####  ####
//  #      #    # #    # #    # #      #        #      #      #    # #   #   #
//   ####  #    # #      #      #####   ####    #      #####  #    # #   #    ####
//       # #    # #  ### #  ### #           #   #      #      #    # #   #        #
//  #    # #    # #    # #    # #      #    #   #      #      #    # #   #   #    #
//   ####   ####   ####   ####  ######  ####    #      ###### #####  #   #    ####

export const suggestEdits = async (
  options: SuggestEditsMutationVariables
): Promise<{
  result: string | null;
  error: string;
}> => {
  const res = await api.suggestEdits(options);
  if (res.suggestEdits?.__typename === "MutationSuggestEditsSuccess") {
    return {
      result: res.suggestEdits.data,
      error: "",
    };
  }
  return {
    result: null,
    error: res.suggestEdits?.message || "Unknown error",
  };
};

//
//   ####  #    # #    # #    # ###### #####  # ###### ######
//  #      #    # ##  ## ##  ## #      #    # #     #  #
//   ####  #    # # ## # # ## # #####  #    # #    #   #####
//       # #    # #    # #    # #      #####  #   #    #
//  #    # #    # #    # #    # #      #   #  #  #     #
//   ####   ####  #    # #    # ###### #    # # ###### ######

export const summarize = async (
  options: SummarizeMutationVariables
): Promise<{
  result: string | null;
  error: string;
}> => {
  const res = await api.summarize(options);
  if (res.summarize?.__typename === "MutationSummarizeSuccess") {
    return {
      result: res.summarize.data,
      error: "",
    };
  }
  return {
    result: null,
    error: res.summarize?.message || "Unknown error",
  };
};

//
//   ####  #    # #    # #    # ###### #####  # ###### ######    #    # ###### #   #    #####   ####  # #    # #####  ####
//  #      #    # ##  ## ##  ## #      #    # #     #  #         #   #  #       # #     #    # #    # # ##   #   #   #
//   ####  #    # # ## # # ## # #####  #    # #    #   #####     ####   #####    #      #    # #    # # # #  #   #    ####
//       # #    # #    # #    # #      #####  #   #    #         #  #   #        #      #####  #    # # #  # #   #        #
//  #    # #    # #    # #    # #      #   #  #  #     #         #   #  #        #      #      #    # # #   ##   #   #    #
//   ####   ####  #    # #    # ###### #    # # ###### ######    #    # ######   #      #       ####  # #    #   #    ####

export const summarizeKeyPoints = async (
  options: SummarizeKeyPointsMutationVariables
): Promise<{
  result: string | null;
  error: string;
}> => {
  const res = await api.summarizeKeyPoints(options);
  if (
    res.summarizeKeyPoints?.__typename === "MutationSummarizeKeyPointsSuccess"
  ) {
    return {
      result: res.summarizeKeyPoints.data,
      error: "",
    };
  }
  return {
    result: null,
    error: res.summarizeKeyPoints?.message || "Unknown error",
  };
};

//
//  ###### #        ##   #####   ####  #####    ##   ##### ######
//  #      #       #  #  #    # #    # #    #  #  #    #   #
//  #####  #      #    # #####  #    # #    # #    #   #   #####
//  #      #      ###### #    # #    # #####  ######   #   #
//  #      #      #    # #    # #    # #   #  #    #   #   #
//  ###### ###### #    # #####   ####  #    # #    #   #   ######

export const elaborate = async (
  options: ElaborateMutationVariables
): Promise<{
  result: string | null;
  error: string;
}> => {
  const res = await api.elaborate(options);
  if (res.elaborate?.__typename === "MutationElaborateSuccess") {
    return {
      result: res.elaborate.data,
      error: "",
    };
  }
  return {
    result: null,
    error: res.elaborate?.message || "Unknown error",
  };
};

//
//  ###### #    # #####  #        ##   # #    #
//  #       #  #  #    # #       #  #  # ##   #
//  #####    ##   #    # #      #    # # # #  #
//  #        ##   #####  #      ###### # #  # #
//  #       #  #  #      #      #    # # #   ##
//  ###### #    # #      ###### #    # # #    #

export const ExplanationLevels = {
  beginner: "beginner",
  novice: "novice",
  intermediate: "intermediate",
  advanced: "advanced",
  expert: "expert",
} as const;
export type ExplanationLevel =
  typeof ExplanationLevels[keyof typeof ExplanationLevels];

export const explain = async (
  options: ExplainMutationVariables & {
    level: ExplanationLevel;
  }
): Promise<{
  result: string | null;
  error: string;
}> => {
  const res = await api.explain(options);
  if (res.explain?.__typename === "MutationExplainSuccess") {
    return {
      result: res.explain.data,
      error: "",
    };
  }
  return {
    result: null,
    error: res.explain?.message || "Unknown error",
  };
};

//
//   ####  #        ##    ####   ####  # ###### #   #
//  #    # #       #  #  #      #      # #       # #
//  #      #      #    #  ####   ####  # #####    #
//  #      #      ######      #      # # #        #
//  #    # #      #    # #    # #    # # #        #
//   ####  ###### #    #  ####   ####  # #        #

export const classify = async (
  options: ClassifyMutationVariables
): Promise<{
  result: OptionOutput | null;
  error: string;
}> => {
  const res = await api.classify(options);
  if (res.classify?.__typename === "MutationClassifySuccess") {
    return {
      result: res.classify.data,
      error: "",
    };
  }
  return {
    result: null,
    error: res.classify?.message || "Unknown error",
  };
};

//
//   ####  ###### #####    #    # ###### #   # #    #  ####  #####  #####   ####
//  #    # #        #      #   #  #       # #  #    # #    # #    # #    # #
//  #      #####    #      ####   #####    #   #    # #    # #    # #    #  ####
//  #  ### #        #      #  #   #        #   # ## # #    # #####  #    #      #
//  #    # #        #      #   #  #        #   ##  ## #    # #   #  #    # #    #
//   ####  ######   #      #    # ######   #   #    #  ####  #    # #####   ####

export const getKeywords = async (
  options: GetKeywordsMutationVariables
): Promise<{
  result: string[];
  error: string;
}> => {
  const res = await api.getKeywords(options);
  if (res.getKeywords?.__typename === "MutationGetKeywordsSuccess") {
    return {
      result: res.getKeywords.data,
      error: "",
    };
  }
  return {
    result: [],
    error: res.getKeywords?.message || "Unknown error",
  };
};

//
//   ####  ###### #    # ###### #####    ##   ##### ######    #    # ###### #   # #    #  ####  #####  #####   ####
//  #    # #      ##   # #      #    #  #  #    #   #         #   #  #       # #  #    # #    # #    # #    # #
//  #      #####  # #  # #####  #    # #    #   #   #####     ####   #####    #   #    # #    # #    # #    #  ####
//  #  ### #      #  # # #      #####  ######   #   #         #  #   #        #   # ## # #    # #####  #    #      #
//  #    # #      #   ## #      #   #  #    #   #   #         #   #  #        #   ##  ## #    # #   #  #    # #    #
//   ####  ###### #    # ###### #    # #    #   #   ######    #    # ######   #   #    #  ####  #    # #####   ####

export const generateKeywords = async (
  options: GenerateKeywordsMutationVariables
): Promise<{
  result: string[];
  error: string;
}> => {
  const res = await api.generateKeywords(options);
  if (res.generateKeywords?.__typename === "MutationGenerateKeywordsSuccess") {
    return {
      result: res.generateKeywords.data,
      error: "",
    };
  }
  return {
    result: [],
    error: res.generateKeywords?.message || "Unknown error",
  };
};

//
//   ####  ###### #####    #####  ####  #####  #  ####
//  #    # #        #        #   #    # #    # # #    #
//  #      #####    #        #   #    # #    # # #
//  #  ### #        #        #   #    # #####  # #
//  #    # #        #        #   #    # #      # #    #
//   ####  ######   #        #    ####  #      #  ####

export const getTopic = async (
  options: GetTopicMutationVariables
): Promise<{
  result: string | null;
  error: string;
}> => {
  const res = await api.getTopic(options);
  if (res.getTopic?.__typename === "MutationGetTopicSuccess") {
    return {
      result: res.getTopic.data,
      error: "",
    };
  }
  return {
    result: null,
    error: res.getTopic?.message || "Unknown error",
  };
};

//
//  #####  #      #    # #####    ##   #      # ###### ######
//  #    # #      #    # #    #  #  #  #      #     #  #
//  #    # #      #    # #    # #    # #      #    #   #####
//  #####  #      #    # #####  ###### #      #   #    #
//  #      #      #    # #   #  #    # #      #  #     #
//  #      ######  ####  #    # #    # ###### # ###### ######

export const pluralize = async (
  options: PluralizeMutationVariables
): Promise<{
  result: string | null;
  error: string;
}> => {
  const res = await api.pluralize(options);
  if (res.pluralize?.__typename === "MutationPluralizeSuccess") {
    return {
      result: res.pluralize.data,
      error: "",
    };
  }
  return {
    result: null,
    error: res.pluralize?.message || "Unknown error",
  };
};

//
//   ####   ####  #    # #    # ###### #####  #####    #####  ####     #    #   ##   #####  #    # #####   ####  #    # #    #
//  #    # #    # ##   # #    # #      #    #   #        #   #    #    ##  ##  #  #  #    # #   #  #    # #    # #    # ##   #
//  #      #    # # #  # #    # #####  #    #   #        #   #    #    # ## # #    # #    # ####   #    # #    # #    # # #  #
//  #      #    # #  # # #    # #      #####    #        #   #    #    #    # ###### #####  #  #   #    # #    # # ## # #  # #
//  #    # #    # #   ##  #  #  #      #   #    #        #   #    #    #    # #    # #   #  #   #  #    # #    # ##  ## #   ##
//   ####   ####  #    #   ##   ###### #    #   #        #    ####     #    # #    # #    # #    # #####   ####  #    # #    #

export const plaintextToMarkdown = async (
  options: PlaintextToMarkdownMutationVariables
): Promise<{
  result: string | null;
  error: string;
}> => {
  const res = await api.plaintextToMarkdown(options);
  if (
    res.plaintextToMarkdown?.__typename === "MutationPlaintextToMarkdownSuccess"
  ) {
    return {
      result: res.plaintextToMarkdown.data,
      error: "",
    };
  }
  return {
    result: null,
    error: res.plaintextToMarkdown?.message || "Unknown error",
  };
};

//
//   ####   ####  #    # #    # ###### #####  #####    #####  ####     #    # ##### #    # #
//  #    # #    # ##   # #    # #      #    #   #        #   #    #    #    #   #   ##  ## #
//  #      #    # # #  # #    # #####  #    #   #        #   #    #    ######   #   # ## # #
//  #      #    # #  # # #    # #      #####    #        #   #    #    #    #   #   #    # #
//  #    # #    # #   ##  #  #  #      #   #    #        #   #    #    #    #   #   #    # #
//   ####   ####  #    #   ##   ###### #    #   #        #    ####     #    #   #   #    # ######

export const plaintextToHTML = async (
  options: PlaintextToHtmlMutationVariables
): Promise<{
  result: string | null;
  error: string;
}> => {
  const res = await api.plaintextToHTML(options);
  if (res.plaintextToHTML?.__typename === "MutationPlaintextToHTMLSuccess") {
    return {
      result: res.plaintextToHTML.data,
      error: "",
    };
  }
  return {
    result: null,
    error: res.plaintextToHTML?.message || "Unknown error",
  };
};

//
//  #####  ####     #    #  ####    ##       ####  #####  ###### #      #      # #    #  ####
//    #   #    #    #    # #       #  #     #      #    # #      #      #      # ##   # #    #
//    #   #    #    #    #  ####  #    #     ####  #    # #####  #      #      # # #  # #
//    #   #    #    #    #      # ######         # #####  #      #      #      # #  # # #  ###
//    #   #    #    #    # #    # #    #    #    # #      #      #      #      # #   ## #    #
//    #    ####      ####   ####  #    #     ####  #      ###### ###### ###### # #    #  ####

export const toSpellingUSA = async (
  options: ToSpellingUsaMutationVariables
): Promise<{
  result: string | null;
  error: string;
}> => {
  const res = await api.toSpellingUSA(options);
  if (res.toSpellingUSA?.__typename === "MutationToSpellingUSASuccess") {
    return {
      result: res.toSpellingUSA.data,
      error: "",
    };
  }
  return {
    result: null,
    error: res.toSpellingUSA?.message || "Unknown error",
  };
};

//
//  #####  ####     #    # #    #     ####  #####  ###### #      #      # #    #  ####
//    #   #    #    #    # #   #     #      #    # #      #      #      # ##   # #    #
//    #   #    #    #    # ####       ####  #    # #####  #      #      # # #  # #
//    #   #    #    #    # #  #           # #####  #      #      #      # #  # # #  ###
//    #   #    #    #    # #   #     #    # #      #      #      #      # #   ## #    #
//    #    ####      ####  #    #     ####  #      ###### ###### ###### # #    #  ####

export const toSpellingUK = async (
  options: ToSpellingUkMutationVariables
): Promise<{
  result: string | null;
  error: string;
}> => {
  const res = await api.toSpellingUK(options);
  if (res.toSpellingUK?.__typename === "MutationToSpellingUKSuccess") {
    return {
      result: res.toSpellingUK.data,
      error: "",
    };
  }
  return {
    result: null,
    error: res.toSpellingUK?.message || "Unknown error",
  };
};
