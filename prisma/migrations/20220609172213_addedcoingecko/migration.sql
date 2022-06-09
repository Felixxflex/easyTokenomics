/*
  Warnings:

  - Made the column `coingecko` on table `Token` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Token" ALTER COLUMN "coingecko" SET NOT NULL;
