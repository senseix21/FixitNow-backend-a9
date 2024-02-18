/*
  Warnings:

  - The `image` column on the `service` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "ServiceStatus" AS ENUM ('AVAILABLE', 'UPCOMMING');

-- AlterTable
ALTER TABLE "service" ADD COLUMN     "status" "ServiceStatus" NOT NULL DEFAULT 'AVAILABLE',
DROP COLUMN "image",
ADD COLUMN     "image" TEXT[];
