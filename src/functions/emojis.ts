import { api } from "..";
import {
  HasEmojisMutationVariables,
  IsEmojiMutationVariables,
  RemoveEmojisMutationVariables,
  SuggestEmojiMutationVariables,
} from "../schema";

//
//   ####  #    #  ####   ####  ######  ####  #####    ###### #    #  ####       # #
//  #      #    # #    # #    # #      #        #      #      ##  ## #    #      # #
//   ####  #    # #      #      #####   ####    #      #####  # ## # #    #      # #
//       # #    # #  ### #  ### #           #   #      #      #    # #    #      # #
//  #    # #    # #    # #    # #      #    #   #      #      #    # #    # #    # #
//   ####   ####   ####   ####  ######  ####    #      ###### #    #  ####   ####  #

export const suggestEmoji = async (
  options: SuggestEmojiMutationVariables
): Promise<{
  result: string | null;
  error: string;
}> => {
  const res = await api.suggestEmoji(options);
  if (res.suggestEmoji?.__typename === "MutationSuggestEmojiSuccess") {
    return {
      result: res.suggestEmoji.data,
      error: "",
    };
  }
  return {
    result: null,
    error: res.suggestEmoji?.message || "Unknown error",
  };
};

//
//  #  ####     ###### #    #  ####       # #
//  # #         #      ##  ## #    #      # #
//  #  ####     #####  # ## # #    #      # #
//  #      #    #      #    # #    #      # #
//  # #    #    #      #    # #    # #    # #
//  #  ####     ###### #    #  ####   ####  #

export const isEmoji = async (
  options: IsEmojiMutationVariables
): Promise<{
  result: boolean | null;
  error: string;
}> => {
  const res = await api.isEmoji(options);
  if (res.isEmoji?.__typename === "MutationIsEmojiSuccess") {
    return {
      result: res.isEmoji.data,
      error: "",
    };
  }
  return {
    result: null,
    error: res.isEmoji?.message || "Unknown error",
  };
};

//
//  #    #   ##    ####     ###### #    #  ####       # #  ####
//  #    #  #  #  #         #      ##  ## #    #      # # #
//  ###### #    #  ####     #####  # ## # #    #      # #  ####
//  #    # ######      #    #      #    # #    #      # #      #
//  #    # #    # #    #    #      #    # #    # #    # # #    #
//  #    # #    #  ####     ###### #    #  ####   ####  #  ####

export const hasEmojis = async (
  options: HasEmojisMutationVariables
): Promise<{
  result: boolean | null;
  error: string;
}> => {
  const res = await api.hasEmojis(options);
  if (res.hasEmojis?.__typename === "MutationHasEmojisSuccess") {
    return {
      result: res.hasEmojis.data,
      error: "",
    };
  }
  return {
    result: null,
    error: res.hasEmojis?.message || "Unknown error",
  };
};

//
//  #####  ###### #    #  ####  #    # ######    ###### #    #  ####       # #  ####
//  #    # #      ##  ## #    # #    # #         #      ##  ## #    #      # # #
//  #    # #####  # ## # #    # #    # #####     #####  # ## # #    #      # #  ####
//  #####  #      #    # #    # #    # #         #      #    # #    #      # #      #
//  #   #  #      #    # #    #  #  #  #         #      #    # #    # #    # # #    #
//  #    # ###### #    #  ####    ##   ######    ###### #    #  ####   ####  #  ####

export const removeEmojis = async (
  options: RemoveEmojisMutationVariables
): Promise<{
  result: string | null;
  error: string;
}> => {
  const res = await api.removeEmojis(options);
  if (res.removeEmojis?.__typename === "MutationRemoveEmojisSuccess") {
    return {
      result: res.removeEmojis.data,
      error: "",
    };
  }
  return {
    result: null,
    error: res.removeEmojis?.message || "Unknown error",
  };
};
