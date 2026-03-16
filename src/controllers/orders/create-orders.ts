import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";

export type OrderItems = {
  foodId: number;
  quantity: number;
};

export const createOrder = async (req: Request, res: Response) => {
  const { orderItems }: { orderItems: OrderItems[] } = req.body;
  const totalPrice = await calculateFoodTotalPrice(
    orderItems.map((order) => order.foodId),
  );
  const order = await prisma.foodOrder.create({
    data: {
      totalPrice: "tring(totalPrice)",
      status: "PENDING",
      foodOrderItems: {
        createMany: {
          data: orderItems,
        },
      },
    },
  });
  res.json({"ok", order});
};
const calculateFoodTotalPrice = async (foodIds: number[]) => {
  const foods = await prisma.food.findMany({
    where: {
      id: {
        in: foodIds,
      },
    },
    select: {
      price: true,
    },
  });
  const totalPrice = foods.reduce((a, b) => Number(a) + Number(b.price), 0);
  return totalPrice;
};
