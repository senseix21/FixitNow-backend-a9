/*
  Warnings:

  - Added the required column `image` to the `service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "service" ADD COLUMN     "image" TEXT NOT NULL;
