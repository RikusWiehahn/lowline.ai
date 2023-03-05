import _ai from "..";

jest.setTimeout(30000);

_ai.init({
  mode: "development", // or "production"
  apiKey: "",
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
    const res = await _ai.searchOptionList({
      count: 1,
      search_term: "Best place to go for a walk and see the ocean",
      options: [
        { id: "967ea024-b996-11ed-afa1-0242ac120002", text: "The beach" },
        {
          id: "a9c50ee8-b996-11ed-afa1-0242ac120002",
          text: "The local mall",
        },
        {
          id: "d5956108-b996-11ed-afa1-0242ac120002",
          text: "On a treadmill at the gym",
        },
        {
          id: "c4b2d762-b996-11ed-afa1-0242ac120002",
          text: "A botanical garden",
        },
        {
          id: "f129c558-b996-11ed-afa1-0242ac120002",
          text: "Down the main street of your town",
        },
      ],
    });
    expect(res).toEqual({
      result: [
        {
          id: "967ea024-b996-11ed-afa1-0242ac120002",
          text: "The beach",
        },
      ],
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.searchOptionList({
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
    expect(res).toEqual({
      result: [],
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
    const res = await _ai.recommendOptionList({
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
          text: "A forest trail",
        },
        {
          id: "d5956108-b996-11ed-afa1-0242ac120002",
          text: "The sports club",
        },
        {
          id: "f129c558-b996-11ed-afa1-0242ac120002",
          text: "The national museum",
        },
      ],
    });
    expect(res).toEqual({
      result: [
        {
          id: "a9c50ee8-b996-11ed-afa1-0242ac120002",
          text: "The local mall",
        },
        {
          id: "f129c558-b996-11ed-afa1-0242ac120002",
          text: "The national museum",
        },
      ],
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.recommendOptionList({
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
    expect(res).toEqual({
      result: [],
      error: "Interests not provided",
    });
  });
});

//   ####  #####  ######   ##   ##### ######     ####  #####  #####    #      #  ####  #####
//  #    # #    # #       #  #    #   #         #    # #    #   #      #      # #        #
//  #      #    # #####  #    #   #   #####     #    # #    #   #      #      #  ####    #
//  #      #####  #      ######   #   #         #    # #####    #      #      #      #   #
//  #    # #   #  #      #    #   #   #         #    # #        #      #      # #    #   #
//   ####  #    # ###### #    #   #   ######     ####  #        #      ###### #  ####    #

describe("createOptionList", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.createOptionList({
      count: 3,
      option_type: "largest countries by land area, descending",
    });
    expect(res).toEqual({
      result: [
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
    const res = await _ai.createOptionList({
      count: 1,
      option_type: "",
    });
    expect(res).toEqual({
      result: [],
      error: "Option type not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.createOptionList({
      count: 0,
      option_type: "largest countries by land area, descending",
    });
    expect(res).toEqual({
      result: [],
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
    const res = await _ai.sortOptionList({
      criteria: "Strength",
      options: [
        {
          id: "9730bc02-b9a8-11ed-afa1-0242ac120002",
          text: "Cardboard",
        },
        {
          id: "8a715e2c-b9a8-11ed-afa1-0242ac120002",
          text: "Steel",
        },

        {
          id: "800c6e9a-b9a8-11ed-afa1-0242ac120002",
          text: "Plastic",
        },
        {
          id: "a4b270fa-b9a8-11ed-afa1-0242ac120002",
          text: "Wood",
        },
      ],
    });
    expect(res).toEqual({
      result: [
        {
          id: "8a715e2c-b9a8-11ed-afa1-0242ac120002",
          text: "Steel",
        },
        {
          id: "a4b270fa-b9a8-11ed-afa1-0242ac120002",
          text: "Wood",
        },
        {
          id: "800c6e9a-b9a8-11ed-afa1-0242ac120002",
          text: "Plastic",
        },
        {
          id: "9730bc02-b9a8-11ed-afa1-0242ac120002",
          text: "Cardboard",
        },
      ],
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.sortOptionList({
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
    expect(res).toEqual({
      result: [],
      error: "Criteria not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.sortOptionList({
      criteria: "Hardness",
      options: [],
    });
    expect(res).toEqual({
      result: [],
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
    const res = await _ai.filterOptionList({
      criteria: "Remove non-rock materials",
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
    expect(res).toEqual({
      result: [
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
    const res = await _ai.filterOptionList({
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
    expect(res).toEqual({
      result: [],
      error: "Criteria not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.filterOptionList({
      criteria: "Types of rocks",
      options: [],
    });
    expect(res).toEqual({
      result: [],
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
    const res = await _ai.searchStringList({
      count: 1,
      search_term: "The second test",
      items: ["test1", "test2", "test3", "test4", "test5"],
    });
    expect(res).toEqual({
      result: ["test2"],
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.searchStringList({
      count: 1,
      search_term: "",
      items: ["test1", "test2", "test3", "test4", "test5"],
    });
    expect(res).toEqual({
      result: [],
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
    const res = await _ai.recommendStringList({
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
    expect(res).toEqual({
      result: ["The local mall", "The local heritage museum"],
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.recommendStringList({
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
    expect(res).toEqual({
      result: [],
      error: "Interests not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.recommendStringList({
      count: 1,
      interests: ["The beach"],
      items: [],
    });
    expect(res).toEqual({
      result: [],
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
    const res = await _ai.createStringList({
      count: 4,
      item_type: "largest countries by landmass in descending order",
    });
    expect(res).toEqual({
      result: ["Russia", "Canada", "China", "United States"],
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.createStringList({
      count: 1,
      item_type: "",
    });
    expect(res).toEqual({
      result: [],
      error: "Item type not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.createStringList({
      count: 0,
      item_type: "largest countries by landmass in descending order",
    });
    expect(res).toEqual({
      result: [],
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
    const res = await _ai.sortStringList({
      criteria: "Hardness",
      items: ["Granite", "Polystyrene foam", "Wood", "Diamond"],
    });
    expect(res).toEqual({
      result: ["Diamond", "Granite", "Wood", "Polystyrene foam"],
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.sortStringList({
      criteria: "",
      items: ["Granite", "Polystyrene foam", "Wood", "Diamond"],
    });
    expect(res).toEqual({
      result: [],
      error: "Criteria not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.sortStringList({
      criteria: "Hardness",
      items: [],
    });
    expect(res).toEqual({
      result: [],
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
    const res = await _ai.filterStringList({
      criteria: "Type of rock",
      items: ["Granite", "Polystyrene foam", "Wood", "Iron ore", "Potato"],
    });
    expect(res).toEqual({
      result: ["Granite", "Iron ore"],
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.filterStringList({
      criteria: "",
      items: ["Granite", "Polystyrene foam", "Wood", "Diamond", "Potato"],
    });
    expect(res).toEqual({
      result: [],
      error: "Criteria not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.filterStringList({
      criteria: "Type of rock",
      items: [],
    });
    expect(res).toEqual({
      result: [],
      error: "Items not provided",
    });
  });
});
