/*
  Warnings:

  - You are about to alter the column `abbrev` on the `easytokens` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "easytokens" ALTER COLUMN "abbrev" SET NOT NULL,
ALTER COLUMN "abbrev" SET DATA TYPE VARCHAR(255);
