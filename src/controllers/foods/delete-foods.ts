import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";

export const deleteFoodById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    const deletedFood = await prisma.food.delete({
      where: { id: Number(id) },
    });

    res.status(200).json({ message: "Food deleted", deletedFood });
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "P2003") {
      return res.status(400).json({ message: "Invalid foodCategoryId" });
    }
    res.status(500).json({ message: "Internal server error" });
  }
};
