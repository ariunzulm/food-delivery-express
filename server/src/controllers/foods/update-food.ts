import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";

export const updateFoodById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  const { foodName, price, image, ingredients, foodCategoryId } = req.body;

  if (!foodName || !price || !foodCategoryId || !ingredients) {
    return res
      .status(400)
      .json({ message: "foodName, price, and foodCategoryId are required" });
  }

  try {
    const updatedFood = await prisma.food.update({
      where: { id: Number(id) },
      data: {
        foodName,
        price,
        image,
        ingredients,
        foodCategoryId,
      },
    });

    res.status(200).json({ message: "Food updated successfully", updatedFood });
  } catch (error) {
    console.log(error);
    if (error instanceof Error && "code" in error && error.code === "P2003") {
      return res.status(400).json({ message: "Invalid foodCategoryId" });
    }
    res.status(500).json({ message: "Internal server error" });
  }
};
