# lowline.ai

## 🚧 Under construction 🚧

My aim is to make a utility-first library for completing all sorts of small useful AI tasks like below:

```js
import { _ai } from "lowline.ai";

const purchases = ["apple", "banana"];
const products  = ["apple", "banana", "orange", "grape", "eggs", "chicken", "potato", "pasta"];

const rec = await _ai.recommend({
  options: products,
  interests: purchases,
  count: 3,
});
if (rec.error) {
  console.lg(rec.error);
} else {
  console.log(rec.result); // -->  ["orange", "grape", "pasta"]
}

```

- By building a big set of tried and tested prompts and pipelines I hope I can save myself and other developers lots of time!
- I plan to make it free to use with a small built-in delay and an optional **pay-per-use** tier that will cover the costs help subsidize the free tier.
- Using these two levers I hope to create a tool that generates as much overall value as possible while staying financially sustainable.

Stay tuned!