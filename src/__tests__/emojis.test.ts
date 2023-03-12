import _ai from "..";

jest.setTimeout(30000);

_ai.init({
  mode: "development", // or "production"
  apiKey: "",
});
//
//   ####  #    #  ####   ####  ######  ####  #####    ###### #    #  ####       # #
//  #      #    # #    # #    # #      #        #      #      ##  ## #    #      # #
//   ####  #    # #      #      #####   ####    #      #####  # ## # #    #      # #
//       # #    # #  ### #  ### #           #   #      #      #    # #    #      # #
//  #    # #    # #    # #    # #      #    #   #      #      #    # #    # #    # #
//   ####   ####   ####   ####  ######  ####    #      ###### #    #  ####   ####  #

describe("suggestEmoji", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.suggestEmoji({
      text: "Let's go to the beach",
    });
    expect(res).toEqual({
      result: `🏖️`,
      error: "",
    });
  });

  test("should return a null data value and an error message on failure", async () => {
    const res = await _ai.suggestEmoji({
      text: "",
    });
    expect(res).toEqual({
      result: null,
      error: "Text not provided",
    });
  });
});

//
//  #  ####     ###### #    #  ####       # #
//  # #         #      ##  ## #    #      # #
//  #  ####     #####  # ## # #    #      # #
//  #      #    #      #    # #    #      # #
//  # #    #    #      #    # #    # #    # #
//  #  ####     ###### #    #  ####   ####  #

describe("isEmoji", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.isEmoji({
      text: "Let's go to the beach",
    });
    expect(res).toEqual({
      result: false,
      error: "",
    });
  });

  test("should return the data and no error message on success", async () => {
    const res = await _ai.isEmoji({
      text: "🏖️",
    });
    expect(res).toEqual({
      result: true,
      error: "",
    });
  });

  test("should return a null data value and an error message on failure", async () => {
    const res = await _ai.isEmoji({
      text: "",
    });
    expect(res).toEqual({
      result: null,
      error: "Text not provided",
    });
  });
});

//
//  #    #   ##    ####     ###### #    #  ####       # #  ####
//  #    #  #  #  #         #      ##  ## #    #      # # #
//  ###### #    #  ####     #####  # ## # #    #      # #  ####
//  #    # ######      #    #      #    # #    #      # #      #
//  #    # #    # #    #    #      #    # #    # #    # # #    #
//  #    # #    #  ####     ###### #    #  ####   ####  #  ####

describe("hasEmojis", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.hasEmojis({
      text: "A wizard is never late, nor is he early. He arrives precisely when he means to.",
    });
    expect(res).toEqual({
      result: false,
      error: "",
    });
  });

  test("should return the data and no error message on success", async () => {
    const res = await _ai.hasEmojis({
      text: "A wizard is never late, nor is he early. He arrives precisely when he means to. 🧙‍♂️",
    });
    expect(res).toEqual({
      result: true,
      error: "",
    });
  });

  test("should return a null data value and an error message on failure", async () => {
    const res = await _ai.hasEmojis({
      text: "",
    });
    expect(res).toEqual({
      result: null,
      error: "Text not provided",
    });
  });
});

//
//  #####  ###### #    #  ####  #    # ######    ###### #    #  ####       # #  ####
//  #    # #      ##  ## #    # #    # #         #      ##  ## #    #      # # #
//  #    # #####  # ## # #    # #    # #####     #####  # ## # #    #      # #  ####
//  #####  #      #    # #    # #    # #         #      #    # #    #      # #      #
//  #   #  #      #    # #    #  #  #  #         #      #    # #    # #    # # #    #
//  #    # ###### #    #  ####    ##   ######    ###### #    #  ####   ####  #  ####

describe("removeEmojis", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.removeEmojis({
      text: "History became legend 📖. Legend became myth 📜. And for two and a half thousand years, the ring passed out of all knowledge 🏔️.",
    });
    expect(res).toEqual({
      result: "History became legend. Legend became myth. And for two and a half thousand years, the ring passed out of all knowledge.",
      error: "",
    });
  });

  test("should return a null data value and an error message on failure", async () => {
    const res = await _ai.removeEmojis({
      text: "",
    });
    expect(res).toEqual({
      result: null,
      error: "Text not provided",
    });
  });
});
