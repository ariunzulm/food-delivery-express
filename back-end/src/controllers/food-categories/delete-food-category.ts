import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";

export const deleteFoodCategoryById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    const deletedCategory = await prisma.foodCategory.delete({
      where: {
        id: Number(id),
      },
    });

    res.status(200).json({ message: "Category deleted", deletedCategory });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
