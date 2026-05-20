/*
  Warnings:

  - You are about to drop the `Message` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Message";

-- CreateTable
CREATE TABLE "tarefa" (
    "id" SERIAL NOT NULL,
    "message" VARCHAR(255) NOT NULL,
    "data" DATE NOT NULL,
    "is_completed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tarefa_pkey" PRIMARY KEY ("id")
);
