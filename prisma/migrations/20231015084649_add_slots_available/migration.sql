/*
  Warnings:

  - A unique constraint covering the columns `[userId,serviceId]` on the table `cart` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slotsAvailable` to the `booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "booking" ADD COLUMN     "slotsAvailable" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "cart_userId_serviceId_key" ON "cart"("userId", "serviceId");
