import { api } from "..";
import {
  SuggestChatResponseIntentsMutationVariables,
  SuggestChatResponseMultiMutationVariables,
  SuggestChatResponseMutationVariables,
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
  result: string | null;
  error: string;
}> => {
  const res = await api.suggestChatResponse(options);
  if (
    res.suggestChatResponse?.__typename === "MutationSuggestChatResponseSuccess"
  ) {
    return {
      result: res.suggestChatResponse.data,
      error: "",
    };
  }
  return {
    result: null,
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
  result: string[];
  error: string;
}> => {
  const res = await api.suggestChatResponseIntents(options);
  if (
    res.suggestChatResponseIntents?.__typename ===
    "MutationSuggestChatResponseIntentsSuccess"
  ) {
    return {
      result: res.suggestChatResponseIntents.data,
      error: "",
    };
  }
  return {
    result: [],
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
  result: string[];
  error: string;
}> => {
  const res = await api.suggestChatResponseMulti(options);
  if (
    res.suggestChatResponseMulti?.__typename ===
    "MutationSuggestChatResponseMultiSuccess"
  ) {
    return {
      result: res.suggestChatResponseMulti.data,
      error: "",
    };
  }
  return {
    result: [],
    error: res.suggestChatResponseMulti?.message || "Unknown error",
  };
};
