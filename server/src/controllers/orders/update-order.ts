import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";

export const updatedOrderById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Invalid ID" });
  }
  if (!status) {
    return res.status(400).json({ message: "Status is required" });
  }
  console.log("efdbgd", status);
  try {
    const updatedOrder = await prisma.foodOrder.update({
      where: { id: Number(id) },
      data: { status },
    });

    res.status(200).json({ message: "Successfully updated", updatedOrder });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error during updating process", error });
  }
};
