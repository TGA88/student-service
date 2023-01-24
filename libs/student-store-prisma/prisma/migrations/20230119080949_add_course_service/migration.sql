/*
  Warnings:

  - Made the column `updateAt` on table `StudentProfile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `birthDate` on table `StudentProfile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `mobilePhone` on table `StudentProfile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `test` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "StudentProfile" ALTER COLUMN "updateAt" SET NOT NULL,
ALTER COLUMN "birthDate" SET NOT NULL,
ALTER COLUMN "mobilePhone" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "test" SET NOT NULL;

-- CreateTable
CREATE TABLE "CourseInfo" (
    "id" TEXT NOT NULL,
    "courseName" TEXT NOT NULL,
    "courseStartDate" TEXT,
    "price" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CourseInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseRegister" (
    "id" TEXT NOT NULL,
    "courseName" TEXT NOT NULL,
    "totalStudent" TEXT,
    "droped" TEXT,
    "registered" TEXT,

    CONSTRAINT "CourseRegister_pkey" PRIMARY KEY ("id")
);
