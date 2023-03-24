import { GraphQLClient } from "graphql-request";
import {
  suggestChatResponse,
  suggestChatResponseIntents,
  suggestChatResponseMulti,
} from "./functions/chat";
import {
  hasEmojis,
  isEmoji,
  removeEmojis,
  suggestEmoji,
} from "./functions/emojis";
import {
  classify,
  elaborate,
  explain,
  fixGrammarErrors,
  fixProfanity,
  fixSpellingErrors,
  generateKeywords,
  generatePlaintext,
  getKeywords,
  getTopic,
  hasGrammarErrors,
  hasProfanity,
  hasSpellingErrors,
  includesMentionOf,
  isPlaintext,
  isQuestion,
  plaintextToHTML,
  plaintextToMarkdown,
  pluralize,
  suggestEdits,
  summarize,
  summarizeKeyPoints,
  toSpellingUK,
  toSpellingUSA,
} from "./functions/plaintext";
import {
  createOptionList,
  createStringList,
  filterOptionList,
  filterStringList,
  recommendOptionList,
  recommendStringList,
  searchOptionList,
  searchStringList,
  sortOptionList,
  sortStringList,
} from "./functions/search_recommend";
import { getSdk, Sdk, SdkFunctionWrapper } from "./schema";
//
//   ####  #####  ######   ##   ##### ######     ####  #      # ###### #    # #####
//  #    # #    # #       #  #    #   #         #    # #      # #      ##   #   #
//  #      #    # #####  #    #   #   #####     #      #      # #####  # #  #   #
//  #      #####  #      ######   #   #         #      #      # #      #  # #   #
//  #    # #   #  #      #    #   #   #         #    # #      # #      #   ##   #
//   ####  #    # ###### #    #   #   ######     ####  ###### # ###### #    #   #

const createClient = (url: string, isDev: boolean) => {
  const newClient = new GraphQLClient(`${url}/graphql`, {
    headers: {
      "api-key": API_KEY,
    },
    requestMiddleware(request) {
      if (isDev) {
        const info = JSON.parse(request.body as string);
        console.groupCollapsed(`%c ${info.operationName}`, "color:aqua");
        console.log(info.variables);
        console.groupEnd();
      }
      return request;
    },
    responseMiddleware(response) {
      if (isDev && response) {
        console.groupCollapsed(`%c response`, "color:yellow");
        console.log(response);
        console.groupEnd();
      }
      return response;
    },
  });

  return newClient;
};

//
//  # #    # # #####
//  # ##   # #   #
//  # # #  # #   #
//  # #  # # #   #
//  # #   ## #   #
//  # #    # #   #

const init = ({
  apiKey,
  mode = "production",
}: {
  apiKey?: string;
  mode?: "production" | "development";
}) => {
  if (!apiKey) {
    console.log("No API key provided. Requests will have a delayed response.");
  } else {
    API_KEY = apiKey;
  }
  const isDev = mode === "development";
  const serverURL = isDev ? DEV_SERVER_URL : LIVE_SERVER_URL;
  client = createClient(serverURL, isDev);
  api = getSdk(client, clientWrapper);
};

const clientWrapper: SdkFunctionWrapper = async <T>(
  action: () => Promise<T>,
  operationName: string,
  operationType?: string
): Promise<T> => {
  try {
    const res = await action();

    return res;
  } catch (e: any) {
    console.groupCollapsed(`%c ❌ ${operationName}`, "color:red");
    return {
      [operationName]: {
        message: e.message,
        data: null,
      },
    } as T;
  }
};

//
//   ####  #       ####  #####    ##   #       ####
//  #    # #      #    # #    #  #  #  #      #
//  #      #      #    # #####  #    # #       ####
//  #  ### #      #    # #    # ###### #           #
//  #    # #      #    # #    # #    # #      #    #
//   ####  ######  ####  #####  #    # ######  ####

let API_KEY = "";
const DEV_SERVER_URL = "http://localhost:4000";
const LIVE_SERVER_URL = "https://api.lowline.ai";
let client: GraphQLClient = createClient(LIVE_SERVER_URL, false);
export let api: Sdk = getSdk(client, clientWrapper);

//
//  ###### #    # #####   ####  #####  #####
//  #       #  #  #    # #    # #    #   #
//  #####    ##   #    # #    # #    #   #
//  #        ##   #####  #    # #####    #
//  #       #  #  #      #    # #   #    #
//  ###### #    # #       ####  #    #   #

export const _ai = {
  init,
  searchOptionList,
  recommendOptionList,
  createOptionList,
  sortOptionList,
  filterOptionList,
  searchStringList,
  recommendStringList,
  createStringList,
  sortStringList,
  filterStringList,
  suggestChatResponse,
  suggestChatResponseIntents,
  suggestChatResponseMulti,
  isPlaintext,
  generatePlaintext,
  hasSpellingErrors,
  fixSpellingErrors,
  hasGrammarErrors,
  fixGrammarErrors,
  hasProfanity,
  fixProfanity,
  includesMentionOf,
  isQuestion,
  suggestEdits,
  summarize,
  summarizeKeyPoints,
  elaborate,
  explain,
  classify,
  getKeywords,
  generateKeywords,
  getTopic,
  pluralize,
  plaintextToMarkdown,
  plaintextToHTML,
  toSpellingUSA,
  toSpellingUK,
  isEmoji,
  hasEmojis,
  suggestEmoji,
  removeEmojis,
};

export default _ai;
