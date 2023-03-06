# 🤖 lowline.ai

[🔗 Website](https://www.lowline.ai)
[🔗 Documentation](https://www.lowline.ai/docs/getting-started)

Lowline.ai is a javascript utility library that lets you easily sprinkle powerful AI magic all through your codebases.

- 100+ functions powered by ChatGPT, with more added all the time.
- Use it straight away by installing the NPM module.
- For faster completions sign up for a pay-per-use plan and create an API key.

---

## 🚧 Under development, use at own risk. 🚧

---

## 📖 Table of Contents

- [Getting started](#-🚀-getting-started)
- [Full list of functions](#-📒-full-list-of-functions)
- [Search and recommend](#🔍-search-and-recommend)
- [Pricing](#-🏷️-pricing)

---

## 🚀 Getting started

Install the NPM package

```bash
npm install lowline.ai
```

Once the package is installed you can import using the require or import approach.

```js
// import
import _ai from "lowline.ai";

// or require
const _ai = require("lowline.ai");
```

Search example

```js
import _ai from "lowline.ai";

const list = ["test1", "test2", "test3", "test4", "test5"],

const res = await _ai.searchStringList({
  count: 1,
  search_term: "second test",
  search_items: list,
});
if (res.error) {
  console.log(error)
} else {
  console.log(res.result) // --> ["test2"]
}
```

Recommendation example

```js
import _ai from "lowline.ai";

const purchases = ["apple", "banana"];
const products = [
  "apple",
  "banana",
  "orange",
  "grape",
  "eggs",
  "chicken",
  "potato",
  "pasta",
];

const res = await _ai.recommendStringList({
  options: products,
  interests: purchases,
  count: 3,
});
if (res.error) {
  console.lg(res.error);
} else {
  console.log(res.result); // -->  ["orange", "grape", "pasta"]
}
```

---

## 🏷️ Pricing

### lowline.ai is Free to use with a small response delay,

For full speed completions, [sign up](https://www.lowline.ai/sign-in) for a paid account and create an API Key.

- Unlimited free use with a slightly delayed response.
- This delay is currently 5 seconds
- For no delay, create a paid plan at USD $0.01 per request.
- Pricing and delay length may change if needed to make the project financially sustainable.

---

# 📒 Full list of functions

- searchOptionList
- recommendOptionList
- createOptionList
- sortOptionList
- filterOptionList
- searchStringList
- recommendStringList
- createStringList
- sortStringList
- filterStringList
- isPlaintext
- generatePlaintext
- hasSpellingErrors
- fixSpellingErrors
- hasGrammarErrors
- fixGrammarErrors
- hasProfanity
- fixProfanity
- includesMentionOf
- isQuestion
- suggestEdits
- summarize
- summarizeKeyPoints
- elaborate
- explain
- classify
- getKeywords
- generateKeywords
- getTopic
- pluralize
- plaintextToMarkdown
- plaintextToHTML
- toSpellingUSA
- toSpellingUK

---

## 🔍 Search and recommend

### string_list type

```php
string[];
```

### \_ai.searchStringList

Search through a list of strings, based on a search term provided.

```js
const res = await _ai.searchStringList({
  count: 1,
  search_term: "The second test",
  items: ["test1", "test2", "test3", "test4", "test5"],
});
if (res.error) {
  console.log(res.error);
} else {
  console.lg(res.result); // -> ["test2"]
}
```

### \_ai.recommendStringList

Recommend from a list of strings, based on interests provided.

```js
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
if (res.error) {
  console.log(res.error);
} else {
  console.log(res.result); // --> ["The local mall", "The local heritage museum"]
}
```

### \_ai.createStringList

Create a list of strings, based on an item type and count.

```js
const res = await _ai.createStringList({
  count: 4,
  item_type: "largest countries by landmass in descending order",
});
if (res.error) {
  console.log(res.error);
} else {
  console.log(res.result); // --> ["Russia", "Canada", "China", "United States"],
}
```

### \_ai.sortStringList

Sort a list of strings, based on a criteria.

```js
const res = await _ai.sortStringList({
  criteria: "Hardness",
  items: ["Granite", "Polystyrene foam", "Wood", "Diamond"],
});
if (res.error) {
  console.log(res.error);
} else {
  console.log(res.result); // -> ["Diamond", "Granite", "Wood", "Polystyrene foam"]
}
```

### \_ai.filterStringList

Filter a list of strings, based on a criteria.

```js
const res = await _ai.filterStringList({
  criteria: "Type of rock",
  items: ["Granite", "Polystyrene foam", "Wood", "Iron ore", "Potato"],
});
if (res.error) {
  console.log(res.error);
} else {
  console.log(res.result); // --> ["Granite", "Iron ore"],
}
```

### option_list type

```php
{ id: string; text: string; }[];

```

### \_ai.searchOptionList

Search in a list of options, based on a search term.

```js
const search_term = "Best place to go for a nature walk and hear the ocean";
const options = [
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
];

const res = await _ai.searchOptionList({
  count: 1,
  search_term,
  options,
});
if (res.error) {
  console.log(res.error);
} else {
  console.log(res.result); // --> The beach
}
```

### \_ai.recommendOptionList

Recommend one or more options from a list of options, based on a list of interests.

```js
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
if (res.error) {
  console.log(res.error);
} else {
  console.log(res.result);
  // [
  //   {
  //     id: "a9c50ee8-b996-11ed-afa1-0242ac120002",
  //     text: "The local mall",
  //   },
  //   {
  //     id: "f129c558-b996-11ed-afa1-0242ac120002",
  //     text: "The local heritage museum",
  //   },
  // ],
}
```

### \_ai.createOptionList

Create a list of options, based on a option type that describes the kind of options to create.

```js
const res = await _ai.createOptionList({
  count: 3,
  option_type: "largest countries by land area, descending",
});
if (res.error) {
  console.log(res.error);
} else {
  console.log(res.result);
  // [
  //   {
  //     id: "42b58fce-b9b5-11ed-afa1-0242ac120002",
  //     text: "Russia",
  //   },
  //   {
  //     id: "4b3dd782-b9b5-11ed-afa1-0242ac120002",
  //     text: "Canada",
  //   },
  //   {
  //     id: "5310e8aa-b9b5-11ed-afa1-0242ac120002",
  //     text: "China",
  //   },
  // ],
}
```

### \_ai.sortOptionList

Sort a list of options, based on a criteria.

```js
const res = await _ai.sortOptionList({
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
if (res.error) {
  console.log(res.error);
} else {
  console.log(res.result);
  // [
  //   {
  //     id: "800c6e9a-b9a8-11ed-afa1-0242ac120002",
  //     text: "Diamond",
  //   },
  //   {
  //     id: "8a715e2c-b9a8-11ed-afa1-0242ac120002",
  //     text: "Granite",
  //   },
  //   {
  //     id: "9730bc02-b9a8-11ed-afa1-0242ac120002",
  //     text: "Wood",
  //   },
  //   {
  //     id: "a4b270fa-b9a8-11ed-afa1-0242ac120002",
  //     text: "Polystyrene foam",
  //   },
  // ]
}
```

### \_ai.filterOptionList

Filter a list of options, based on a criteria.

```js
const res = await _ai.filterOptionList({
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
if (res.error) {
  console.log(res.error);
} else {
  console.log(res.result);
  // [
  //   {
  //     id: "8a715e2c-b9a8-11ed-afa1-0242ac120002",
  //     text: "Granite",
  //   },
  //   {
  //     id: "800c6e9a-b9a8-11ed-afa1-0242ac120002",
  //     text: "Sandstone",
  //   },
  // ],
}
```

---

## 💬 Messaging

### chat_thread type

```php
{
  name: string;
  role: string;
  content: string;
}[];
```

### \_ai.suggestChatResponse

```js
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
    },
  ],
});
if (res.error) {
  console.log(error);
} else {
  console.log(res.result);
  // -> "You have a great sense of humor and a kind heart."
}
```

### \_ai.suggestChatResponseIntents

```js
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
if (res.error) {
  console.log(res.error);
} else {
  console.log(res.result);
  // -->  'Offer support','Ask about the reason for feeling down','Ask about potential solutions',
}
```

### \_ai.suggestChatResponseMulti

```js
const res = await _ai.suggestChatResponseMulti({
  count: 0,
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
  ],
});
if (res.error) {
  console.log(error);
} else {
  console.log(res.result);
  // --> 'You are an amazing person!',' You have a great sense of humor!',' You are very talented!',
}
```

## 📘 Text processing

### \_ai.generatePlaintext

Just a wrapper around a normal prompt, may remove later.

```js
const res = await _ai.generatePlaintext({
  prompt:
    "Explain the rules of cricket in a way that a 5 year old can understand.",
});
if (res.error) {
  console.log(error);
} else {
  console.log(res.result);
  // Cricket is a game that is played between two teams, with each team taking turns to bat and bowl.
  // The team that scores the most runs wins the game.
}
```

### \_ai.isPlaintext

Detects if the text is in plain text format.

```js
const res = await _ai.isPlaintext({
  text: "The theatre was filled with an enthusiastic audience for the opening night.",
});
if (res.error) {
  console.log(error);
} else {
  console.log(res.result); // -> true
}
```

### \_ai.hasSpellingErrors

Detects if the text has spelling errors.

```js
const res = await _ai.hasSpellingErrors({
  text: "The stufent went to the libary to researsh for her esssay.",
});
if (res.error) {
  console.log(error);
} else {
  console.log(res.result); // -> true
}
```

### \_ai.fixSpellingErrors

Fixes any spelling errors found in the text.

```js
const res = await _ai.fixSpellingErrors({
  text: "Wittenburg Cathdral is a bautifull and histroic bulding loceted in the German city of Wittenburg.",
});
if (res.error) {
  console.log(error);
} else {
  console.log(res.result);
  // Wittenburg Cathedral is a beautiful and historic building located in the German city of Wittenburg.
}
```

### \_ai.hasGrammarErrors

Detects if the text has grammar errors.

```js
const res = await _ai.hasGrammarErrors({
  text: "Ernest Shackleton was a famouse explorer who leaded an epic expedition to Antartica in 1914.",
});
if (res.error) {
  console.log(error);
} else {
  console.log(res.result); // true
}
```

### \_ai.fixGrammarErrors

Fixes any grammar errors found in the text.

```js
const res = await _ai.fixGrammarErrors({
  text: "Ernest Shackleton was a famous explorer who leaded an epic expedition to Antartica in 1914.",
});
if (res.error) {
  console.log(error);
} else {
  console.log(res.result);
  // Ernest Shackleton was a famous explorer who led an epic expedition to Antarctica in 1914.
}
```

### \_ai.hasProfanity

Detects if the text has profanity.

```js
const res = await _ai.hasProfanity({
  text: "Oh shit, I can't believe I just said that.",
});
if (res.error) {
  console.log(error);
} else {
  console.log(res.result); // true
}
```

### \_ai.fixProfanity

Obscures any profanity found in the text using asterisks.

```js
const res = await _ai.hasProfanity({
  text: "Oh shit, I can't believe I just said that.",
});
if (res.error) {
  console.log(error);
} else {
  console.log(res.result);
  // Oh ****, I can't believe I just said that.
}
```

### \_ai.includesMentionOf

Detects if the text includes a mention of a subject.

```js
const res = await _ai.includesMentionOf({
  text: "The Battle of Cannae was a key engagement of the Second Punic War between the Roman Republic and Carthage, fought on 2 August 216 BC near the ancient village of Cannae in Apulia, southeast Italy.",
  subject: "Warfare",
});
if (res.error) {
  console.log(error);
} else {
  console.log(res.result); // true
}
```

### \_ai.isQuestion

Detects if the text is a question.

```js
const res = await _ai.isQuestion({
  text: "When did Constantinople fall?",
});
if (res.error) {
  console.log(error);
} else {
  console.log(res.result); // true
}
```

### \_ai.suggestEdits

Suggests edits to the text.

```js
const res = await _ai.suggestEdits({
  text: "Rasputin was a man who lived in Rushia long ago. He was known for being a spiritual advizor to the Tsar and his family.",
});
if (res.error) {
  console.log(error);
} else {
  console.log(res.result);
  //  "Rasputin was a man who lived in Russia long ago. He was known for being a spiritual advisor to the Tsar and his family.",
}
```

### \_ai.summarize

Summarizes the text.

```js
const res = await _ai.summarize({
  text: "Satoshi Nakamoto is the pseudonym used by the unknown creator of Bitcoin, a cryptocurrency. Nakamoto's true identity remains a mystery, and it is unclear whether the name refers to an individual or a group of people. Despite the secrecy surrounding Nakamoto's identity, their creation of Bitcoin has revolutionized the world of finance and technology.",
  sentence_count: 1,
});
if (res.error) {
  console.log(error);
} else {
  console.log(res.result);
  //  "Satoshi Nakamoto is the pseudonym used by the unknown person or group that created the Bitcoin cryptocurrency."
}
```

### \_ai.summarizeKeyPoints

Summarizes the text and highlights key points.

```js
const res = await _ai.summarizeKeyPoints({
  text: "Satoshi Nakamoto is the pseudonym used by the unknown creator of Bitcoin, a cryptocurrency. Nakamoto's true identity remains a mystery, and it is unclear whether the name refers to an individual or a group of people. Despite the secrecy surrounding Nakamoto's identity, their creation of Bitcoin has revolutionized the world of finance and technology.",
});
if (res.error) {
  console.log(error);
} else {
  console.log(res.result);
  //  Satoshi Nakamoto is the pseudonym of the creator of Bitcoin, a cryptocurrency that has revolutionized finance and technology.
  // The true identity of Nakamoto remains unknown
}
```

### \_ai.elaborate

Elaborates on the text.

```js
const res = await _ai.elaborate({
  text: "Is mayonnaise an instrument?",
  sentence_count: 2,
});
if (res.error) {
  console.log(error);
} else {
  console.log(res.result);
  // Is mayonnaise an instrument? This is a famous line from the animated television show SpongeBob SquarePants, where one of the characters asks this question to another character who is playing a musical instrument. The line has become a popular meme and is often used humorously to question the validity of something.
}
```

### \_ai.explain

Explains the text at a given level of understanding.

```js
const res = await _ai.explain({
  text: "What is magnetism?",
  level: "novice",
});
if (res.error) {
  console.log(error);
} else {
  console.log(res.result);
  // Magnetism is a force that attracts or repels certain materials, such as iron or steel. It is caused by the motion of electric charges, such as electrons. Magnets have two poles, north and south, and opposite poles attract while like poles repel. Magnets can be found in everyday objects such as refrigerator magnets, speakers, and motors.
}
```

### \_ai.classify

Classifies an item into one of a number of categories based on a criteria.

```js
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
if (res.error) {
  console.log(error);
} else {
  console.log(res.result);
  // {
  //   id: "e8b3c1ee-bbc6-11ed-afa1-0242ac120002",
  //   text: "Ancient languages",
  // },
}
```

### \_ai.getKeywords

Extracts keywords based on the text provided.

```js
const res = await _ai.getKeywords({
  text: "The Epic of Gilgamesh was written in ancient Sumerian by an unknown author.",
  count: 3,
});
if (res.error) {
  console.log(error);
} else {
  console.log(res.result);
  // [ 'Epic of Gilgamesh', 'ancient Sumerian', 'unknown author' ]
}
```

### \_ai.generateKeywords

Generates keywords based on the topic provided.

```js
const res = await _ai.generateKeywords({
  topic: "Charles Dickens",
  count: 4,
});
if (res.error) {
  console.log(error);
} else {
  console.log(res.result);
  // [ 'author', 'Victorian era', 'novels', 'social commentary' ]
}
```

### \_ai.getTopic

Extracts the topic of the text provided.

```js
const res = await _ai.getTopic({
  text: "A developed country, New Zealand ranks highly in international comparisons of national performance, such as quality of life, education, protection of civil liberties, government transparency, and economic freedom. The country was the first to introduce a minimum wage, and the first to give women the right to vote. New Zealand underwent major economic changes during the 1980s, which transformed it from a protectionist to a liberalised free-trade economy.",
});
if (res.error) {
  console.log(error);
} else {
  console.log(res.result); // New Zealand
}
```

### \_ai.pluralize

Figure out the correct plural form of a word.

```js
const res = await _ai.pluralize({
  item: "tornado",
  count: 3,
});
if (res.error) {
  console.log(error);
} else {
  console.log(res.result); // tornadoes
}
```

### \_ai.plaintextToMarkdown

Converts plaintext to markdown.

```js
const res = await _ai.plaintextToMarkdown({
  text: `General Sherman (tree)
      General Sherman is a giant sequoia tree located at an elevation of 2,109 m (6,919 ft) above sea level in the Giant Forest of Sequoia National Park in Tulare County, in the U.S. state of California.

      History
      The General Sherman Tree was named after the American Civil War general William Tecumseh Sherman.`,
});
if (res.error) {
  console.log(error);
} else {
  console.log(res.result);
  // `# General Sherman (tree)
  // General Sherman is a giant sequoia tree located at an elevation of 2,109 m (6,919 ft) above sea level in the Giant Forest of Sequoia National Park in Tulare County, in the U.S. state of California.
  //
  // ## History
  // The General Sherman Tree was named after the American Civil War general William Tecumseh Sherman.`,
}
```

### \_ai.plaintextToHTML

Converts plaintext to HTML.

```js
const res = await _ai.plaintextToHTML({
  text: `General Sherman (tree)
      General Sherman is a giant sequoia tree located at an elevation of 2,109 m (6,919 ft) above sea level in the Giant Forest of Sequoia National Park in Tulare County, in the U.S. state of California.

      History
      The General Sherman Tree was named after the American Civil War general William Tecumseh Sherman. The official story, which may be apocryphal, claims the tree was named in 1879 by naturalist James Wolverton, who had served as a lieutenant in the 9th Indiana Cavalry under Sherman.`,
});
if (res.error) {
  console.log(error);
} else {
  console.log(res.result);
  //  "<div><h1>General Sherman (tree)</h1><p>General Sherman is a giant sequoia tree located at an elevation of 2,109 m (6,919 ft) above sea level in the Giant Forest of Sequoia National Park in Tulare County, in the U.S. state of California.</p><h2>History</h2><p>The General Sherman Tree was named after the American Civil War general William Tecumseh Sherman. The official story, which may be apocryphal, claims the tree was named in 1879 by naturalist James Wolverton, who had served as a lieutenant in the 9th Indiana Cavalry under Sherman.</p></div>",
}
```

### \_ai.toSpellingUSA

Converts British English to American English.

```js
const res = await _ai.toSpellingUSA({
  text: `The centre of the harbour was crowded with 19th century British sailing ships.`,
});
if (res.error) {
  console.log(error);
} else {
  console.log(res.result);
  // "The center of the harbor was crowded with 19th century British sailing ships"
}
```

### \_ai.toSpellingUK

Converts American English to British English.

```js
const res = await _ai.toSpellingUSA({
  text: "The center of the harbor was crowded with 19th century British sailing ships",
});
if (res.error) {
  console.log(error);
} else {
  console.log(res.result);
  // "The centre of the harbour was crowded with 19th century British sailing ships."
}
```

🚧 The below functions are under construction 🚧

### `emoji`

- detectEmoji
- suggestEmoji

### `formality`

- detectFormality
- detectFormalityValue
- editFormality

### `sentiment`

- detectMainSentiment
- getSentimentHappiness
- getSentimentAnger
- getSentimentSadness
- getSentimentDisgust
- getSentimentFear
- getSentimentSurprise
- changeSentiment

### `html`

- hasHTML
- removeHTML
- convertHTMLToMarkdown
- convertHTMLToPlainText

### `markdown`

- hasMarkdown
- removeMarkdown
- convertMarkdownToHTML
- convertMarkdownToPlainText

## 🌍 Geography

### `coordinates`

- convertCoordsToAddress
- getDistanceBetweenCoords
- getCoordsFromAddress
- getCoordsFromLocation

### `location`

Open-ended, city, state, country, etc.

- detectLocation
- suggestLocation
- suggestLocationMultiple
- getCoordsFromLocation
- getAddressFromLocation
- getTimezoneFromLocation
- getCurrencyFromLocation
- getLanguageFromLocation
- getCountryFromLocation
- getStateFromLocation
- getCityFromLocation

### `country`

- detectCountry
- suggestCountry
- suggestCountryMultiple
- getCurrencyFromCountry
- getCountryCode
- getCountryName
- getCountryFlagEmoji

### `currency`

- getCurrencySymbol
- getCurrencyCode
- getCurrencyName

### `timezone`

- detectTimezone
- getTimezoneName
- getTimezoneOffset
- getTimezoneAbbreviation
- getTimezoneUTCOffset

### `language`

- detectLanguage
- getLanguageCode
- getLanguageName
- translate

## 🧮 Number representation

### `color`

- isColor
- getColorName
- getColorFormat
- convertColorFormat
- suggestColor
- suggestColorMultiple
- getBrightness
- getSaturation
- getHue
- setBrightness
- setSaturation
- setHue
- getComplementaryColor
- invertColor
- getContrastingColor

### `url`

- isURL
- getURLProtocol
- getURLDomain
- getURLSubdomain
- getURLPathname
- getURLQueryParams

### `decimal`

- toDecimal
- fromDecimal

### `percentage`

- prettyPrintPercentage
- ratioToPercentage // 0-1 to 0-100
- percentageToRatio // 0-100 to 0-1

### `fraction`

- prettyPrintFraction
- ratioToFraction // 0-1 to fraction
- fractionToRatio // fraction to 0-1

### `number`

- isNumber
- isWholeNumber
- isDecimal
- isPercentage
- isFraction
- isNegative
- isPositive

## 📍 Addresses and contact info

### `names`

- detectName
- suggestName
- suggestNameMultiple
- getFirstName
- getLastName
- getFullName
- getInitials

### `address`

- detectAddress
- suggestAddress
- formatAddress
- getStreetAddress
- getCityFromAddress
- getStateFromAddress
- getZipCodeFromAddress
- getCountryFromAddress

### `email_address`

- isEmailAddress

### `phone_number`

- isPhoneNumber
- getPhoneNumberCountryCode
- getPhoneNumberAreaCode
- getPhoneNumberLocalNumber
- getPhoneNumberExtension
- getPhoneNumberType

## 💽 Data formats

### `json`

- isJSON
- flattenJSON
- convertJSONToYAML
- convertJSONToXML
- convertJSONToCSV

### `xml`

- isXML
- convertXMLToJSON
- convertXMLToYAML
- convertXMLToCSV

### `yaml`

- isYAML
- convertYAMLToJSON
- convertYAMLToXML
- convertYAMLToCSV

### `csv`

- isCSV
- convertCSVToJSON
- convertCSVToXML
- convertCSVToYAML

---
