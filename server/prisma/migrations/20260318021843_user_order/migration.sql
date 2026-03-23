/*
  Warnings:

  - The `status` column on the `FoodOrder` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `userId` to the `FoodOrder` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "FoodOrderStatusEnum" AS ENUM ('PENDING', 'CANCELED', 'DELIVERED');

-- AlterTable
ALTER TABLE "FoodOrder" ADD COLUMN     "userId" INTEGER NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "FoodOrderStatusEnum" NOT NULL DEFAULT 'PENDING';

-- AddForeignKey
ALTER TABLE "FoodOrder" ADD CONSTRAINT "FoodOrder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
