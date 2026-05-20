const veronicaia = require("../lib/veronicaia.js");

async function message(ctx) {
  const userText = ctx.message?.text || "";
  console.log("Mensagem recebida:", userText);

  let aiText = "Desculpe, não consegui gerar a resposta.";
  try {
    aiText = await veronicaia.send(userText);
  } catch (error) {
    console.error("Erro ao chamar a IA:", error);
  }
  const resposta = await ctx.reply(aiText);
}

exports.message = message;
