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
  data: OptionOutput[];
  error: string;
}> => {
  const res = await api.searchOptionList(options);
  if (res.searchOptionList?.__typename === "MutationSearchOptionListSuccess") {
    return {
      data: res.searchOptionList.data,
      error: "",
    };
  }
  return {
    data: [],
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
  data: OptionOutput[];
  error: string;
}> => {
  const res = await api.recommendOptionList(options);
  if (
    res.recommendOptionList?.__typename === "MutationRecommendOptionListSuccess"
  ) {
    return {
      data: res.recommendOptionList.data,
      error: "",
    };
  }
  return {
    data: [],
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
  data: OptionOutput[];
  error: string;
}> => {
  const res = await api.createOptionList(options);
  if (res.createOptionList?.__typename === "MutationCreateOptionListSuccess") {
    return {
      data: res.createOptionList.data,
      error: "",
    };
  }
  return {
    data: [],
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
  data: OptionOutput[];
  error: string;
}> => {
  const res = await api.sortOptionList(options);
  if (res.sortOptionList?.__typename === "MutationSortOptionListSuccess") {
    return {
      data: res.sortOptionList.data,
      error: "",
    };
  }
  return {
    data: [],
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
  data: OptionOutput[];
  error: string;
}> => {
  const res = await api.filterOptionList(options);
  if (res.filterOptionList?.__typename === "MutationFilterOptionListSuccess") {
    return {
      data: res.filterOptionList.data,
      error: "",
    };
  }
  return {
    data: [],
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
  data: string[];
  error: string;
}> => {
  const res = await api.searchStringList(options);
  if (res.searchStringList?.__typename === "MutationSearchStringListSuccess") {
    return {
      data: res.searchStringList.data,
      error: "",
    };
  }
  return {
    data: [],
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
  data: string[];
  error: string;
}> => {
  const res = await api.recommendStringList(options);
  if (
    res.recommendStringList?.__typename === "MutationRecommendStringListSuccess"
  ) {
    return {
      data: res.recommendStringList.data,
      error: "",
    };
  }
  return {
    data: [],
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
  data: string[];
  error: string;
}> => {
  const res = await api.createStringList(options);
  if (res.createStringList?.__typename === "MutationCreateStringListSuccess") {
    return {
      data: res.createStringList.data,
      error: "",
    };
  }
  return {
    data: [],
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
  data: string[];
  error: string;
}> => {
  const res = await api.sortStringList(options);
  if (res.sortStringList?.__typename === "MutationSortStringListSuccess") {
    return {
      data: res.sortStringList.data,
      error: "",
    };
  }
  return {
    data: [],
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
  data: string[];
  error: string;
}> => {
  const res = await api.filterStringList(options);
  if (res.filterStringList?.__typename === "MutationFilterStringListSuccess") {
    return {
      data: res.filterStringList.data,
      error: "",
    };
  }
  return {
    data: [],
    error: res.filterStringList?.message || "Unknown error",
  };
};
