import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";

export const createFoodCategory = async (req: Request, res: Response) => {
  const { categoryName } = req.body;
  try {
    const category = await prisma.foodCategory.create({
      data: {
        categoryName,
      },
    });

    res.status(200).json({ message: "Successfully added food categories", category });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
