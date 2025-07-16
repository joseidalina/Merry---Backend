-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_pharmacyId_fkey";

-- AlterTable
ALTER TABLE "Medicine" ALTER COLUMN "name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "pharmacyId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_pharmacyId_fkey" FOREIGN KEY ("pharmacyId") REFERENCES "Pharmacy"("id") ON DELETE SET NULL ON UPDATE CASCADE;
