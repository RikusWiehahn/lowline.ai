import _ai from "..";

jest.setTimeout(30000);

_ai.init({
  mode: "development", // or "production"
  apiKey: "sk-5ebd751079c74d44008eeaf46d6d06b90c0a9744641b8e773b24182e291d8db6",
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
    const result = await _ai.suggestChatResponse({
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
    expect(result).toEqual({
      data: expect.any(String),
      error: "",
    });
  });

  test("should return an null data value and an error message on failure", async () => {
    const result = await _ai.suggestChatResponse({
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
    expect(result).toEqual({
      data: null,
      error: "Intent not provided",
    });
  });

  test("should return an null data value and an error message on failure", async () => {
    const result = await _ai.suggestChatResponse({
      intent: "Ask for a compliment",
      chat_thread: [],
    });
    expect(result).toEqual({
      data: null,
      error: "Chat thread not provided",
    });
  });
});

//
//   ####  #    #  ####   ####  ######  ####  #####     ####  #    #   ##   #####    #####  ######  ####     # #    # ##### ###### #    # #####  ####
//  #      #    # #    # #    # #      #        #      #    # #    #  #  #    #      #    # #      #         # ##   #   #   #      ##   #   #   #
//   ####  #    # #      #      #####   ####    #      #      ###### #    #   #      #    # #####   ####     # # #  #   #   #####  # #  #   #    ####
//       # #    # #  ### #  ### #           #   #      #      #    # ######   #      #####  #           #    # #  # #   #   #      #  # #   #        #
//  #    # #    # #    # #    # #      #    #   #      #    # #    # #    #   #      #   #  #      #    #    # #   ##   #   #      #   ##   #   #    #
//   ####   ####   ####   ####  ######  ####    #       ####  #    # #    #   #      #    # ######  ####     # #    #   #   ###### #    #   #    ####

describe("suggestChatResponseIntents", () => {
  test("should return the data and no error message on success", async () => {
    const result = await _ai.suggestChatResponseIntents({
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
    expect(result).toEqual({
      data: [expect.any(String), expect.any(String), expect.any(String)],
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.suggestChatResponseIntents({
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
    expect(result).toEqual({
      data: [],
      error: "Count not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.suggestChatResponseIntents({
      count: 3,
      chat_thread: [],
    });
    expect(result).toEqual({
      data: [],
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
      const result = await _ai.suggestChatResponseMulti({
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
      expect(result).toEqual({
        data: [expect.any(String), expect.any(String), expect.any(String)],
        error: "",
      });
    });
  
    test("should return an empty data array and an error message on failure", async () => {
      const result = await _ai.suggestChatResponseMulti({
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
      expect(result).toEqual({
        data: [],
        error: "Count not provided",
      });
    });
  
    test("should return an empty data array and an error message on failure", async () => {
      const result = await _ai.suggestChatResponseMulti({
        count: 3,
        intent: "Ask for a compliment",
        chat_thread: [],
      });
      expect(result).toEqual({
        data: [],
        error: "Chat thread not provided",
      });
    });

    test("should return an empty data array and an error message on failure", async () => {
      const result = await _ai.suggestChatResponseMulti({
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
      expect(result).toEqual({
        data: [],
        error: "Intent not provided",
      });
    });
  });

//
//   ####  #    #  ####   ####  ######  ####  #####    ###### #    #   ##   # #         #####  ######  ####  #####   ####  #    #  ####  ######
//  #      #    # #    # #    # #      #        #      #      ##  ##  #  #  # #         #    # #      #      #    # #    # ##   # #      #
//   ####  #    # #      #      #####   ####    #      #####  # ## # #    # # #         #    # #####   ####  #    # #    # # #  #  ####  #####
//       # #    # #  ### #  ### #           #   #      #      #    # ###### # #         #####  #           # #####  #    # #  # #      # #
//  #    # #    # #    # #    # #      #    #   #      #      #    # #    # # #         #   #  #      #    # #      #    # #   ## #    # #
//   ####   ####   ####   ####  ######  ####    #      ###### #    # #    # # ######    #    # ######  ####  #       ####  #    #  ####  ######


  describe("suggestEmailResponse", () => {
    test("should return the data and no error message on success", async () => {
      const result = await _ai.suggestEmailResponse({
        intent: "Ask for a compliment",
        email_thread: [
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
      expect(result).toEqual({
        data: expect.any(String),
        error: "",
      });
    });
  
    test("should return an null data value and an error message on failure", async () => {
      const result = await _ai.suggestEmailResponse({
        intent: "",
        email_thread: [
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
      expect(result).toEqual({
        data: null,
        error: "Intent not provided",
      });
    });
  
    test("should return an null data value and an error message on failure", async () => {
      const result = await _ai.suggestEmailResponse({
        intent: "Ask for a compliment",
        email_thread: [],
      });
      expect(result).toEqual({
        data: null,
        error: "Email thread not provided",
      });
    });
  });

//
//   ####  #    #  ####   ####  ######  ####  #####    ###### #    #   ##   # #         #####  ######  ####     # #    # ##### ###### #    # #####  ####
//  #      #    # #    # #    # #      #        #      #      ##  ##  #  #  # #         #    # #      #         # ##   #   #   #      ##   #   #   #
//   ####  #    # #      #      #####   ####    #      #####  # ## # #    # # #         #    # #####   ####     # # #  #   #   #####  # #  #   #    ####
//       # #    # #  ### #  ### #           #   #      #      #    # ###### # #         #####  #           #    # #  # #   #   #      #  # #   #        #
//  #    # #    # #    # #    # #      #    #   #      #      #    # #    # # #         #   #  #      #    #    # #   ##   #   #      #   ##   #   #    #
//   ####   ####   ####   ####  ######  ####    #      ###### #    # #    # # ######    #    # ######  ####     # #    #   #   ###### #    #   #    ####


describe("suggestEmailResponseIntents", () => {
  test("should return the data and no error message on success", async () => {
    const result = await _ai.suggestEmailResponseIntents({
      count: 3,
      email_thread: [
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
    expect(result).toEqual({
      data: [expect.any(String), expect.any(String), expect.any(String)],
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.suggestEmailResponseIntents({
      count: 0,
      email_thread: [
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
    expect(result).toEqual({
      data: [],
      error: "Count not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.suggestEmailResponseIntents({
      count: 3,
      email_thread: [],
    });
    expect(result).toEqual({
      data: [],
      error: "Email thread not provided",
    });
  });
});

//
//   ####  #    #  ####   ####  ######  ####  #####    ###### #    #   ##   # #         #####  ######  ####     #    # #    # #      ##### #
//  #      #    # #    # #    # #      #        #      #      ##  ##  #  #  # #         #    # #      #         ##  ## #    # #        #   #
//   ####  #    # #      #      #####   ####    #      #####  # ## # #    # # #         #    # #####   ####     # ## # #    # #        #   #
//       # #    # #  ### #  ### #           #   #      #      #    # ###### # #         #####  #           #    #    # #    # #        #   #
//  #    # #    # #    # #    # #      #    #   #      #      #    # #    # # #         #   #  #      #    #    #    # #    # #        #   #
//   ####   ####   ####   ####  ######  ####    #      ###### #    # #    # # ######    #    # ######  ####     #    #  ####  ######   #   #


  describe("suggestEmailResponseMulti", () => {
    test("should return the data and no error message on success", async () => {
      const result = await _ai.suggestEmailResponseMulti({
        count: 3,
        intent: "Ask for a compliment",
        email_thread: [
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
      expect(result).toEqual({
        data: [expect.any(String), expect.any(String), expect.any(String)],
        error: "",
      });
    });
  
    test("should return an empty data array and an error message on failure", async () => {
      const result = await _ai.suggestEmailResponseMulti({
        count: 0,
        intent: "Ask for a compliment",
        email_thread: [
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
      expect(result).toEqual({
        data: [],
        error: "Count not provided",
      });
    });
  
    test("should return an empty data array and an error message on failure", async () => {
      const result = await _ai.suggestEmailResponseMulti({
        count: 3,
        intent: "Ask for a compliment",
        email_thread: [],
      });
      expect(result).toEqual({
        data: [],
        error: "Email thread not provided",
      });
    });

    test("should return an empty data array and an error message on failure", async () => {
      const result = await _ai.suggestEmailResponseMulti({
        count: 3,
        intent: "",
        email_thread: [
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
      expect(result).toEqual({
        data: [],
        error: "Intent not provided",
      });
    });
  });