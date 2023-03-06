import _ai from "..";

jest.setTimeout(30000);

_ai.init({
  mode: "development", // or "production"
  apiKey: "sk-577cf76ff984ecc92fb738e17f16969945fc7544f2ddc4f8f038e2bf75dc81bd",
});

//
//  #  ####     #####  #        ##   # #    #    ##### ###### #    # #####
//  # #         #    # #       #  #  # ##   #      #   #       #  #    #
//  #  ####     #    # #      #    # # # #  #      #   #####    ##     #
//  #      #    #####  #      ###### # #  # #      #   #        ##     #
//  # #    #    #      #      #    # # #   ##      #   #       #  #    #
//  #  ####     #      ###### #    # # #    #      #   ###### #    #   #

describe("isPlaintext", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.isPlaintext({
      text: "The theatre was filled with an enthusiastic audience for the opening night.",
    });
    expect(res).toEqual({
      result: true,
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.isPlaintext({
      text: "",
    });
    expect(result).toEqual({
      result: null,
      error: "Text not provided",
    });
  });
});

//
//   ####  ###### #    # ###### #####    ##   ##### ######    #####  #        ##   # #    #    ##### ###### #    # #####
//  #    # #      ##   # #      #    #  #  #    #   #         #    # #       #  #  # ##   #      #   #       #  #    #
//  #      #####  # #  # #####  #    # #    #   #   #####     #    # #      #    # # # #  #      #   #####    ##     #
//  #  ### #      #  # # #      #####  ######   #   #         #####  #      ###### # #  # #      #   #        ##     #
//  #    # #      #   ## #      #   #  #    #   #   #         #      #      #    # # #   ##      #   #       #  #    #
//   ####  ###### #    # ###### #    # #    #   #   ######    #      ###### #    # # #    #      #   ###### #    #   #

describe("generatePlaintext", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.generatePlaintext({
      prompt:
        "Explain the rules of cricket in a way that a 5 year old can understand.",
    });
    expect(res).toEqual({
      result: expect.any(String),
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.generatePlaintext({
      prompt: "",
    });
    expect(result).toEqual({
      result: null,
      error: "Prompt not provided",
    });
  });
});

//
//  #    #   ##    ####      ####  #####  ###### #      #      # #    #  ####     ###### #####  #####   ####  #####   ####
//  #    #  #  #  #         #      #    # #      #      #      # ##   # #    #    #      #    # #    # #    # #    # #
//  ###### #    #  ####      ####  #    # #####  #      #      # # #  # #         #####  #    # #    # #    # #    #  ####
//  #    # ######      #         # #####  #      #      #      # #  # # #  ###    #      #####  #####  #    # #####       #
//  #    # #    # #    #    #    # #      #      #      #      # #   ## #    #    #      #   #  #   #  #    # #   #  #    #
//  #    # #    #  ####      ####  #      ###### ###### ###### # #    #  ####     ###### #    # #    #  ####  #    #  ####

describe("hasSpellingErrors", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.hasSpellingErrors({
      text: "The stufent went to the libary to researsh for her esssay.",
    });
    expect(res).toEqual({
      result: true,
      error: "",
    });
  });

  test("should return the data and no error message on success", async () => {
    const res = await _ai.hasSpellingErrors({
      text: "The student went to the library to research for her essay.",
    });
    expect(res).toEqual({
      result: false,
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.hasSpellingErrors({
      text: "",
    });
    expect(result).toEqual({
      result: null,
      error: "Text not provided",
    });
  });
});

//
//  ###### # #    #     ####  #####  ###### #      #      # #    #  ####     ###### #####  #####   ####  #####   ####
//  #      #  #  #     #      #    # #      #      #      # ##   # #    #    #      #    # #    # #    # #    # #
//  #####  #   ##       ####  #    # #####  #      #      # # #  # #         #####  #    # #    # #    # #    #  ####
//  #      #   ##           # #####  #      #      #      # #  # # #  ###    #      #####  #####  #    # #####       #
//  #      #  #  #     #    # #      #      #      #      # #   ## #    #    #      #   #  #   #  #    # #   #  #    #
//  #      # #    #     ####  #      ###### ###### ###### # #    #  ####     ###### #    # #    #  ####  #    #  ####

