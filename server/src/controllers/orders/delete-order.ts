import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";

export const deleteOrderById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    const deletedOrderItems = await prisma.foodOrderItem.deleteMany({
      where: {
        foodOrderId: Number(id),
      },
    });

    const deletedOrders = await prisma.foodOrder.delete({
      where: {
        id: Number(id),
      },
    });

    res.status(200).json({ message: "Successfully deleted", deletedOrders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unsuccessful deletion", error });
  }
};
