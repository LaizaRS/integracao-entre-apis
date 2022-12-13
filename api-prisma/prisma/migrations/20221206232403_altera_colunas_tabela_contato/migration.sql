/*
  Warnings:

  - You are about to drop the column `cellphone` on the `contatos` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `contatos` table. All the data in the column will be lost.
  - You are about to drop the column `cpf` on the `contatos` table. All the data in the column will be lost.
  - You are about to drop the column `fathersName` on the `contatos` table. All the data in the column will be lost.
  - You are about to drop the column `mothersName` on the `contatos` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `contatos` table. All the data in the column will be lost.
  - Added the required column `celular` to the `contatos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `contatos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "contatos" DROP COLUMN "cellphone",
DROP COLUMN "city",
DROP COLUMN "cpf",
DROP COLUMN "fathersName",
DROP COLUMN "mothersName",
DROP COLUMN "name",
ADD COLUMN     "celular" TEXT NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL;
