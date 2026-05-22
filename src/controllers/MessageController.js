const veronicaia = require("../lib/veronicaia.js");
const prismaRepository = require("../repository/prismaRepository.js");

async function message(ctx) {
  const userText = ctx.message?.text?.trim();

  if (!userText) {
    return ctx.reply("Não consegui identificar sua mensagem.");
  }

  try {
    const prompt = `
Você é Verônica, uma assistente virtual especializada em organizar tarefas.

REGRAS:
- Retorne APENAS JSON válido.
- Não explique nada.
- Não use markdown.
- Não faça perguntas.
- Interprete datas relativas como "hoje", "amanhã", "segunda-feira", etc.
- Considere a data atual como referência.
- O campo "task" deve conter um resumo curto da tarefa.
- O campo "description" deve conter uma confirmação amigável da Verônica com no máximo 50 caracteres.
- O campo "date" deve conter a data e hora no formato YYYY-MM-DD HH:mm:ss.
- Se não houver data na mensagem, retorne null.
- O campo "success" deve ser true quando identificar uma tarefa.
- O campo "success" deve ser false quando a mensagem não representar uma tarefa.

Formato obrigatório:

{
  "success": true,
  "task": "string",
  "description": "string",
  "date": "YYYY-MM-DD HH:mm:ss"
}

Data atual:
${new Date().toISOString()}

Mensagem do usuário:
"${userText}"
`;
    const response = await veronicaia.send(prompt);
    let data;
    try {
      data = JSON.parse(response);
    } catch (error) {
      console.error("JSON inválido retornado pela IA:", response);
      return ctx.reply("Desculpe, não consegui interpretar sua solicitação.");
    }

    if (data.success) {
      //   await prismaRepository.createTask({
      //     task: data.task,
      //     description: data.description,
      //     date: data.date ? new Date(data.date) : null,
      //   });
    }

    await ctx.reply(data.description); // Manda mensagem
  } catch (error) {
    console.error("Erro ao processar mensagem:", error);

    await ctx.reply("Ocorreu um erro ao processar sua solicitação.");
  }
}

module.exports = {
  message,
};
