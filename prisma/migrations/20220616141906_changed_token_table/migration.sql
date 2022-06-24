-- CreateTable
CREATE TABLE "easytokens" (
    "id" SERIAL NOT NULL,
    "tokenName" VARCHAR(255) NOT NULL,
    "whitelistWallets" VARCHAR(255)[],
    "tokenAddress" VARCHAR(255) NOT NULL,
    "coingecko" VARCHAR(255) NOT NULL,
    "month" VARCHAR(255)[],
    "m1" VARCHAR(255)[],
    "m2" VARCHAR(255)[],
    "m3" VARCHAR(255)[],
    "m4" VARCHAR(255)[],
    "m5" VARCHAR(255)[],
    "m6" VARCHAR(255)[],
    "m7" VARCHAR(255)[],
    "m8" VARCHAR(255)[],
    "m9" VARCHAR(255)[],
    "m10" VARCHAR(255)[],
    "m11" VARCHAR(255)[],
    "m12" VARCHAR(255)[],
    "m13" VARCHAR(255)[],
    "m14" VARCHAR(255)[],
    "m15" VARCHAR(255)[],
    "tge" VARCHAR(255)[],

    CONSTRAINT "easytokens_pkey" PRIMARY KEY ("id")
);
