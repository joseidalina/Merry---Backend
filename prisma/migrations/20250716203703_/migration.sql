/*
  Warnings:

  - Made the column `name` on table `Medicine` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Medicine" ALTER COLUMN "name" SET NOT NULL;
