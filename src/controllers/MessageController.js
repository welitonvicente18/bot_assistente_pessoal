const veronicaia = require("../lib/veronicaia.js");
const prismaRepository = require("../repository/prismaRepository.js");

async function message(ctx) {
  const userText = ctx.message?.text || "";
  console.log("Mensagem recebida:", userText);

  let responseVeronica = "Desculpe, não consegui gerar a resposta.";
  try {
    responseVeronica = await veronicaia.send(userText);
    responseRepository = await prismaRepository.main(responseVeronica);
  } catch (error) {
    console.error("Erro ao chamar a IA:", error);
  }
  console.log(responseVeronica.message);
  //   const resposta = await ctx.reply(responseVeronica.message);
}

exports.message = message;
