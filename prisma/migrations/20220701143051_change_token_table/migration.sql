/*
  Warnings:

  - Added the required column `vestingtest` to the `easytokens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "easytokens" ADD COLUMN     "vestingtest" DATE NOT NULL;
