import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";

export const createFoodCategory =
  () => async (_req: Request, res: Response) => {
    try {
      const categories = await prisma.foodCategory.findMany({
        include: { foods: true },
      });

      if (categories.length === 0) {
        return res.status(404).json({ message: "No categories found" });
      }

      res.status(200).json({ message: "Food categories", categories });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
