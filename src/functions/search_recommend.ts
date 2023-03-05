import { api } from "..";
import {
  CreateOptionListMutationVariables,
  CreateStringListMutationVariables,
  FilterOptionListMutationVariables,
  FilterStringListMutationVariables,
  OptionOutput,
  RecommendOptionListMutationVariables,
  RecommendStringListMutationVariables,
  SearchOptionListMutationVariables,
  SearchStringListMutationVariables,
  SortOptionListMutationVariables,
  SortStringListMutationVariables,
} from "../schema";

//
//   ####  ######   ##   #####   ####  #    #     ####  #####  ##### #  ####  #    #    #      #  ####  #####
//  #      #       #  #  #    # #    # #    #    #    # #    #   #   # #    # ##   #    #      # #        #
//   ####  #####  #    # #    # #      ######    #    # #    #   #   # #    # # #  #    #      #  ####    #
//       # #      ###### #####  #      #    #    #    # #####    #   # #    # #  # #    #      #      #   #
//  #    # #      #    # #   #  #    # #    #    #    # #        #   # #    # #   ##    #      # #    #   #
//   ####  ###### #    # #    #  ####  #    #     ####  #        #   #  ####  #    #    ###### #  ####    #

export const searchOptionList = async (
  options: SearchOptionListMutationVariables
): Promise<{
  result: OptionOutput[];
  error: string;
}> => {
  const res = await api.searchOptionList(options);
  if (res.searchOptionList?.__typename === "MutationSearchOptionListSuccess") {
    return {
      result: res.searchOptionList.data,
      error: "",
    };
  }
  return {
    result: [],
    error: res.searchOptionList?.message || "Unknown error",
  };
};

//
//  #####  ######  ####   ####  #    # #    # ###### #    # #####      ####  #####  #####    #      #  ####  #####
//  #    # #      #    # #    # ##  ## ##  ## #      ##   # #    #    #    # #    #   #      #      # #        #
//  #    # #####  #      #    # # ## # # ## # #####  # #  # #    #    #    # #    #   #      #      #  ####    #
//  #####  #      #      #    # #    # #    # #      #  # # #    #    #    # #####    #      #      #      #   #
//  #   #  #      #    # #    # #    # #    # #      #   ## #    #    #    # #        #      #      # #    #   #
//  #    # ######  ####   ####  #    # #    # ###### #    # #####      ####  #        #      ###### #  ####    #

export const recommendOptionList = async (
  options: RecommendOptionListMutationVariables
): Promise<{
  result: OptionOutput[];
  error: string;
}> => {
  const res = await api.recommendOptionList(options);
  if (
    res.recommendOptionList?.__typename === "MutationRecommendOptionListSuccess"
  ) {
    return {
      result: res.recommendOptionList.data,
      error: "",
    };
  }
  return {
    result: [],
    error: res.recommendOptionList?.message || "Unknown error",
  };
};

//
//   ####  #####  ######   ##   ##### ######     ####  #####  #####    #      #  ####  #####
//  #    # #    # #       #  #    #   #         #    # #    #   #      #      # #        #
//  #      #    # #####  #    #   #   #####     #    # #    #   #      #      #  ####    #
//  #      #####  #      ######   #   #         #    # #####    #      #      #      #   #
//  #    # #   #  #      #    #   #   #         #    # #        #      #      # #    #   #
//   ####  #    # ###### #    #   #   ######     ####  #        #      ###### #  ####    #

export const createOptionList = async (
  options: CreateOptionListMutationVariables
): Promise<{
  result: OptionOutput[];
  error: string;
}> => {
  const res = await api.createOptionList(options);
  if (res.createOptionList?.__typename === "MutationCreateOptionListSuccess") {
    return {
      result: res.createOptionList.data,
      error: "",
    };
  }
  return {
    result: [],
    error: res.createOptionList?.message || "Unknown error",
  };
};

//
//   ####   ####  #####  #####     ####  #####  #####    #      #  ####  #####
//  #      #    # #    #   #      #    # #    #   #      #      # #        #
//   ####  #    # #    #   #      #    # #    #   #      #      #  ####    #
//       # #    # #####    #      #    # #####    #      #      #      #   #
//  #    # #    # #   #    #      #    # #        #      #      # #    #   #
//   ####   ####  #    #   #       ####  #        #      ###### #  ####    #

export const sortOptionList = async (
  options: SortOptionListMutationVariables
): Promise<{
  result: OptionOutput[];
  error: string;
}> => {
  const res = await api.sortOptionList(options);
  if (res.sortOptionList?.__typename === "MutationSortOptionListSuccess") {
    return {
      result: res.sortOptionList.data,
      error: "",
    };
  }
  return {
    result: [],
    error: res.sortOptionList?.message || "Unknown error",
  };
};

//
//  ###### # #      ##### ###### #####      ####  #####  #####    #      #  ####  #####
//  #      # #        #   #      #    #    #    # #    #   #      #      # #        #
//  #####  # #        #   #####  #    #    #    # #    #   #      #      #  ####    #
//  #      # #        #   #      #####     #    # #####    #      #      #      #   #
//  #      # #        #   #      #   #     #    # #        #      #      # #    #   #
//  #      # ######   #   ###### #    #     ####  #        #      ###### #  ####    #

