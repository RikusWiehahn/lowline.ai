import { api } from "..";
import {
  SuggestChatResponseIntentsMutationVariables,
  SuggestChatResponseMultiMutationVariables,
  SuggestChatResponseMutationVariables,
  SuggestEmailResponseIntentsMutationVariables,
  SuggestEmailResponseMultiMutationVariables,
  SuggestEmailResponseMutationVariables,
} from "../schema";

//
//   ####  #    #  ####   ####  ######  ####  #####     ####  #    #   ##   #####    #####  ######  ####
//  #      #    # #    # #    # #      #        #      #    # #    #  #  #    #      #    # #      #
//   ####  #    # #      #      #####   ####    #      #      ###### #    #   #      #    # #####   ####
//       # #    # #  ### #  ### #           #   #      #      #    # ######   #      #####  #           #
//  #    # #    # #    # #    # #      #    #   #      #    # #    # #    #   #      #   #  #      #    #
//   ####   ####   ####   ####  ######  ####    #       ####  #    # #    #   #      #    # ######  ####

export const suggestChatResponse = async (
  options: SuggestChatResponseMutationVariables
): Promise<{
  data: string | null;
  error: string;
}> => {
  const res = await api.suggestChatResponse(options);
  if (
    res.suggestChatResponse?.__typename === "MutationSuggestChatResponseSuccess"
  ) {
    return {
      data: res.suggestChatResponse.data,
      error: "",
    };
  }
  return {
    data: null,
    error: res.suggestChatResponse?.message || "Unknown error",
  };
};

//
//   ####  #    #  ####   ####  ######  ####  #####     ####  #    #   ##   #####    #####  ######  ####     # #    # ##### ###### #    # #####  ####
//  #      #    # #    # #    # #      #        #      #    # #    #  #  #    #      #    # #      #         # ##   #   #   #      ##   #   #   #
//   ####  #    # #      #      #####   ####    #      #      ###### #    #   #      #    # #####   ####     # # #  #   #   #####  # #  #   #    ####
//       # #    # #  ### #  ### #           #   #      #      #    # ######   #      #####  #           #    # #  # #   #   #      #  # #   #        #
//  #    # #    # #    # #    # #      #    #   #      #    # #    # #    #   #      #   #  #      #    #    # #   ##   #   #      #   ##   #   #    #
//   ####   ####   ####   ####  ######  ####    #       ####  #    # #    #   #      #    # ######  ####     # #    #   #   ###### #    #   #    ####

export const suggestChatResponseIntents = async (
  options: SuggestChatResponseIntentsMutationVariables
): Promise<{
  data: string[];
  error: string;
}> => {
  const res = await api.suggestChatResponseIntents(options);
  if (
    res.suggestChatResponseIntents?.__typename ===
    "MutationSuggestChatResponseIntentsSuccess"
  ) {
    return {
      data: res.suggestChatResponseIntents.data,
      error: "",
    };
  }
  return {
    data: [],
    error: res.suggestChatResponseIntents?.message || "Unknown error",
  };
};

//
//   ####  #    #  ####   ####  ######  ####  #####     ####  #    #   ##   #####    #####  ######  ####     #    # #    # #      ##### #
//  #      #    # #    # #    # #      #        #      #    # #    #  #  #    #      #    # #      #         ##  ## #    # #        #   #
//   ####  #    # #      #      #####   ####    #      #      ###### #    #   #      #    # #####   ####     # ## # #    # #        #   #
//       # #    # #  ### #  ### #           #   #      #      #    # ######   #      #####  #           #    #    # #    # #        #   #
//  #    # #    # #    # #    # #      #    #   #      #    # #    # #    #   #      #   #  #      #    #    #    # #    # #        #   #
//   ####   ####   ####   ####  ######  ####    #       ####  #    # #    #   #      #    # ######  ####     #    #  ####  ######   #   #

export const suggestChatResponseMulti = async (
  options: SuggestChatResponseMultiMutationVariables
): Promise<{
  data: string[];
  error: string;
}> => {
  const res = await api.suggestChatResponseMulti(options);
  if (
    res.suggestChatResponseMulti?.__typename ===
    "MutationSuggestChatResponseMultiSuccess"
  ) {
    return {
      data: res.suggestChatResponseMulti.data,
      error: "",
    };
  }
  return {
    data: [],
    error: res.suggestChatResponseMulti?.message || "Unknown error",
  };
};

