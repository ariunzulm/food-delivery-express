import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";

export const getOrders = async (_req: Request, res: Response) => {
  // console.log("headers: ", _req.headers);
  try {
    const orders = await prisma.foodOrder.findMany({
      include: {
        user: true,
        foodOrderItems: {
          include: { food: true },
        },
      },
    });
    res.status(200).json({ message: "Orders", orders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
