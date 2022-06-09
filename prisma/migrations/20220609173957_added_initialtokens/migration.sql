/*
  Warnings:

  - You are about to drop the column `initialtokenomicstokens` on the `Token` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Token" DROP COLUMN "initialtokenomicstokens",
ADD COLUMN     "initialtokens" VARCHAR(255)[];
