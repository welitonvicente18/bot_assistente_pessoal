require("dotenv").config();
const {
  PrismaClient,
} = require("@prisma/client/.prisma/client/default/index.js");
const { PrismaPg } = require("@prisma/adapter-pg");

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  }),
});

async function main(message) {
  const tarefa = await prisma.tarefa.create({
    data: {
      message: message.message,
      date: message.date,
      is_completed: message.is_completed,
    },
  });
  return tarefa;
}

module.exports = { main };
