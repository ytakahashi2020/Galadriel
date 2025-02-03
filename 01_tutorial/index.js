import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  const openai = new OpenAI({
    apiKey: process.env.GALADRIEL_API_KEY,
    baseURL: "https://api.galadriel.com/v1/verified",
  });

  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "Hello!" },
    ],
  });
  console.log(
    `Message: ${JSON.stringify(completion.choices[0].message, null, 2)}`
  );
  console.log(`Hash: ${completion.hash}`);
  console.log(`Signed public key: ${completion.public_key}`);
  //   console.log(`Signature: ${completion.signature}`);
  //   console.log(`Tx hash: ${completion.tx_hash}`);
  //   console.log(`Attestation: ${completion.attestation}`);
}

main();
