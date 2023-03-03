# 🤖 lowline.ai

[🔗 Website](https://www.lowline.ai)
[🔗 Documentation](https://www.lowline.ai/getting-started)

Lowline.ai is a javascript utility library that lets you easily sprinkle powerful AI magic all through your codebases.

- 100+ functions powered by ChatGPT, with more added all the time.
- Use it straight away by installing the NPM module.
- For faster completions sign up for a pay-per-use plan and create an API key.

---

## 🚧 Under development 🚧

---

## 📖 Table of Contents

- [Getting started](#getting-started)
- [Full list of functions](#full-list-of-functions)
- [Pricing](#pricing)

---

## 🚀 Getting started

Install the NPM package

```bash
npm install lowline.ai
```

Once the package is installed you can import using the require or import approach.

```js
// import
import { _ai } from "lowline.ai";

// or require
const lowline = require("lowline.ai");
const _ai = lowline._ai;
```

Search example

```js
import { _ai } from "lowline.ai";

const list = ["test1", "test2", "test3", "test4", "test5"],

const res = await _ai.stringListSearch({
  count: 1,
  search_term: "second test",
  search_items: list,
});
if (res.error) {
  console.log(error)
} else {
  console.log(res.data) // --> ["test2"]
}
```

Recommendation example

```js
import { _ai } from "lowline.ai";

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

const res = await _ai.recommend({
  options: products,
  interests: purchases,
  count: 3,
});
if (res.error) {
  console.lg(rec.error);
} else {
  console.log(rec.result); // -->  ["orange", "grape", "pasta"]
}
```

---

# 📒 Full list of functions

---

## 🔍 Search and recommend

### `option_list`
- searchOptionList
- recommendOptionList
- createOptionList
- sortOptionList
- filterOptionList

### `string_list`
- searchStringList
- recommendStringList
- createStringList
- sortStringList
- filterStringList

## 💬 Messaging

### `chat_message`
- suggestChatResponse
- suggestChatResponseIntents
- suggestChatResponseMultiple

### `chat_chain`
- suggestChatChainResponse
- suggestChatChainResponseIntents
- suggestChatChainResponseMultiple

### `email_message`
- suggestEmailResponse
- suggestEmailResponseIntents
- suggestEmailResponseMultiple

### `email_chain`
- suggestEmailChainResponse
- suggestEmailChainResponseIntents
- suggestEmailChainResponseMultiple

## 📘 Text processing

### `plaintext`
- hasSpellingMistakes
- fixSpelling
- hasGrammarMistakes
- fixGrammar
- hasProfanity
- getProfanityValue
- removeProfanity
- getReasonableness
- includesMentionOf
- isQuestion
- proofread // suggest edits to improve readability
- summarize
- elaborate
- explain
- pluralize
- convertToMarkdown
- convertToHTML

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

## 🏷️ Pricing

The free version has a small delay, for faster completions, go to https://www.lowline.ai, sign up for a paid account and create an API Key.

- Unlimited free use with a small delay.
- This delay is currently 5 seconds
- For no delay, create a paid plan at USD $0.01 per request.
- Pricing and delay length may change if needed to make the project financially sustainable.

Stay tuned!
