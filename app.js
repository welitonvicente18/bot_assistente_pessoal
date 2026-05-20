const bot = require("./src/bot/telegram");

bot
  .launch()
  .then(() => console.log("Verônica ativa com sucesso."))
  .catch((err) => console.error("Erro ao na comunicação com o Verônica:", err));

console.log("Verônica online 🚀");
