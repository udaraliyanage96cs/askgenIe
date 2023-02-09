import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const { reqBody } = req.body;
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: generatePrompt( reqBody ),
    temperature: 0.6,
    max_tokens:2048,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt( reqBody) {
  return `${reqBody}`;
}