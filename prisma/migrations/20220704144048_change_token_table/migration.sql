/*
  Warnings:

  - Added the required column `vestingeight` to the `easytokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vestingfive` to the `easytokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vestingfour` to the `easytokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vestingnine` to the `easytokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vestingone` to the `easytokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vestingseven` to the `easytokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vestingsix` to the `easytokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vestingten` to the `easytokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vestingthree` to the `easytokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vestingtwo` to the `easytokens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "easytokens" ADD COLUMN     "vestingeight" DATE NOT NULL,
ADD COLUMN     "vestingfive" DATE NOT NULL,
ADD COLUMN     "vestingfour" DATE NOT NULL,
ADD COLUMN     "vestingnine" DATE NOT NULL,
ADD COLUMN     "vestingone" DATE NOT NULL,
ADD COLUMN     "vestingseven" DATE NOT NULL,
ADD COLUMN     "vestingsix" DATE NOT NULL,
ADD COLUMN     "vestingten" DATE NOT NULL,
ADD COLUMN     "vestingthree" DATE NOT NULL,
ADD COLUMN     "vestingtwo" DATE NOT NULL;
