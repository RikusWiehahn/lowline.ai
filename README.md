# 🤖 lowline.ai 

[🔗 Website](https://www.lowline.ai)
[🔗 Documentation](https://www.lowline.ai/getting-started)

Lowline.ai is a javascript utility library with 100+ functions powered by ChatGPT.

- Use it straight away by installing the NPM module.
- For faster completions sign up for a pay-per-use plan and create an API key.

---

## 📖 Table of Contents

- [Getting started](#getting-started)
- [Full list of functions](#full-list-of-functions)
- [Pricing](#pricing)

---

##  🚀 Getting started

Install the NPM package

```bash
npm install lowline.ai
```

Once the package is installed you can use the import using the require or import approach.

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

## 📒 Full list of functions

- searchStringList
- searchOptionList
- recommendStringList
- recommendOptionList

🚧 In progress 🚧

More coming soon!

---

## 🏷️ Pricing

The free version has a small delay, for faster completions, go to https://www.lowline.ai, sign up for a paid account and create an API Key.

- Unlimited free use with a small delay.
- This delay is currently 5 seconds
- For no delay, create a paid plan at USD $0.01 per request.
- Pricing and delay length may change if needed to make the project financially sustainable.


Stay tuned!