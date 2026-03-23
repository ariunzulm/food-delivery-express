import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";

export const getOrderByUser = async (req: Request, res: Response) => {
  const user = req.user;
  try {
    const order = await prisma.foodOrder.findFirst({
      where: { userId: user?.userId },
    });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order", order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
