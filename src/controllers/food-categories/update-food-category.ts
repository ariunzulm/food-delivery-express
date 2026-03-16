import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";

export const updateFoodCategoryById = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  const { categoryName } = req.body;

  if (!categoryName) {
    return res.status(400).json({ message: "Category name is required" });
  }

  try {
    const updatedCategory = await prisma.foodCategory.update({
      where: { id: Number(id) },
      data: { categoryName },
    });

    res.status(200).json({ message: "Category updated", updatedCategory });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
