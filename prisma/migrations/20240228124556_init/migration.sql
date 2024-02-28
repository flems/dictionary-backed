-- CreateTable
CREATE TABLE "Word" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "defenition" TEXT NOT NULL,
    "example" TEXT,
    "translation" TEXT,

    CONSTRAINT "Word_pkey" PRIMARY KEY ("id")
);
