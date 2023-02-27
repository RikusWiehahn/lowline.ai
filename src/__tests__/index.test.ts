import { stringListSearch } from "..";

test("helloNpm", () => {
  const helloNpm = jest.fn();
  helloNpm();
  expect(helloNpm).toHaveBeenCalled();
});

describe("stringListSearch", () => {
  test("should return the data and no error message on success", async () => {
    const options = {
      // Set the options as needed for this test case
    };
    const result = await stringListSearch({
      count: 1,
      search_term: "test2",
      search_items: ["test1", "test2", "test3", "test4", "test5"],
    });
    expect(result).toEqual({
      data: ["test2"],
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {

    const options = {
      // Set the options as needed for this test case
    };
    const result = await stringListSearch({
      count: 1,
      search_term: "",
      search_items: ["test1", "test2", "test3", "test4", "test5"],
    });
    expect(result).toEqual({
      data: [],
      error: "Search term not provided",
    });
  });
});
