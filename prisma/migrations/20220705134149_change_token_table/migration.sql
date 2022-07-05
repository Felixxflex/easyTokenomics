-- AlterTable
ALTER TABLE "easytokens" ADD COLUMN     "liquidity" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "marketing" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "partnership" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "playtoearn" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "privatesale" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "publicsale" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "reserve" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "teamandadvisors" BOOLEAN NOT NULL DEFAULT false;
