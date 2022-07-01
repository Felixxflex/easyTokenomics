-- AlterTable
ALTER TABLE "easytokens" ADD COLUMN     "verifiedblock" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "verifiedteam" BOOLEAN NOT NULL DEFAULT false;
