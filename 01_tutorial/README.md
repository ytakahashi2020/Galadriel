# 0 preparation

Get from https://dashboard.galadriel.com/

# 1 create a async function

`async function main() {}`

`main()`

# 2 import

```
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();
```

# 3 create an openai

```
const openai = new OpenAI({
    apiKey: process.env.GALADRIEL_API_KEY,
    baseURL: "https://api.galadriel.com/v1/verified",
  });
```

# 4 create a completion

```
const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "Hello!" },
    ],
  });
```

# 5 check it

```
console.log(
    `Message: ${JSON.stringify(completion.choices[0].message, null, 2)}`
  );
  console.log(`Hash: ${completion.hash}`);
  console.log(`Signed public key: ${completion.public_key}`);
```

# 6 check in the explorer

`https://explorer.galadriel.com/`
