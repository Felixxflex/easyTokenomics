/*
  Warnings:

  - Added the required column `projectdesc` to the `easytokens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "easytokens" ADD COLUMN     "projectdesc" VARCHAR(255) NOT NULL;