describe("fixSpellingErrors", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.fixSpellingErrors({
      text: "Wittenburg Cathdral is a bautifull and histroic bulding loceted in the German city of Wittenburg.",
    });
    expect(res).toEqual({
      result:
        "Wittenburg Cathedral is a beautiful and historic building located in the German city of Wittenburg.",
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.fixSpellingErrors({
      text: "",
    });
    expect(result).toEqual({
      result: null,
      error: "Text not provided",
    });
  });
});

//
//  #    #   ##    ####      ####  #####    ##   #    # #    #   ##   #####     ###### #####  #####   ####  #####   ####
//  #    #  #  #  #         #    # #    #  #  #  ##  ## ##  ##  #  #  #    #    #      #    # #    # #    # #    # #
//  ###### #    #  ####     #      #    # #    # # ## # # ## # #    # #    #    #####  #    # #    # #    # #    #  ####
//  #    # ######      #    #  ### #####  ###### #    # #    # ###### #####     #      #####  #####  #    # #####       #
//  #    # #    # #    #    #    # #   #  #    # #    # #    # #    # #   #     #      #   #  #   #  #    # #   #  #    #
//  #    # #    #  ####      ####  #    # #    # #    # #    # #    # #    #    ###### #    # #    #  ####  #    #  ####

describe("hasGrammarErrors", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.hasGrammarErrors({
      text: "Ernest Shackleton was a famouse explorer who leaded an epic expedition to Antartica in 1914. The ship of him, the Endurance, became trapped in the ice and they had to abandonned it. Shackleton and his men then trekked across the ice and ocean in small boats until they reached a whaling station on South Georgia Island. Even though they faced many dangeres and hardshyps, Shackleton never losted hope or gived up. His story is truly inspiration.",
    });
    expect(res).toEqual({
      result: true,
      error: "",
    });
  });

  test("should return the data and no error message on success", async () => {
    const res = await _ai.hasGrammarErrors({
      text: "Ernest Shackleton was a famous explorer who led an epic expedition to Antarctica in 1914. His ship, the Endurance, became trapped in the ice and they had to abandon it. Shackleton and his men then trekked across the ice and ocean in small boats until they reached a whaling station on South Georgia Island. Even though they faced many dangers and hardships, Shackleton never lost hope or gave up. His story is truly inspirational.",
    });
    expect(res).toEqual({
      result: false,
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.hasGrammarErrors({
      text: "",
    });
    expect(result).toEqual({
      result: null,
      error: "Text not provided",
    });
  });
});

//
//  ###### # #    #     ####  #####    ##   #    # #    #   ##   #####     ###### #####  #####   ####  #####   ####
//  #      #  #  #     #    # #    #  #  #  ##  ## ##  ##  #  #  #    #    #      #    # #    # #    # #    # #
//  #####  #   ##      #      #    # #    # # ## # # ## # #    # #    #    #####  #    # #    # #    # #    #  ####
//  #      #   ##      #  ### #####  ###### #    # #    # ###### #####     #      #####  #####  #    # #####       #
//  #      #  #  #     #    # #   #  #    # #    # #    # #    # #   #     #      #   #  #   #  #    # #   #  #    #
//  #      # #    #     ####  #    # #    # #    # #    # #    # #    #    ###### #    # #    #  ####  #    #  ####

describe("fixGrammarErrors", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.fixGrammarErrors({
      text: "Captain James Cook was one of the most famous explorers of all time. He was born in Yorkshire England in 1728. When Cook was the captain of the endeavour, he sailed to the east coast of australia and made the first European contact with the aboriginals.",
    });
    expect(res).toEqual({
      result:
        "Captain James Cook was one of the most famous explorers of all time. He was born in Yorkshire, England in 1728. When Cook was the captain of the Endeavour, he sailed to the east coast of Australia and made the first European contact with the Aboriginals.",
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.fixGrammarErrors({
      text: "",
    });
    expect(result).toEqual({
      result: null,
      error: "Text not provided",
    });
  });
});

