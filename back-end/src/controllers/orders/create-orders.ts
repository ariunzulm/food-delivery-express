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
  const { userId, orderItems }: BodyType = await req.body;
  try {
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

// export const createNewOrder = async (req: Request, res: Response) => {
//   const { foods }: BodyType = await req.body;

//   const pricePromises = foods.map(async (food) => {
//     const price = await getFoodsPrice(food.foodId);

//     if (!price) throw new Error("Price is not assigned");
//     const finalPrice = Number(price) * food.quantity;
//     return finalPrice;
//   });

//   const prices = await Promise.all(pricePromises);

//   const totalPrice = prices.reduce((acc, currentPrice) => {
//     acc += Number(currentPrice);
//     return acc;
//   }, 0);

//   const order = await prisma.foodOrder.create({
//     data: {
//       totalPrice: String(totalPrice),
//       status: FoodOrderStatusEnum.PENDING,
//     },
//   });

//   const foodOrderId = foods.map((food) => {
//     return { ...food, foodOrderId: order.id };
//   });

//   const foodOrderItem = await prisma.foodOrderItem.createMany({
//     data: foodOrderId,
//   });

//   res.send("ok");
// };

// const getFoodsPrice = async (foodId: number) => {
//   const food = await prisma.food.findFirst({
//     where: {
//       id: foodId,
//     },
//   });

//   return food?.price;
// };
