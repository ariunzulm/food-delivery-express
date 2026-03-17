import { error } from "node:console";
import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";

export type OrderItems = {
  foodId: number;
  quantity: number;
};
type BodyType = {
  foods: OrderItems[];
};

// export const createOrder = async (req: Request, res: Response) => {
//   const { orderItems }: { orderItems: OrderItems[] } = req.body;

//   const totalPrice = await calculateFoodTotalPrice(
//     orderItems.map((order) => order.foodId),
//   );

//   const order = await prisma.foodOrder.create({
//     data: {
//       totalPrice: "100",
//       status: "PENDING",
//       foodOrderItems: {
//         createMany: {
//           data: orderItems,
//         },
//       },
//     },
//   });

//   res.json({ message: "ok", order });
// };
// const calculateFoodTotalPrice = async (foodIds: number[]) => {
//   const foods = await prisma.food.findMany({
//     where: {
//       id: {
//         in: foodIds,
//       },
//     },
//     select: {
//       price: true,
//     },
//   });
//   const totalPrice = foods.reduce((a, b) => Number(a) + Number(b.price), 0);
//   return totalPrice;
// };
//order hatuugarr
//item hatuugaar
//gadnas irsen id -aar maplaad nemne

export const createNewOrder = async (req: Request, res: Response) => {
  const { foods }: BodyType = req.body;
  console.log({ foods });

  try {
    const foodItemsTotalPrice = await totalPrice(
      foods.map((order) => order.foodId),
    );

    const order = await prisma.foodOrder.create({
      data: {
        status: "PENDING",
        totalPrice: String(totalPrice),
      },
    });

    const foodsWithOrderId = foods.map((food) => ({
      ...food,
      foodOrderId: order.id,
    }));

    const orderItem = await prisma.foodOrderItem.createMany({
      data: foodsWithOrderId,
    });
    res.json({ message: "ok", order, orderItem });
  } catch (error) {
    console.log(error);
  }
};

const calcFoodPrice = async (foodIds: Number[]) => {
  const priceOfFoods = await prisma.food.findMany({
    where: {
      id: {
        in: getFoodsId,
      },
    },
    select: {
      price: true,
    },
  });

  const totalPrice = priceOfFoods.reduce(
    (sum, food) => Number(sum) + Number(food.price),
    0,
  );

  return totalPrice;
};
