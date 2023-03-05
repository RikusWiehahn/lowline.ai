import _ai from "..";

jest.setTimeout(30000);

_ai.init({
  mode: "development", // or "production"
  apiKey: "",
});

//
//   ####  #    #  ####   ####  ######  ####  #####     ####  #    #   ##   #####    #####  ######  ####
//  #      #    # #    # #    # #      #        #      #    # #    #  #  #    #      #    # #      #
//   ####  #    # #      #      #####   ####    #      #      ###### #    #   #      #    # #####   ####
//       # #    # #  ### #  ### #           #   #      #      #    # ######   #      #####  #           #
//  #    # #    # #    # #    # #      #    #   #      #    # #    # #    #   #      #   #  #      #    #
//   ####   ####   ####   ####  ######  ####    #       ####  #    # #    #   #      #    # ######  ####

describe("suggestChatResponse", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.suggestChatResponse({
      intent: "Give a compliment",
      chat_thread: [
        {
          name: "User",
          role: "user",
          content: "I'm feeling down",
        },
        {
          name: "Bot",
          role: "bot",
          content: "I'm sorry to hear that",
        },
        {
          name: "User",
          role: "user",
          content: "Can you give me a compliment?",
        }
      ],
    });
    expect(res).toEqual({
      result: expect.any(String),
      error: "",
    });
  });

  test("should return an null data value and an error message on failure", async () => {
    const res = await _ai.suggestChatResponse({
      intent: "",
      chat_thread: [
        {
          name: "User",
          role: "user",
          content: "I'm feeling down",
        },
        {
          name: "Bot",
          role: "bot",
          content: "I'm sorry to hear that",
        },
      ],
    });
    expect(res).toEqual({
      result: null,
      error: "Intent not provided",
    });
  });

  test("should return an null data value and an error message on failure", async () => {
    const res = await _ai.suggestChatResponse({
      intent: "Ask for a compliment",
      chat_thread: [],
    });
    expect(res).toEqual({
      result: null,
      error: "Chat thread not provided",
    });
  });
});


//   ####  #    #  ####   ####  ######  ####  #####     ####  #    #   ##   #####    #####  ######  ####     # #    # ##### ###### #    # #####  ####
//  #      #    # #    # #    # #      #        #      #    # #    #  #  #    #      #    # #      #         # ##   #   #   #      ##   #   #   #
//   ####  #    # #      #      #####   ####    #      #      ###### #    #   #      #    # #####   ####     # # #  #   #   #####  # #  #   #    ####
//       # #    # #  ### #  ### #           #   #      #      #    # ######   #      #####  #           #    # #  # #   #   #      #  # #   #        #
//  #    # #    # #    # #    # #      #    #   #      #    # #    # #    #   #      #   #  #      #    #    # #   ##   #   #      #   ##   #   #    #
//   ####   ####   ####   ####  ######  ####    #       ####  #    # #    #   #      #    # ######  ####     # #    #   #   ###### #    #   #    ####

describe("suggestChatResponseIntents", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.suggestChatResponseIntents({
      count: 3,
      chat_thread: [
        {
          name: "User",
          role: "user",
          content: "I'm feeling down",
        },
        {
          name: "Bot",
          role: "bot",
          content: "I'm sorry to hear that",
        },
      ],
    });
    expect(res).toEqual({
      result: [expect.any(String), expect.any(String), expect.any(String)],
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.suggestChatResponseIntents({
      count: 0,
      chat_thread: [
        {
          name: "User",
          role: "user",
          content: "I'm feeling down",
        },
        {
          name: "Bot",
          role: "bot",
          content: "I'm sorry to hear that",
        },
      ],
    });
    expect(res).toEqual({
      result: [],
      error: "Count not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.suggestChatResponseIntents({
      count: 3,
      chat_thread: [],
    });
    expect(res).toEqual({
      result: [],
      error: "Chat thread not provided",
    });
  });
});

//
//   ####  #    #  ####   ####  ######  ####  #####     ####  #    #   ##   #####    #####  ######  ####     #    # #    # #      ##### #
//  #      #    # #    # #    # #      #        #      #    # #    #  #  #    #      #    # #      #         ##  ## #    # #        #   #
//   ####  #    # #      #      #####   ####    #      #      ###### #    #   #      #    # #####   ####     # ## # #    # #        #   #
//       # #    # #  ### #  ### #           #   #      #      #    # ######   #      #####  #           #    #    # #    # #        #   #
//  #    # #    # #    # #    # #      #    #   #      #    # #    # #    #   #      #   #  #      #    #    #    # #    # #        #   #
//   ####   ####   ####   ####  ######  ####    #       ####  #    # #    #   #      #    # ######  ####     #    #  ####  ######   #   #


  describe("suggestChatResponseMulti", () => {
    test("should return the data and no error message on success", async () => {
      const res = await _ai.suggestChatResponseMulti({
        count: 3,
        intent: "Ask for a compliment",
        chat_thread: [
          {
            name: "User",
            role: "user",
            content: "I'm feeling down",
          },
          {
            name: "Bot",
            role: "bot",
            content: "I'm sorry to hear that",
          },
        ],
      });
      expect(res).toEqual({
        result: [expect.any(String), expect.any(String), expect.any(String)],
        error: "",
      });
    });
  
    test("should return an empty data array and an error message on failure", async () => {
      const res = await _ai.suggestChatResponseMulti({
        count: 0,
        intent: "Ask for a compliment",
        chat_thread: [
          {
            name: "User",
            role: "user",
            content: "I'm feeling down",
          },
          {
            name: "Bot",
            role: "bot",
            content: "I'm sorry to hear that",
          },
        ],
      });
      expect(res).toEqual({
        result: [],
        error: "Count not provided",
      });
    });
  
    test("should return an empty data array and an error message on failure", async () => {
      const res = await _ai.suggestChatResponseMulti({
        count: 3,
        intent: "Ask for a compliment",
        chat_thread: [],
      });
      expect(res).toEqual({
        result: [],
        error: "Chat thread not provided",
      });
    });

    test("should return an empty data array and an error message on failure", async () => {
      const res = await _ai.suggestChatResponseMulti({
        count: 3,
        intent: "",
        chat_thread: [
          {
            name: "User",
            role: "user",
            content: "I'm feeling down",
          },
          {
            name: "Bot",
            role: "bot",
            content: "I'm sorry to hear that",
          },
        ],
      });
      expect(res).toEqual({
        result: [],
        error: "Intent not provided",
      });
    });
  });