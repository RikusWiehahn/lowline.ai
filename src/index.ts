import { GraphQLClient } from "graphql-request";
import {
  createOptionList,
  filterOptionList,
  recommendOptionList,
  searchOptionList,
  searchStringList,
  sortOptionList,
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
  searchStringList,
  searchOptionList,
  recommendOptionList,
  createOptionList,
  sortOptionList,
  filterOptionList,
};

export default _ai;
