-- AlterTable
ALTER TABLE "LoingProvider" DROP COLUMN "providerUid",
ADD COLUMN     "providerUid" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "LoingProvider_providerUid_key" ON "LoingProvider"("providerUid" ASC);

