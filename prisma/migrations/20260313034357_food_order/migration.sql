-- AlterTable
ALTER TABLE "Food" ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "FoodCategory" ALTER COLUMN "updatedAt" DROP NOT NULL;

-- CreateTable
CREATE TABLE "FoodOrder" (
    "id" SERIAL NOT NULL,
    "totalPrice" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "FoodOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoodOrderItem" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "foodId" INTEGER NOT NULL,
    "foodOrderId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "FoodOrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FoodOrder_id_key" ON "FoodOrder"("id");

-- AddForeignKey
ALTER TABLE "FoodOrderItem" ADD CONSTRAINT "FoodOrderItem_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodOrderItem" ADD CONSTRAINT "FoodOrderItem_foodOrderId_fkey" FOREIGN KEY ("foodOrderId") REFERENCES "FoodOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
