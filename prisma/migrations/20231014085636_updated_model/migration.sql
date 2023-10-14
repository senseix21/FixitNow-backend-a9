/*
  Warnings:

  - You are about to drop the column `contactInfo` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "contactInfo",
ADD COLUMN     "contactNo" TEXT;
