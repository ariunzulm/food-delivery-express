import { error } from "node:console";
import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";

export type OrderItems = {
  foodId: number;
  quantity: number;
};
export type BodyType = {
  userId: number;
  orderItems: OrderItems[];
};

export const createNewOrder = async (req: Request, res: Response) => {
  const userId = req.user?.userId!;
  const { orderItems }: BodyType = await req.body;
  try {
    if (userId === undefined) {
      console.log(userId, "undeee");
      res.status(400).json({ message: "Invalid usedfgbgnkvjgr" });
      return;
    }

    const totalPrice = await calculateTotalPrice(orderItems);
    if (!totalPrice) throw error("Price not founded");

    const order = await prisma.foodOrder.create({
      data: {
        userId,
        totalPrice,
        foodOrderItems: {
          create: orderItems,
        },
      },
    });
    res.json({ message: "Successfully ordered", order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unsuccessful order", error });
  }
};

const calculateTotalPrice = async (orderItems: OrderItems[]) => {
  const foodIds = orderItems.map((orderItem) => orderItem.foodId);

  const foods = await findFoodsById(foodIds);

  const foodWithQuantity = foods.map((food) => {
    const foundedOrderItems = orderItems.find(
      (orderItem) => orderItem.foodId === food.id,
    );
    return { ...food, quantity: foundedOrderItems?.quantity };
  });
  const totalPrice = foodWithQuantity.reduce((acc, curr) => {
    return acc + Number(curr.price) * Number(curr.quantity);
  }, 0);
  return totalPrice.toString();
};

const findFoodsById = async (foodIds: number[]) => {
  const foods = await prisma.food.findMany({
    where: {
      id: {
        in: foodIds,
      },
    },
  });
  return foods;
};
