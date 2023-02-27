import {
  getSdk,
  OptionListSearchMutationVariables,
  OptionOutput,
  SdkFunctionWrapper,
  StringListSearchMutationVariables,
} from "./schema";
import { gql, GraphQLClient } from "graphql-request";

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
//   ####  #       ####  #####    ##   #       ####
//  #    # #      #    # #    #  #  #  #      #
//  #      #      #    # #####  #    # #       ####
//  #  ### #      #    # #    # ###### #           #
//  #    # #      #    # #    # #    # #      #    #
//   ####  ######  ####  #####  #    # ######  ####

let API_KEY = "";
const DEV_SERVER_URL = "https://localhost:4000";
const LIVE_SERVER_URL = "https://api.lowline.ai";
let client: GraphQLClient = createClient(LIVE_SERVER_URL, false);




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
  apiKey: string;
  mode?: "production" | "development";
}) => {
  if (!apiKey) throw new Error("lowline.ai: API key is required");
  API_KEY = apiKey;
  const isDev = mode === "development";
  const serverURL = isDev ? DEV_SERVER_URL : LIVE_SERVER_URL;
  client = createClient(serverURL, isDev);
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

const api = getSdk(client, clientWrapper);

//
//  ###### #    # #    #  ####  ##### #  ####  #    #  ####
//  #      #    # ##   # #    #   #   # #    # ##   # #
//  #####  #    # # #  # #        #   # #    # # #  #  ####
//  #      #    # #  # # #        #   # #    # #  # #      #
//  #      #    # #   ## #    #   #   # #    # #   ## #    #
//  #       ####  #    #  ####    #   #  ####  #    #  ####

export const stringListSearch = async (
  options: StringListSearchMutationVariables
): Promise<{
  data: string[];
  error: string;
}> => {
  const res = await api.stringListSearch(options);
  if (res.stringListSearch?.__typename === "MutationStringListSearchSuccess") {
    return {
      data: res.stringListSearch.data,
      error: "",
    };
  }
  return {
    data: [],
    error: res.stringListSearch?.message || "Unknown error",
  };
};

export const optionListSearch = async (
  options: OptionListSearchMutationVariables
): Promise<{
  data: OptionOutput[];
  error: string;
}> => {
  const res = await api.optionListSearch(options);
  if (res.optionListSearch?.__typename === "MutationOptionListSearchSuccess") {
    return {
      data: res.optionListSearch.data,
      error: "",
    };
  }
  return {
    data: [],
    error: res.optionListSearch?.message || "Unknown error",
  };
};


//                                           
//  ###### #    # #####   ####  #####  ##### 
//  #       #  #  #    # #    # #    #   #   
//  #####    ##   #    # #    # #    #   #   
//  #        ##   #####  #    # #####    #   
//  #       #  #  #      #    # #   #    #   
//  ###### #    # #       ####  #    #   #   


export const _ai = {
  init,
  stringListSearch,
  optionListSearch,
};

export default _ai;