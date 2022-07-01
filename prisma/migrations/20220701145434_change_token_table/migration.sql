/*
  Warnings:

  - Added the required column `websitelink` to the `easytokens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "easytokens" ADD COLUMN     "websitelink" VARCHAR(255) NOT NULL;
