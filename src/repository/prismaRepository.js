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

async function task(data) {
  const tarefa = await prismaRepository.createTask({
    task: data.task,
    description: data.description,
    date: data.date ? new Date(data.date) : null,
  });
  return tarefa;
}

module.exports = { main };