//
//   ####  #    #  ####   ####  ######  ####  #####    ###### #    #   ##   # #         #####  ######  ####  #####   ####  #    #  ####  ######
//  #      #    # #    # #    # #      #        #      #      ##  ##  #  #  # #         #    # #      #      #    # #    # ##   # #      #
//   ####  #    # #      #      #####   ####    #      #####  # ## # #    # # #         #    # #####   ####  #    # #    # # #  #  ####  #####
//       # #    # #  ### #  ### #           #   #      #      #    # ###### # #         #####  #           # #####  #    # #  # #      # #
//  #    # #    # #    # #    # #      #    #   #      #      #    # #    # # #         #   #  #      #    # #      #    # #   ## #    # #
//   ####   ####   ####   ####  ######  ####    #      ###### #    # #    # # ######    #    # ######  ####  #       ####  #    #  ####  ######

export const suggestEmailResponse = async (
  options: SuggestEmailResponseMutationVariables
): Promise<{
  data: string | null;
  error: string;
}> => {
  const res = await api.suggestEmailResponse(options);
  if (
    res.suggestEmailResponse?.__typename ===
    "MutationSuggestEmailResponseSuccess"
  ) {
    return {
      data: res.suggestEmailResponse.data,
      error: "",
    };
  }
  return {
    data: null,
    error: res.suggestEmailResponse?.message || "Unknown error",
  };
};

//
//   ####  #    #  ####   ####  ######  ####  #####    ###### #    #   ##   # #         #####  ######  ####     # #    # ##### ###### #    # #####  ####
//  #      #    # #    # #    # #      #        #      #      ##  ##  #  #  # #         #    # #      #         # ##   #   #   #      ##   #   #   #
//   ####  #    # #      #      #####   ####    #      #####  # ## # #    # # #         #    # #####   ####     # # #  #   #   #####  # #  #   #    ####
//       # #    # #  ### #  ### #           #   #      #      #    # ###### # #         #####  #           #    # #  # #   #   #      #  # #   #        #
//  #    # #    # #    # #    # #      #    #   #      #      #    # #    # # #         #   #  #      #    #    # #   ##   #   #      #   ##   #   #    #
//   ####   ####   ####   ####  ######  ####    #      ###### #    # #    # # ######    #    # ######  ####     # #    #   #   ###### #    #   #    ####

export const suggestEmailResponseIntents = async (
  options: SuggestEmailResponseIntentsMutationVariables
): Promise<{
  data: string[];
  error: string;
}> => {
  const res = await api.suggestEmailResponseIntents(options);
  if (
    res.suggestEmailResponseIntents?.__typename ===
    "MutationSuggestEmailResponseIntentsSuccess"
  ) {
    return {
      data: res.suggestEmailResponseIntents.data,
      error: "",
    };
  }
  return {
    data: [],
    error: res.suggestEmailResponseIntents?.message || "Unknown error",
  };
};

//
//   ####  #    #  ####   ####  ######  ####  #####    ###### #    #   ##   # #         #####  ######  ####     #    # #    # #      ##### #
//  #      #    # #    # #    # #      #        #      #      ##  ##  #  #  # #         #    # #      #         ##  ## #    # #        #   #
//   ####  #    # #      #      #####   ####    #      #####  # ## # #    # # #         #    # #####   ####     # ## # #    # #        #   #
//       # #    # #  ### #  ### #           #   #      #      #    # ###### # #         #####  #           #    #    # #    # #        #   #
//  #    # #    # #    # #    # #      #    #   #      #      #    # #    # # #         #   #  #      #    #    #    # #    # #        #   #
//   ####   ####   ####   ####  ######  ####    #      ###### #    # #    # # ######    #    # ######  ####     #    #  ####  ######   #   #

export const suggestEmailResponseMulti = async (
  options: SuggestEmailResponseMultiMutationVariables
): Promise<{
  data: string[];
  error: string;
}> => {
  const res = await api.suggestEmailResponseMulti(options);
  if (
    res.suggestEmailResponseMulti?.__typename ===
    "MutationSuggestEmailResponseMultiSuccess"
  ) {
    return {
      data: res.suggestEmailResponseMulti.data,
      error: "",
    };
  }
  return {
    data: [],
    error: res.suggestEmailResponseMulti?.message || "Unknown error",
  };
};
