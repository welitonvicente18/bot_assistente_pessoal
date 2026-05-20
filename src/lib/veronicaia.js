const axios = require("axios");

const API_URL = "https://localhost:11434/api/generate";

async function send(text) {
  // teste de retorno enquanto a IA não estiver funcionando
  return {
    message: text,
    date: new Date(),
    is_completed: false,
  };

  if (!text) {
    throw new Error("Nenhuma mensagem fornecida para a IA.");
  }

  try {
    const response = await axios.post(API_URL, {
      model: "tinyllama",
      prompt: text,
      stream: false,
    });

    console.log("Resposta da IA recebida:", response.data);
    const message = response.data?.choices?.[0]?.message?.content;
    if (!message) {
      throw new Error("Resposta inválida da API da OpenAI.");
    }

    return message.trim();
  } catch (error) {
    console.error(
      "Erro ao enviar a mensagem para a IA:",
      error.response?.data || error.message || error,
    );
    throw error;
  }
}

module.exports = { send };