//
//  #    #   ##    ####     #####  #####   ####  ######   ##   #    # # ##### #   #
//  #    #  #  #  #         #    # #    # #    # #       #  #  ##   # #   #    # #
//  ###### #    #  ####     #    # #    # #    # #####  #    # # #  # #   #     #
//  #    # ######      #    #####  #####  #    # #      ###### #  # # #   #     #
//  #    # #    # #    #    #      #   #  #    # #      #    # #   ## #   #     #
//  #    # #    #  ####     #      #    #  ####  #      #    # #    # #   #     #

describe("hasProfanity", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.hasProfanity({
      text: "General Patton was a genuine badass. That guy didn't give a shit about anything that didn't help him win the war.",
    });
    expect(res).toEqual({
      result: true,
      error: "",
    });
  });

  test("should return the data and no error message on success", async () => {
    const res = await _ai.hasProfanity({
      text: "General Patton was a through-and-through soldier. That guy didn't allow people to waste time with anything that didn't help him win the war.",
    });
    expect(res).toEqual({
      result: false,
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.hasProfanity({
      text: "",
    });
    expect(result).toEqual({
      result: null,
      error: "Text not provided",
    });
  });
});

//
//  ###### # #    #    #####  #####   ####  ######   ##   #    # # ##### #   #
//  #      #  #  #     #    # #    # #    # #       #  #  ##   # #   #    # #
//  #####  #   ##      #    # #    # #    # #####  #    # # #  # #   #     #
//  #      #   ##      #####  #####  #    # #      ###### #  # # #   #     #
//  #      #  #  #     #      #   #  #    # #      #    # #   ## #   #     #
//  #      # #    #    #      #    #  ####  #      #    # #    # #   #     #

describe("fixProfanity", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.fixProfanity({
      text: "Is this what I have become? Retrace the steps, retrace the steps, What the fuck have I become? Security, illusion for the weak, Refuge, sought in routine, Another gear in their fucking machine.",
    });
    expect(res).toEqual({
      result:
        "Is this what I have become? Retrace the steps, retrace the steps, What the **** have I become? Security, illusion for the weak, Refuge, sought in routine, Another gear in their ******* machine.",
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.fixProfanity({
      text: "",
    });
    expect(result).toEqual({
      result: null,
      error: "Text not provided",
    });
  });
});

//
//  # #    #  ####  #      #    # #####  ######  ####     #    # ###### #    # ##### #  ####  #    #     ####  ######
//  # ##   # #    # #      #    # #    # #      #         ##  ## #      ##   #   #   # #    # ##   #    #    # #
//  # # #  # #      #      #    # #    # #####   ####     # ## # #####  # #  #   #   # #    # # #  #    #    # #####
//  # #  # # #      #      #    # #    # #           #    #    # #      #  # #   #   # #    # #  # #    #    # #
//  # #   ## #    # #      #    # #    # #      #    #    #    # #      #   ##   #   # #    # #   ##    #    # #
//  # #    #  ####  ######  ####  #####  ######  ####     #    # ###### #    #   #   #  ####  #    #     ####  #

describe("includesMentionOf", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.includesMentionOf({
      text: "The Battle of Cannae was a key engagement of the Second Punic War between the Roman Republic and Carthage, fought on 2 August 216 BC near the ancient village of Cannae in Apulia, southeast Italy. The Carthaginians and their allies, led by Hannibal, surrounded and practically annihilated a larger Roman and Italian army under the consuls Lucius Aemilius Paullus and Gaius Terentius Varro. It is regarded as one of the greatest tactical feats in military history and one of the worst defeats in Roman history.",
      subject: "Warfare",
    });
    expect(res).toEqual({
      result: true,
      error: "",
    });
  });

  test("should return the data and no error message on success", async () => {
    const res = await _ai.includesMentionOf({
      text: "The Battle of Cannae was a key engagement of the Second Punic War between the Roman Republic and Carthage, fought on 2 August 216 BC near the ancient village of Cannae in Apulia, southeast Italy. The Carthaginians and their allies, led by Hannibal, surrounded and practically annihilated a larger Roman and Italian army under the consuls Lucius Aemilius Paullus and Gaius Terentius Varro. It is regarded as one of the greatest tactical feats in military history and one of the worst defeats in Roman history.",
      subject: "Ancient Egypt",
    });
    expect(res).toEqual({
      result: false,
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.includesMentionOf({
      text: "",
      subject: "Warfare",
    });
    expect(result).toEqual({
      result: null,
      error: "Text not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.includesMentionOf({
      text: "The Battle of Cannae was a key engagement of the Second Punic War between the Roman Republic and Carthage, fought on 2 August 216 BC near the ancient village of Cannae in Apulia, southeast Italy. The Carthaginians and their allies, led by Hannibal, surrounded and practically annihilated a larger Roman and Italian army under the consuls Lucius Aemilius Paullus and Gaius Terentius Varro. It is regarded as one of the greatest tactical feats in military history and one of the worst defeats in Roman history.",
      subject: "",
    });
    expect(result).toEqual({
      result: null,
      error: "Subject not provided",
    });
  });
});

