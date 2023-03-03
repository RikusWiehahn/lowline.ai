import _ai from "..";

jest.setTimeout(30000);

_ai.init({
  mode: "development", // or "production"
  apiKey: "sk-1ef06007689f8c5183cbedf05f3d3a89a236f544a10a1f6e0fdcd24842ecc965",
});

//
//   ####  ######   ##   #####   ####  #    #     ####  #####  ##### #  ####  #    #    #      #  ####  #####
//  #      #       #  #  #    # #    # #    #    #    # #    #   #   # #    # ##   #    #      # #        #
//   ####  #####  #    # #    # #      ######    #    # #    #   #   # #    # # #  #    #      #  ####    #
//       # #      ###### #####  #      #    #    #    # #####    #   # #    # #  # #    #      #      #   #
//  #    # #      #    # #   #  #    # #    #    #    # #        #   # #    # #   ##    #      # #    #   #
//   ####  ###### #    # #    #  ####  #    #     ####  #        #   #  ####  #    #    ###### #  ####    #

describe("searchOptionList", () => {
  test("should return the data and no error message on success", async () => {
    const result = await _ai.searchOptionList({
      count: 1,
      search_term: "Best place to go for a nature walk and hear the ocean",
      options: [
        { id: "967ea024-b996-11ed-afa1-0242ac120002", text: "The beach" },
        {
          id: "a9c50ee8-b996-11ed-afa1-0242ac120002",
          text: "The local mall",
        },
        {
          id: "c4b2d762-b996-11ed-afa1-0242ac120002",
          text: "A botanical garden",
        },
        {
          id: "d5956108-b996-11ed-afa1-0242ac120002",
          text: "On a treadmill at the gym",
        },
        {
          id: "f129c558-b996-11ed-afa1-0242ac120002",
          text: "Down the main street of your town",
        },
      ],
    });
    expect(result).toEqual({
      data: [
        {
          id: "967ea024-b996-11ed-afa1-0242ac120002",
          text: "The beach",
        },
      ],
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.searchOptionList({
      count: 1,
      search_term: "",
      options: [
        { id: "967ea024-b996-11ed-afa1-0242ac120002", text: "The beach" },
        {
          id: "a9c50ee8-b996-11ed-afa1-0242ac120002",
          text: "The local mall",
        },
      ],
    });
    expect(result).toEqual({
      data: [],
      error: "Search term not provided",
    });
  });
});

//
//  #####  ######  ####   ####  #    # #    # ###### #    # #####      ####  #####  #####    #      #  ####  #####
//  #    # #      #    # #    # ##  ## ##  ## #      ##   # #    #    #    # #    #   #      #      # #        #
//  #    # #####  #      #    # # ## # # ## # #####  # #  # #    #    #    # #    #   #      #      #  ####    #
//  #####  #      #      #    # #    # #    # #      #  # # #    #    #    # #####    #      #      #      #   #
//  #   #  #      #    # #    # #    # #    # #      #   ## #    #    #    # #        #      #      # #    #   #
//  #    # ######  ####   ####  #    # #    # ###### #    # #####      ####  #        #      ###### #  ####    #

describe("recommendOptionList", () => {
  test("should return the data and no error message on success", async () => {
    const result = await _ai.recommendOptionList({
      count: 2,
      interests: [
        {
          id: "53932a26-b9a2-11ed-afa1-0242ac120002",
          text: "Clothes shopping",
        },
        {
          id: "69dc9b78-b9a2-11ed-afa1-0242ac120002",
          text: "History",
        },
      ],
      options: [
        { id: "967ea024-b996-11ed-afa1-0242ac120002", text: "The beach" },
        {
          id: "a9c50ee8-b996-11ed-afa1-0242ac120002",
          text: "The local mall",
        },
        {
          id: "c4b2d762-b996-11ed-afa1-0242ac120002",
          text: "A forest reserve",
        },
        {
          id: "d5956108-b996-11ed-afa1-0242ac120002",
          text: "The sports club",
        },
        {
          id: "f129c558-b996-11ed-afa1-0242ac120002",
          text: "The local heritage museum",
        },
      ],
    });
    expect(result).toEqual({
      data: [
        {
          id: "a9c50ee8-b996-11ed-afa1-0242ac120002",
          text: "The local mall",
        },
        {
          id: "f129c558-b996-11ed-afa1-0242ac120002",
          text: "The local heritage museum",
        },
      ],
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.recommendOptionList({
      count: 1,
      interests: [],
      options: [
        { id: "967ea024-b996-11ed-afa1-0242ac120002", text: "The beach" },
        {
          id: "a9c50ee8-b996-11ed-afa1-0242ac120002",
          text: "The local mall",
        },
      ],
    });
    expect(result).toEqual({
      data: [],
      error: "Interests not provided",
    });
  });
});

//
//   ####  #####  ######   ##   ##### ######     ####  #####  #####    #      #  ####  #####
//  #    # #    # #       #  #    #   #         #    # #    #   #      #      # #        #
//  #      #    # #####  #    #   #   #####     #    # #    #   #      #      #  ####    #
//  #      #####  #      ######   #   #         #    # #####    #      #      #      #   #
//  #    # #   #  #      #    #   #   #         #    # #        #      #      # #    #   #
//   ####  #    # ###### #    #   #   ######     ####  #        #      ###### #  ####    #

describe("createOptionList", () => {
  test("should return the data and no error message on success", async () => {
    const result = await _ai.createOptionList({
      count: 3,
      option_type: "largest countries by land area, descending",
    });
    expect(result).toEqual({
      data: [
        {
          // any string
          id: expect.any(String),
          text: "Russia",
        },
        {
          id: expect.any(String),
          text: "Canada",
        },
        {
          id: expect.any(String),
          text: "China",
        },
      ],
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.createOptionList({
      count: 1,
      option_type: "",
    });
    expect(result).toEqual({
      data: [],
      error: "Option type not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.createOptionList({
      count: 0,
      option_type: "largest countries by land area, descending",
    });
    expect(result).toEqual({
      data: [],
      error: "Count not provided",
    });
  });
});

//
//   ####   ####  #####  #####     ####  #####  #####    #      #  ####  #####
//  #      #    # #    #   #      #    # #    #   #      #      # #        #
//   ####  #    # #    #   #      #    # #    #   #      #      #  ####    #
//       # #    # #####    #      #    # #####    #      #      #      #   #
//  #    # #    # #   #    #      #    # #        #      #      # #    #   #
//   ####   ####  #    #   #       ####  #        #      ###### #  ####    #

describe("sortOptionList", () => {
  test("should return the data and no error message on success", async () => {
    const result = await _ai.sortOptionList({
      criteria: "Hardness",
      options: [
        {
          id: "8a715e2c-b9a8-11ed-afa1-0242ac120002",
          text: "Granite",
        },
        {
          id: "a4b270fa-b9a8-11ed-afa1-0242ac120002",
          text: "Polystyrene foam",
        },
        {
          id: "800c6e9a-b9a8-11ed-afa1-0242ac120002",
          text: "Diamond",
        },
        {
          id: "9730bc02-b9a8-11ed-afa1-0242ac120002",
          text: "Wood",
        },
      ],
    });
    expect(result).toEqual({
      data: [
        {
          id: "800c6e9a-b9a8-11ed-afa1-0242ac120002",
          text: "Diamond",
        },
        {
          id: "8a715e2c-b9a8-11ed-afa1-0242ac120002",
          text: "Granite",
        },
        {
          id: "9730bc02-b9a8-11ed-afa1-0242ac120002",
          text: "Wood",
        },
        {
          id: "a4b270fa-b9a8-11ed-afa1-0242ac120002",
          text: "Polystyrene foam",
        },
      ],
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.sortOptionList({
      criteria: "",
      options: [
        {
          id: "9730bc02-b9a8-11ed-afa1-0242ac120002",
          text: "Wood",
        },
        {
          id: "a4b270fa-b9a8-11ed-afa1-0242ac120002",
          text: "Polystyrene",
        },
      ],
    });
    expect(result).toEqual({
      data: [],
      error: "Criteria not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.sortOptionList({
      criteria: "Hardness",
      options: [],
    });
    expect(result).toEqual({
      data: [],
      error: "Options not provided",
    });
  });
});

//
//  ###### # #      ##### ###### #####      ####  #####  #####    #      #  ####  #####
//  #      # #        #   #      #    #    #    # #    #   #      #      # #        #
//  #####  # #        #   #####  #    #    #    # #    #   #      #      #  ####    #
//  #      # #        #   #      #####     #    # #####    #      #      #      #   #
//  #      # #        #   #      #   #     #    # #        #      #      # #    #   #
//  #      # ######   #   ###### #    #     ####  #        #      ###### #  ####    #

describe("filterOptionList", () => {
  test("should return the data and no error message on success", async () => {
    const result = await _ai.filterOptionList({
      criteria: "Types of rocks",
      options: [
        {
          id: "8a715e2c-b9a8-11ed-afa1-0242ac120002",
          text: "Granite",
        },
        {
          id: "a4b270fa-b9a8-11ed-afa1-0242ac120002",
          text: "Polystyrene foam",
        },
        {
          id: "800c6e9a-b9a8-11ed-afa1-0242ac120002",
          text: "Sandstone",
        },
        {
          id: "9730bc02-b9a8-11ed-afa1-0242ac120002",
          text: "Wood",
        },
      ],
    });
    expect(result).toEqual({
      data: [
        {
          id: "8a715e2c-b9a8-11ed-afa1-0242ac120002",
          text: "Granite",
        },
        {
          id: "800c6e9a-b9a8-11ed-afa1-0242ac120002",
          text: "Sandstone",
        },
      ],
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.filterOptionList({
      criteria: "",
      options: [
        {
          id: "9730bc02-b9a8-11ed-afa1-0242ac120002",
          text: "Wood",
        },
        {
          id: "a4b270fa-b9a8-11ed-afa1-0242ac120002",
          text: "Polystyrene",
        },
      ],
    });
    expect(result).toEqual({
      data: [],
      error: "Criteria not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.filterOptionList({
      criteria: "Types of rocks",
      options: [],
    });
    expect(result).toEqual({
      data: [],
      error: "Options not provided",
    });
  });
});

//
//   ####  ######   ##   #####   ####  #    #     ####  ##### #####  # #    #  ####     #      #  ####  #####
//  #      #       #  #  #    # #    # #    #    #        #   #    # # ##   # #    #    #      # #        #
//   ####  #####  #    # #    # #      ######     ####    #   #    # # # #  # #         #      #  ####    #
//       # #      ###### #####  #      #    #         #   #   #####  # #  # # #  ###    #      #      #   #
//  #    # #      #    # #   #  #    # #    #    #    #   #   #   #  # #   ## #    #    #      # #    #   #
//   ####  ###### #    # #    #  ####  #    #     ####    #   #    # # #    #  ####     ###### #  ####    #

describe("searchStringList", () => {
  test("should return the data and no error message on success", async () => {
    const result = await _ai.searchStringList({
      count: 1,
      search_term: "The second test",
      items: ["test1", "test2", "test3", "test4", "test5"],
    });
    expect(result).toEqual({
      data: ["test2"],
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.searchStringList({
      count: 1,
      search_term: "",
      items: ["test1", "test2", "test3", "test4", "test5"],
    });
    expect(result).toEqual({
      data: [],
      error: "Search term not provided",
    });
  });
});

//
//  #####  ######  ####   ####  #    # #    # ###### #    # #####      ####  ##### #####     #      #  ####  #####
//  #    # #      #    # #    # ##  ## ##  ## #      ##   # #    #    #        #   #    #    #      # #        #
//  #    # #####  #      #    # # ## # # ## # #####  # #  # #    #     ####    #   #    #    #      #  ####    #
//  #####  #      #      #    # #    # #    # #      #  # # #    #         #   #   #####     #      #      #   #
//  #   #  #      #    # #    # #    # #    # #      #   ## #    #    #    #   #   #   #     #      # #    #   #
//  #    # ######  ####   ####  #    # #    # ###### #    # #####      ####    #   #    #    ###### #  ####    #

describe("recommendStringList", () => {
  test("should return the data and no error message on success", async () => {
    const result = await _ai.recommendStringList({
      count: 2,
      interests: ["Clothes shopping", "History"],
      items: [
        "The beach",
        "The local mall",
        "A forest reserve",
        "The sports club",
        "The local heritage museum",
      ],
    });
    expect(result).toEqual({
      data: ["The local mall", "The local heritage museum"],
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.recommendStringList({
      count: 1,
      interests: [],
      items: [
        "The beach",
        "The local mall",
        "A forest reserve",
        "The sports club",
        "The local heritage museum",
      ],
    });
    expect(result).toEqual({
      data: [],
      error: "Interests not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.recommendStringList({
      count: 1,
      interests: ["The beach"],
      items: [],
    });
    expect(result).toEqual({
      data: [],
      error: "Items not provided",
    });
  });
});

//
//   ####  #####  ######   ##   ##### ######     ####  ##### #####     #      #  ####  #####
//  #    # #    # #       #  #    #   #         #        #   #    #    #      # #        #
//  #      #    # #####  #    #   #   #####      ####    #   #    #    #      #  ####    #
//  #      #####  #      ######   #   #              #   #   #####     #      #      #   #
//  #    # #   #  #      #    #   #   #         #    #   #   #   #     #      # #    #   #
//   ####  #    # ###### #    #   #   ######     ####    #   #    #    ###### #  ####    #

describe("createStringList", () => {
  test("should return the data and no error message on success", async () => {
    const result = await _ai.createStringList({
      count: 4,
      item_type: "largest countries by landmass in descending order",
    });
    expect(result).toEqual({
      data: ["Russia", "Canada", "China", "United States"],
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.createStringList({
      count: 1,
      item_type: "",
    });
    expect(result).toEqual({
      data: [],
      error: "Item type not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.createStringList({
      count: 0,
      item_type: "largest countries by landmass in descending order",
    });
    expect(result).toEqual({
      data: [],
      error: "Count not provided",
    });
  });
});

//
//   ####   ####  #####  #####     ####  ##### #####     #      #  ####  #####
//  #      #    # #    #   #      #        #   #    #    #      # #        #
//   ####  #    # #    #   #       ####    #   #    #    #      #  ####    #
//       # #    # #####    #           #   #   #####     #      #      #   #
//  #    # #    # #   #    #      #    #   #   #   #     #      # #    #   #
//   ####   ####  #    #   #       ####    #   #    #    ###### #  ####    #

describe("sortStringList", () => {
  test("should return the data and no error message on success", async () => {
    const result = await _ai.sortStringList({
      criteria: "Hardness",
      items: ["Granite", "Polystyrene foam", "Wood", "Diamond"],
    });
    expect(result).toEqual({
      data: ["Diamond", "Granite", "Wood", "Polystyrene foam"],
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.sortStringList({
      criteria: "",
      items: ["Granite", "Polystyrene foam", "Wood", "Diamond"],
    });
    expect(result).toEqual({
      data: [],
      error: "Criteria not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.sortStringList({
      criteria: "Hardness",
      items: [],
    });
    expect(result).toEqual({
      data: [],
      error: "Items not provided",
    });
  });
});

//
//  ###### # #      ##### ###### #####      ####  ##### #####     #      #  ####  #####
//  #      # #        #   #      #    #    #        #   #    #    #      # #        #
//  #####  # #        #   #####  #    #     ####    #   #    #    #      #  ####    #
//  #      # #        #   #      #####          #   #   #####     #      #      #   #
//  #      # #        #   #      #   #     #    #   #   #   #     #      # #    #   #
//  #      # ######   #   ###### #    #     ####    #   #    #    ###### #  ####    #

describe("filterStringList", () => {
  test("should return the data and no error message on success", async () => {
    const result = await _ai.filterStringList({
      criteria: "Type of rock",
      items: ["Granite", "Polystyrene foam", "Wood", "Iron ore", "Potato"],
    });
    expect(result).toEqual({
      data: ["Granite", "Iron ore"],
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.filterStringList({
      criteria: "",
      items: ["Granite", "Polystyrene foam", "Wood", "Diamond", "Potato"],
    });
    expect(result).toEqual({
      data: [],
      error: "Criteria not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.filterStringList({
      criteria: "Type of rock",
      items: [],
    });
    expect(result).toEqual({
      data: [],
      error: "Items not provided",
    });
  });
});
