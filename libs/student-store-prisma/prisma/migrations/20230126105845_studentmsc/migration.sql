/*
  Warnings:

  - The primary key for the `Customer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `firstname` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `fullname` on the `Customer` table. All the data in the column will be lost.
  - Added the required column `bookbank` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_card` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surname` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tel` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Made the column `test` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_pkey",
DROP COLUMN "firstname",
DROP COLUMN "fullname",
ADD COLUMN     "bookbank" VARCHAR(255) NOT NULL,
ADD COLUMN     "email" VARCHAR(255) NOT NULL,
ADD COLUMN     "id_card" VARCHAR(255) NOT NULL,
ADD COLUMN     "name" VARCHAR(255) NOT NULL,
ADD COLUMN     "surname" VARCHAR(255) NOT NULL,
ADD COLUMN     "tel" VARCHAR(255) NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Customer_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Customer_id_seq";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "test" SET NOT NULL;

-- CreateTable
CREATE TABLE "LoingProvider" (
    "id" TEXT NOT NULL,
    "providerSource" VARCHAR(255) NOT NULL,
    "providerType" VARCHAR(255) NOT NULL,
    "providerUid" INTEGER NOT NULL,
    "displayName" VARCHAR(255) NOT NULL,
    "providerLoginImgurl" VARCHAR(255) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "customerId" TEXT NOT NULL,

    CONSTRAINT "LoingProvider_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LoingProvider_providerUid_key" ON "LoingProvider"("providerUid");

-- AddForeignKey
ALTER TABLE "LoingProvider" ADD CONSTRAINT "LoingProvider_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
