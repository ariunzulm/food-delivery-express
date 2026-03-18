import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";

export const createFood = async (req: Request, res: Response) => {
  const { foodName, price, image, ingredients, foodCategoryId } = req.body;

  if (!foodName || !price || !foodCategoryId) {
    return res.status(400).json({ message: "foodName, price, and foodCategoryId are required" });
  }

  try {
    const newFood = await prisma.food.create({
      data: {
        foodName,
        price,
        image,
        ingredients,
        foodCategoryId,
      },
    });

    res.status(201).json({ message: "Food added successfully", newFood });
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "P2003") {
      return res.status(400).json({ message: "Invalid foodCategoryId" });
    }
    res.status(500).json({ message: "Internal server error" });
  }
};