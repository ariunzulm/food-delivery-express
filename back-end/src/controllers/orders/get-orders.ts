import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";

export const getOrders = async (_req: Request, res: Response) => {
  try {
    const orders = await prisma.foodOrder.findMany();
    res.status(200).json({ message: "Orders", orders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
