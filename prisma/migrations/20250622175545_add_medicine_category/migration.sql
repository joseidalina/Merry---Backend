/*
  Warnings:

  - Added the required column `form` to the `Medicine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Medicine` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Category_name_key";

-- AlterTable
ALTER TABLE "Medicine" ADD COLUMN     "description" TEXT,
ADD COLUMN     "form" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
