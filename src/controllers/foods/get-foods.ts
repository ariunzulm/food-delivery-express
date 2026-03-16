import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";

export const getFoods = async (req: Request, res: Response) => {
  try {
    const foods = await prisma.food.findMany();

    if (foods.length === 0) {
      return res.status(404).json({ message: "No foods found" });
    }

    res.status(200).json({ message: "Foods", foods });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal server error" });
  }
};