//
//  #  ####      ####  #    # ######  ####  ##### #  ####  #    #
//  # #         #    # #    # #      #        #   # #    # ##   #
//  #  ####     #    # #    # #####   ####    #   # #    # # #  #
//  #      #    #  # # #    # #           #   #   # #    # #  # #
//  # #    #    #   #  #    # #      #    #   #   # #    # #   ##
//  #  ####      ### #  ####  ######  ####    #   #  ####  #    #

describe("isQuestion", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.isQuestion({
      text: "When did Constantinople fall?",
    });
    expect(res).toEqual({
      result: true,
      error: "",
    });
  });

  test("should return the data and no error message on success", async () => {
    const res = await _ai.isQuestion({
      text: "Constantinople fell on May 29, 1453.",
    });
    expect(res).toEqual({
      result: false,
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.isQuestion({
      text: "",
    });
    expect(result).toEqual({
      result: null,
      error: "Text not provided",
    });
  });
});

//
//   ####  #    #  ####   ####  ######  ####  #####    ###### #####  # #####  ####
//  #      #    # #    # #    # #      #        #      #      #    # #   #   #
//   ####  #    # #      #      #####   ####    #      #####  #    # #   #    ####
//       # #    # #  ### #  ### #           #   #      #      #    # #   #        #
//  #    # #    # #    # #    # #      #    #   #      #      #    # #   #   #    #
//   ####   ####   ####   ####  ######  ####    #      ###### #####  #   #    ####

describe("suggestEdits", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.suggestEdits({
      text: "Rasputin was a man who lived in Rushia long ago. He was known for being a spiritual advizor to the Tsar and his family. Some people thought he was crazy, but others believed he had magical powers and cold heal people. Despite being controversial, Rasputin had a lot of influence over the Tsar and Tsarina, and his actions played a role in the fell of the Romanov dynasty.",
    });
    expect(res).toEqual({
      result:
        "Rasputin was a man who lived in Russia long ago. He was known for being a spiritual advisor to the Tsar and his family. Some people thought he was crazy, but others believed he had magical powers and could heal people. Despite being controversial, Rasputin had a lot of influence over the Tsar and Tsarina, and his actions played a role in the fall of the Romanov dynasty.",
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.suggestEdits({
      text: "",
    });
    expect(result).toEqual({
      result: null,
      error: "Text not provided",
    });
  });
});

//
//   ####  #    # #    # #    # ###### #####  # ###### ######
//  #      #    # ##  ## ##  ## #      #    # #     #  #
//   ####  #    # # ## # # ## # #####  #    # #    #   #####
//       # #    # #    # #    # #      #####  #   #    #
//  #    # #    # #    # #    # #      #   #  #  #     #
//   ####   ####  #    # #    # ###### #    # # ###### ######

describe("summarize", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.summarize({
      text: "Satoshi Nakamoto is the pseudonym used by the unknown creator of Bitcoin, a cryptocurrency. Nakamoto's true identity remains a mystery, and it is unclear whether the name refers to an individual or a group of people. Despite the secrecy surrounding Nakamoto's identity, their creation of Bitcoin has revolutionized the world of finance and technology.",
      sentence_count: 1,
    });
    expect(res).toEqual({
      result: expect.any(String),
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.summarize({
      text: "",
      sentence_count: 1,
    });
    expect(result).toEqual({
      result: null,
      error: "Text not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.summarize({
      text: "Satoshi Nakamoto is the pseudonym used by the unknown creator of Bitcoin, a cryptocurrency. Nakamoto's true identity remains a mystery, and it is unclear whether the name refers to an individual or a group of people. Despite the secrecy surrounding Nakamoto's identity, their creation of Bitcoin has revolutionized the world of finance and technology.",
      sentence_count: 0,
    });
    expect(result).toEqual({
      result: null,
      error: "Sentence count not provided",
    });
  });
});

