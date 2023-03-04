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