export const filterOptionList = async (
  options: FilterOptionListMutationVariables
): Promise<{
  result: OptionOutput[];
  error: string;
}> => {
  const res = await api.filterOptionList(options);
  if (res.filterOptionList?.__typename === "MutationFilterOptionListSuccess") {
    return {
      result: res.filterOptionList.data,
      error: "",
    };
  }
  return {
    result: [],
    error: res.filterOptionList?.message || "Unknown error",
  };
};

//
//   ####  ######   ##   #####   ####  #    #     ####  ##### #####  # #    #  ####     #      #  ####  #####
//  #      #       #  #  #    # #    # #    #    #        #   #    # # ##   # #    #    #      # #        #
//   ####  #####  #    # #    # #      ######     ####    #   #    # # # #  # #         #      #  ####    #
//       # #      ###### #####  #      #    #         #   #   #####  # #  # # #  ###    #      #      #   #
//  #    # #      #    # #   #  #    # #    #    #    #   #   #   #  # #   ## #    #    #      # #    #   #
//   ####  ###### #    # #    #  ####  #    #     ####    #   #    # # #    #  ####     ###### #  ####    #

export const searchStringList = async (
  options: SearchStringListMutationVariables
): Promise<{
  result: string[];
  error: string;
}> => {
  const res = await api.searchStringList(options);
  if (res.searchStringList?.__typename === "MutationSearchStringListSuccess") {
    return {
      result: res.searchStringList.data,
      error: "",
    };
  }
  return {
    result: [],
    error: res.searchStringList?.message || "Unknown error",
  };
};

//
//  #####  ######  ####   ####  #    # #    # ###### #    # #####      ####  ##### #####     #      #  ####  #####
//  #    # #      #    # #    # ##  ## ##  ## #      ##   # #    #    #        #   #    #    #      # #        #
//  #    # #####  #      #    # # ## # # ## # #####  # #  # #    #     ####    #   #    #    #      #  ####    #
//  #####  #      #      #    # #    # #    # #      #  # # #    #         #   #   #####     #      #      #   #
//  #   #  #      #    # #    # #    # #    # #      #   ## #    #    #    #   #   #   #     #      # #    #   #
//  #    # ######  ####   ####  #    # #    # ###### #    # #####      ####    #   #    #    ###### #  ####    #

export const recommendStringList = async (
  options: RecommendStringListMutationVariables
): Promise<{
  result: string[];
  error: string;
}> => {
  const res = await api.recommendStringList(options);
  if (
    res.recommendStringList?.__typename === "MutationRecommendStringListSuccess"
  ) {
    return {
      result: res.recommendStringList.data,
      error: "",
    };
  }
  return {
    result: [],
    error: res.recommendStringList?.message || "Unknown error",
  };
};

//
//   ####  #####  ######   ##   ##### ######     ####  ##### #####     #      #  ####  #####
//  #    # #    # #       #  #    #   #         #        #   #    #    #      # #        #
//  #      #    # #####  #    #   #   #####      ####    #   #    #    #      #  ####    #
//  #      #####  #      ######   #   #              #   #   #####     #      #      #   #
//  #    # #   #  #      #    #   #   #         #    #   #   #   #     #      # #    #   #
//   ####  #    # ###### #    #   #   ######     ####    #   #    #    ###### #  ####    #

export const createStringList = async (
  options: CreateStringListMutationVariables
): Promise<{
  result: string[];
  error: string;
}> => {
  const res = await api.createStringList(options);
  if (res.createStringList?.__typename === "MutationCreateStringListSuccess") {
    return {
      result: res.createStringList.data,
      error: "",
    };
  }
  return {
    result: [],
    error: res.createStringList?.message || "Unknown error",
  };
};

//
//   ####   ####  #####  #####     ####  ##### #####     #      #  ####  #####
//  #      #    # #    #   #      #        #   #    #    #      # #        #
//   ####  #    # #    #   #       ####    #   #    #    #      #  ####    #
//       # #    # #####    #           #   #   #####     #      #      #   #
//  #    # #    # #   #    #      #    #   #   #   #     #      # #    #   #
//   ####   ####  #    #   #       ####    #   #    #    ###### #  ####    #

export const sortStringList = async (
  options: SortStringListMutationVariables
): Promise<{
  result: string[];
  error: string;
}> => {
  const res = await api.sortStringList(options);
  if (res.sortStringList?.__typename === "MutationSortStringListSuccess") {
    return {
      result: res.sortStringList.data,
      error: "",
    };
  }
  return {
    result: [],
    error: res.sortStringList?.message || "Unknown error",
  };
};

//
//  ###### # #      ##### ###### #####      ####  ##### #####     #      #  ####  #####
//  #      # #        #   #      #    #    #        #   #    #    #      # #        #
//  #####  # #        #   #####  #    #     ####    #   #    #    #      #  ####    #
//  #      # #        #   #      #####          #   #   #####     #      #      #   #
//  #      # #        #   #      #   #     #    #   #   #   #     #      # #    #   #
//  #      # ######   #   ###### #    #     ####    #   #    #    ###### #  ####    #

export const filterStringList = async (
  options: FilterStringListMutationVariables
): Promise<{
  result: string[];
  error: string;
}> => {
  const res = await api.filterStringList(options);
  if (res.filterStringList?.__typename === "MutationFilterStringListSuccess") {
    return {
      result: res.filterStringList.data,
      error: "",
    };
  }
  return {
    result: [],
    error: res.filterStringList?.message || "Unknown error",
  };
};
