/*
  Warnings:

  - You are about to drop the column `orderedBooks` on the `order` table. All the data in the column will be lost.
  - Added the required column `orderId` to the `ordered_books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "order" DROP COLUMN "orderedBooks";

-- AlterTable
ALTER TABLE "ordered_books" ADD COLUMN     "orderId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ordered_books" ADD CONSTRAINT "ordered_books_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