//
//   ####  #    # #    # #    # ###### #####  # ###### ######    #    # ###### #   #    #####   ####  # #    # #####  ####
//  #      #    # ##  ## ##  ## #      #    # #     #  #         #   #  #       # #     #    # #    # # ##   #   #   #
//   ####  #    # # ## # # ## # #####  #    # #    #   #####     ####   #####    #      #    # #    # # # #  #   #    ####
//       # #    # #    # #    # #      #####  #   #    #         #  #   #        #      #####  #    # # #  # #   #        #
//  #    # #    # #    # #    # #      #   #  #  #     #         #   #  #        #      #      #    # # #   ##   #   #    #
//   ####   ####  #    # #    # ###### #    # # ###### ######    #    # ######   #      #       ####  # #    #   #    ####

describe("summarizeKeyPoints", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.summarizeKeyPoints({
      text: "Satoshi Nakamoto is the pseudonym used by the unknown creator of Bitcoin, a cryptocurrency. Nakamoto's true identity remains a mystery, and it is unclear whether the name refers to an individual or a group of people. Despite the secrecy surrounding Nakamoto's identity, their creation of Bitcoin has revolutionized the world of finance and technology.",
    });
    expect(res).toEqual({
      result: expect.any(String),
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.summarizeKeyPoints({
      text: "",
    });
    expect(result).toEqual({
      result: null,
      error: "Text not provided",
    });
  });
});

//
//  ###### #        ##   #####   ####  #####    ##   ##### ######
//  #      #       #  #  #    # #    # #    #  #  #    #   #
//  #####  #      #    # #####  #    # #    # #    #   #   #####
//  #      #      ###### #    # #    # #####  ######   #   #
//  #      #      #    # #    # #    # #   #  #    #   #   #
//  ###### ###### #    # #####   ####  #    # #    #   #   ######

describe("elaborate", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.elaborate({
      text: "Bitcoin was created by Satoshi Nakamoto.",
      sentence_count: 3,
    });
    expect(res).toEqual({
      result: expect.any(String),
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.elaborate({
      text: "",
      sentence_count: 3,
    });
    expect(result).toEqual({
      result: null,
      error: "Text not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.elaborate({
      text: "Bitcoin was created by Satoshi Nakamoto.",
      sentence_count: 0,
    });
    expect(res).toEqual({
      result: null,
      error: "Sentence count not provided",
    });
  });
});

//
//  ###### #    # #####  #        ##   # #    #
//  #       #  #  #    # #       #  #  # ##   #
//  #####    ##   #    # #      #    # # # #  #
//  #        ##   #####  #      ###### # #  # #
//  #       #  #  #      #      #    # # #   ##
//  ###### #    # #      ###### #    # # #    #

describe("explain", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.explain({
      text: "What is magnetism?",
      level: "novice",
    });
    expect(res).toEqual({
      result: expect.any(String),
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const result = await _ai.explain({
      text: "",
      level: "beginner",
    });
    expect(result).toEqual({
      result: null,
      error: "Text not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.explain({
      text: "What is magnetism?",
      level: "" as any,
    });
    expect(res).toEqual({
      result: null,
      error: "Level not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.explain({
      text: "What is magnetism?",
      level: "absolute beginner" as any,
    });
    expect(res).toEqual({
      result: null,
      error: "Invalid level",
    });
  });
});

//
//   ####  #        ##    ####   ####  # ###### #   #
//  #    # #       #  #  #      #      # #       # #
//  #      #      #    #  ####   ####  # #####    #
//  #      #      ######      #      # # #        #
//  #    # #      #    # #    # #    # # #        #
//   ####  ###### #    #  ####   ####  # #        #

