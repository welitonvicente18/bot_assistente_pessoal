const bot = require('./src/bot/telegram');

bot
  .launch()
  .then(() => console.log("Bot lançado com sucesso."))
  .catch((err) => console.error("Erro ao na comunicação com o Verônica:", err));

console.log('Bot online 🚀')