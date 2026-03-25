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
    console.log(category);

    console.log(category, "efvmkefvm");
    res.status(200).json({ message: "Added food categories", category });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