describe("classify", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.classify({
      item: "The Epic of Gilgamesh",
      criteria: "language of original text",
      categories: [
        {
          id: "d5d7b896-bbc6-11ed-afa1-0242ac120002",
          text: "Modern languages",
        },
        {
          id: "e8b3c1ee-bbc6-11ed-afa1-0242ac120002",
          text: "Ancient languages",
        },
        {
          id: "efae8358-bbc6-11ed-afa1-0242ac120002",
          text: "Medieval languages",
        },
      ],
    });
    expect(res).toEqual({
      result: {
        id: "e8b3c1ee-bbc6-11ed-afa1-0242ac120002",
        text: "Ancient languages",
      },
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.classify({
      item: "",
      criteria: "language of original text",
      categories: [
        {
          id: "d5d7b896-bbc6-11ed-afa1-0242ac120002",
          text: "Modern languages",
        },
        {
          id: "e8b3c1ee-bbc6-11ed-afa1-0242ac120002",
          text: "Ancient languages",
        },
        {
          id: "efae8358-bbc6-11ed-afa1-0242ac120002",
          text: "Medieval languages",
        },
      ],
    });
    expect(res).toEqual({
      result: null,
      error: "Item not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.classify({
      item: "The Epic of Gilgamesh",
      criteria: "language of original text",
      categories: [],
    });
    expect(res).toEqual({
      result: null,
      error: "Categories not provided",
    });
  });
});

//
//   ####  ###### #####    #    # ###### #   # #    #  ####  #####  #####   ####
//  #    # #        #      #   #  #       # #  #    # #    # #    # #    # #
//  #      #####    #      ####   #####    #   #    # #    # #    # #    #  ####
//  #  ### #        #      #  #   #        #   # ## # #    # #####  #    #      #
//  #    # #        #      #   #  #        #   ##  ## #    # #   #  #    # #    #
//   ####  ######   #      #    # ######   #   #    #  ####  #    # #####   ####

describe("getKeywords", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.getKeywords({
      text: "The Epic of Gilgamesh was written in ancient Sumerian by an unknown author.",
      count: 3,
    });
    expect(res).toEqual({
      result: [expect.any(String), expect.any(String), expect.any(String)],
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.getKeywords({
      text: "",
      count: 3,
    });
    expect(res).toEqual({
      result: [],
      error: "Text not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.getKeywords({
      text: "The Epic of Gilgamesh was written in ancient Sumerian by an unknown author.",
      count: 0,
    });
    expect(res).toEqual({
      result: [],
      error: "Count not provided",
    });
  });
});

//
//   ####  ###### #    # ###### #####    ##   ##### ######    #    # ###### #   # #    #  ####  #####  #####   ####
//  #    # #      ##   # #      #    #  #  #    #   #         #   #  #       # #  #    # #    # #    # #    # #
//  #      #####  # #  # #####  #    # #    #   #   #####     ####   #####    #   #    # #    # #    # #    #  ####
//  #  ### #      #  # # #      #####  ######   #   #         #  #   #        #   # ## # #    # #####  #    #      #
//  #    # #      #   ## #      #   #  #    #   #   #         #   #  #        #   ##  ## #    # #   #  #    # #    #
//   ####  ###### #    # ###### #    # #    #   #   ######    #    # ######   #   #    #  ####  #    # #####   ####

