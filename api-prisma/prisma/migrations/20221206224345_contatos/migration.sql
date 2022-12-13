-- CreateTable
CREATE TABLE "contatos" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cellphone" INTEGER NOT NULL,
    "cpf" INTEGER NOT NULL,
    "mothersName" TEXT NOT NULL,
    "fathersName" TEXT NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "contatos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "contatos_id_key" ON "contatos"("id");
