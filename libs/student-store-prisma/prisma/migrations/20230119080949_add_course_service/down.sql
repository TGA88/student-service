-- AlterTable
ALTER TABLE "StudentProfile" ALTER COLUMN "mobilePhone" DROP NOT NULL,
ALTER COLUMN "birthDate" DROP NOT NULL,
ALTER COLUMN "updateAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "test" DROP NOT NULL;

-- DropTable
DROP TABLE "CourseInfo";

-- DropTable
DROP TABLE "CourseRegister";