describe("generateKeywords", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.generateKeywords({
      topic: "Charles Dickens",
      count: 4,
    });
    expect(res).toEqual({
      result: [
        expect.any(String),
        expect.any(String),
        expect.any(String),
        expect.any(String),
      ],
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.generateKeywords({
      topic: "",
      count: 4,
    });
    expect(res).toEqual({
      result: [],
      error: "Text not provided",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.generateKeywords({
      topic: "Charles Dickens",
      count: 0,
    });
    expect(res).toEqual({
      result: [],
      error: "Count not provided",
    });
  });
});

//
//   ####  ###### #####    #####  ####  #####  #  ####
//  #    # #        #        #   #    # #    # # #    #
//  #      #####    #        #   #    # #    # # #
//  #  ### #        #        #   #    # #####  # #
//  #    # #        #        #   #    # #      # #    #
//   ####  ######   #        #    ####  #      #  ####

describe("getTopic", () => {
  test("should return the data and no error message on success", async () => {
    const res = await _ai.getTopic({
      text: "A developed country, New Zealand ranks highly in international comparisons of national performance, such as quality of life, education, protection of civil liberties, government transparency, and economic freedom. The country was the first to introduce a minimum wage, and the first to give women the right to vote. New Zealand underwent major economic changes during the 1980s, which transformed it from a protectionist to a liberalised free-trade economy.",
    });
    expect(res).toEqual({
      result: "New Zealand",
      error: "",
    });
  });

  test("should return an empty data array and an error message on failure", async () => {
    const res = await _ai.getTopic({
      text: "",
    });
    expect(res).toEqual({
      result: null,
      error: "Topic not provided",
    });
  });
});

//
//  #####  #      #    # #####    ##   #      # ###### ######
//  #    # #      #    # #    #  #  #  #      #     #  #
//  #    # #      #    # #    # #    # #      #    #   #####
//  #####  #      #    # #####  ###### #      #   #    #
//  #      #      #    # #   #  #    # #      #  #     #
//  #      ######  ####  #    # #    # ###### # ###### ######


  describe("pluralize", () => {
    test("should return the data and no error message on success", async () => {
      const res = await _ai.pluralize({
        item: "tornado",
        count: 3,
      });
      expect(res).toEqual({
        result: "tornadoes",
        error: "",
      });
    });
  
    test("should return an empty data array and an error message on failure", async () => {
      const res = await _ai.pluralize({
        item: "",
        count: 3,
      });
      expect(res).toEqual({
        result: null,
        error: "Item not provided",
      });
    });

    test("should return an empty data array and an error message on failure", async () => {
      const res = await _ai.pluralize({
        item: "tornado",
        count: 0,
      });
      expect(res).toEqual({
        result: null,
        error: "Count not provided",
      });
    });
  });

//
//   ####   ####  #    # #    # ###### #####  #####    #####  ####     #    #   ##   #####  #    # #####   ####  #    # #    #
//  #    # #    # ##   # #    # #      #    #   #        #   #    #    ##  ##  #  #  #    # #   #  #    # #    # #    # ##   #
//  #      #    # # #  # #    # #####  #    #   #        #   #    #    # ## # #    # #    # ####   #    # #    # #    # # #  #
//  #      #    # #  # # #    # #      #####    #        #   #    #    #    # ###### #####  #  #   #    # #    # # ## # #  # #
//  #    # #    # #   ##  #  #  #      #   #    #        #   #    #    #    # #    # #   #  #   #  #    # #    # ##  ## #   ##
//   ####   ####  #    #   ##   ###### #    #   #        #    ####     #    # #    # #    # #    # #####   ####  #    # #    #

// export const plaintextToMarkdown = async (

//
//   ####   ####  #    # #    # ###### #####  #####    #####  ####     #    # ##### #    # #
//  #    # #    # ##   # #    # #      #    #   #        #   #    #    #    #   #   ##  ## #
//  #      #    # # #  # #    # #####  #    #   #        #   #    #    ######   #   # ## # #
//  #      #    # #  # # #    # #      #####    #        #   #    #    #    #   #   #    # #
//  #    # #    # #   ##  #  #  #      #   #    #        #   #    #    #    #   #   #    # #
//   ####   ####  #    #   ##   ###### #    #   #        #    ####     #    #   #   #    # ######

// export const plaintextToHTML = async (

//
//  #####  ####     #    #  ####    ##       ####  #####  ###### #      #      # #    #  ####
//    #   #    #    #    # #       #  #     #      #    # #      #      #      # ##   # #    #
//    #   #    #    #    #  ####  #    #     ####  #    # #####  #      #      # # #  # #
//    #   #    #    #    #      # ######         # #####  #      #      #      # #  # # #  ###
//    #   #    #    #    # #    # #    #    #    # #      #      #      #      # #   ## #    #
//    #    ####      ####   ####  #    #     ####  #      ###### ###### ###### # #    #  ####

// export const toSpellingUSA = async (

//
//  #####  ####     #    # #    #     ####  #####  ###### #      #      # #    #  ####
//    #   #    #    #    # #   #     #      #    # #      #      #      # ##   # #    #
//    #   #    #    #    # ####       ####  #    # #####  #      #      # # #  # #
//    #   #    #    #    # #  #           # #####  #      #      #      # #  # # #  ###
//    #   #    #    #    # #   #     #    # #      #      #      #      # #   ## #    #
//    #    ####      ####  #    #     ####  #      ###### ###### ###### # #    #  ####

// export const toSpellingUK = async (
