-- DropIndex
DROP INDEX "LoingProvider_providerUid_key";

-- AlterTable
ALTER TABLE "LoingProvider" ALTER COLUMN "providerUid" SET DATA TYPE VARCHAR(255);
