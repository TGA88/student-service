-- DropForeignKey
ALTER TABLE "LoingProvider" DROP CONSTRAINT "LoingProvider_customerId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "test" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_pkey",
DROP COLUMN "bookbank",
DROP COLUMN "email",
DROP COLUMN "id_card",
DROP COLUMN "name",
DROP COLUMN "surname",
DROP COLUMN "tel",
ADD COLUMN     "firstname" VARCHAR(255) NOT NULL,
ADD COLUMN     "fullname" VARCHAR(255) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Customer_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "LoingProvider";

