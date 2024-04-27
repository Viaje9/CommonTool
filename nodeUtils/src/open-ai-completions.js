import OpenAI from "openai";

const OPENAI_API_KEY = "sk-YourOpenAIKey";

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

async function main() {

  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: "請用正體中文回答" }],
  });
  console.log(response);
}

main();
