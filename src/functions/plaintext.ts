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
  data: boolean | null;
  error: string;
}> => {
  const res = await api.isPlaintext(options);
  if (res.isPlaintext?.__typename === "MutationIsPlaintextSuccess") {
    return {
      data: res.isPlaintext.data,
      error: "",
    };
  }
  return {
    data: null,
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
  data: string | null;
  error: string;
}> => {
  const res = await api.generatePlaintext(options);
  if (
    res.generatePlaintext?.__typename === "MutationGeneratePlaintextSuccess"
  ) {
    return {
      data: res.generatePlaintext.data,
      error: "",
    };
  }
  return {
    data: null,
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
  data: boolean | null;
  error: string;
}> => {
  const res = await api.hasSpellingErrors(options);
  if (
    res.hasSpellingErrors?.__typename === "MutationHasSpellingErrorsSuccess"
  ) {
    return {
      data: res.hasSpellingErrors.data,
      error: "",
    };
  }
  return {
    data: null,
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
  data: string | null;
  error: string;
}> => {
  const res = await api.fixSpellingErrors(options);
  if (
    res.fixSpellingErrors?.__typename === "MutationFixSpellingErrorsSuccess"
  ) {
    return {
      data: res.fixSpellingErrors.data,
      error: "",
    };
  }
  return {
    data: null,
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
  data: boolean | null;
  error: string;
}> => {
  const res = await api.hasGrammarErrors(options);
  if (res.hasGrammarErrors?.__typename === "MutationHasGrammarErrorsSuccess") {
    return {
      data: res.hasGrammarErrors.data,
      error: "",
    };
  }
  return {
    data: null,
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
  data: string | null;
  error: string;
}> => {
  const res = await api.fixGrammarErrors(options);
  if (res.fixGrammarErrors?.__typename === "MutationFixGrammarErrorsSuccess") {
    return {
      data: res.fixGrammarErrors.data,
      error: "",
    };
  }
  return {
    data: null,
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
  data: boolean | null;
  error: string;
}> => {
  const res = await api.hasProfanity(options);
  if (res.hasProfanity?.__typename === "MutationHasProfanitySuccess") {
    return {
      data: res.hasProfanity.data,
      error: "",
    };
  }
  return {
    data: null,
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
  data: string | null;
  error: string;
}> => {
  const res = await api.fixProfanity(options);
  if (res.fixProfanity?.__typename === "MutationFixProfanitySuccess") {
    return {
      data: res.fixProfanity.data,
      error: "",
    };
  }
  return {
    data: null,
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
  data: boolean | null;
  error: string;
}> => {
  const res = await api.includesMentionOf(options);
  if (
    res.includesMentionOf?.__typename === "MutationIncludesMentionOfSuccess"
  ) {
    return {
      data: res.includesMentionOf.data,
      error: "",
    };
  }
  return {
    data: null,
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
  data: boolean | null;
  error: string;
}> => {
  const res = await api.isQuestion(options);
  if (res.isQuestion?.__typename === "MutationIsQuestionSuccess") {
    return {
      data: res.isQuestion.data,
      error: "",
    };
  }
  return {
    data: null,
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
  data: string | null;
  error: string;
}> => {
  const res = await api.suggestEdits(options);
  if (res.suggestEdits?.__typename === "MutationSuggestEditsSuccess") {
    return {
      data: res.suggestEdits.data,
      error: "",
    };
  }
  return {
    data: null,
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
  data: string | null;
  error: string;
}> => {
  const res = await api.summarize(options);
  if (res.summarize?.__typename === "MutationSummarizeSuccess") {
    return {
      data: res.summarize.data,
      error: "",
    };
  }
  return {
    data: null,
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
  data: string | null;
  error: string;
}> => {
  const res = await api.summarizeKeyPoints(options);
  if (
    res.summarizeKeyPoints?.__typename === "MutationSummarizeKeyPointsSuccess"
  ) {
    return {
      data: res.summarizeKeyPoints.data,
      error: "",
    };
  }
  return {
    data: null,
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
  data: string | null;
  error: string;
}> => {
  const res = await api.elaborate(options);
  if (res.elaborate?.__typename === "MutationElaborateSuccess") {
    return {
      data: res.elaborate.data,
      error: "",
    };
  }
  return {
    data: null,
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

export const explain = async (
  options: ExplainMutationVariables
): Promise<{
  data: string | null;
  error: string;
}> => {
  const res = await api.explain(options);
  if (res.explain?.__typename === "MutationExplainSuccess") {
    return {
      data: res.explain.data,
      error: "",
    };
  }
  return {
    data: null,
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
  data: OptionOutput | null;
  error: string;
}> => {
  const res = await api.classify(options);
  if (res.classify?.__typename === "MutationClassifySuccess") {
    return {
      data: res.classify.data,
      error: "",
    };
  }
  return {
    data: null,
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
  data: string[];
  error: string;
}> => {
  const res = await api.getKeywords(options);
  if (res.getKeywords?.__typename === "MutationGetKeywordsSuccess") {
    return {
      data: res.getKeywords.data,
      error: "",
    };
  }
  return {
    data: [],
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
  data: string[];
  error: string;
}> => {
  const res = await api.generateKeywords(options);
  if (res.generateKeywords?.__typename === "MutationGenerateKeywordsSuccess") {
    return {
      data: res.generateKeywords.data,
      error: "",
    };
  }
  return {
    data: [],
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
  data: string | null;
  error: string;
}> => {
  const res = await api.getTopic(options);
  if (res.getTopic?.__typename === "MutationGetTopicSuccess") {
    return {
      data: res.getTopic.data,
      error: "",
    };
  }
  return {
    data: null,
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
  data: string | null;
  error: string;
}> => {
  const res = await api.pluralize(options);
  if (res.pluralize?.__typename === "MutationPluralizeSuccess") {
    return {
      data: res.pluralize.data,
      error: "",
    };
  }
  return {
    data: null,
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
  data: string | null;
  error: string;
}> => {
  const res = await api.plaintextToMarkdown(options);
  if (
    res.plaintextToMarkdown?.__typename === "MutationPlaintextToMarkdownSuccess"
  ) {
    return {
      data: res.plaintextToMarkdown.data,
      error: "",
    };
  }
  return {
    data: null,
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
  data: string | null;
  error: string;
}> => {
  const res = await api.plaintextToHTML(options);
  if (res.plaintextToHTML?.__typename === "MutationPlaintextToHTMLSuccess") {
    return {
      data: res.plaintextToHTML.data,
      error: "",
    };
  }
  return {
    data: null,
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
  data: string | null;
  error: string;
}> => {
  const res = await api.toSpellingUSA(options);
  if (res.toSpellingUSA?.__typename === "MutationToSpellingUSASuccess") {
    return {
      data: res.toSpellingUSA.data,
      error: "",
    };
  }
  return {
    data: null,
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
  data: string | null;
  error: string;
}> => {
  const res = await api.toSpellingUK(options);
  if (res.toSpellingUK?.__typename === "MutationToSpellingUKSuccess") {
    return {
      data: res.toSpellingUK.data,
      error: "",
    };
  }
  return {
    data: null,
    error: res.toSpellingUK?.message || "Unknown error",
  };
};
