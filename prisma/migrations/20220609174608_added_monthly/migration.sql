/*
  Warnings:

  - You are about to drop the column `initialtokens` on the `Token` table. All the data in the column will be lost.
  - You are about to drop the column `tge` on the `Token` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Token" DROP COLUMN "initialtokens",
DROP COLUMN "tge",
ADD COLUMN     "m11" VARCHAR(255)[];
