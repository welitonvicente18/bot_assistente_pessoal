require("dotenv").config({
  path: __dirname + "../../../.env",
});

const MessageController = require("../controllers/MessageController");
const { Telegraf } = require("telegraf");

if (!process.env.BOT_TOKEN) {
  console.error("Erro: TOKEN não encontrada. Defina BOT_TOKEN no arquivo .env");
  process.exit(1);
}

const bot = new Telegraf(process.env.BOT_TOKEN);

// Start no bot
bot.start(async (ctx) => {
  const resposta = await ctx.reply("Olá usuário 🚀");
});

// Escuta qualquer texto
bot.on("text", async (ctx) => {
  await MessageController.message(ctx);
});

module.exports = bot;
