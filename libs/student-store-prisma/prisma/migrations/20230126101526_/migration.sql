/*
  Warnings:

  - Made the column `test` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "test" SET NOT NULL;
