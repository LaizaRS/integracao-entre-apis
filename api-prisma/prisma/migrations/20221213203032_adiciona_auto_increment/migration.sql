-- AlterTable
CREATE SEQUENCE contatos_id_seq;
ALTER TABLE "contatos" ALTER COLUMN "id" SET DEFAULT nextval('contatos_id_seq');
ALTER SEQUENCE contatos_id_seq OWNED BY "contatos"."id";
