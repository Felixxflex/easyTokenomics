-- CreateTable
CREATE TABLE "Token" (
    "id" SERIAL NOT NULL,
    "tokenName" VARCHAR(255) NOT NULL,
    "whitelistWallets" VARCHAR(255)[],
    "tokenAddress" VARCHAR(255) NOT NULL,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);
