import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";

export const getFoodById= async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    const food = await prisma.food.findUnique({
      where: { id: Number(id) },
    });

    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }

    res.status(200).json({ message: "Food", food });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
