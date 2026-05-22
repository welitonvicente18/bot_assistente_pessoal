require("dotenv").config({
  path: __dirname + "/../../../.env",
});

const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.IA_API_KEY,
});

async function send(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
    },
  });
  return response.text;
}

module.exports = { send };
