import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        foodOrder: {
          include: {
            foodOrderItems: {
              include: {
                food: true,
              },
            },
          },
        },
      },
      omit: {
        password: true,
      },
    });

    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    res.status(200).json({ message: "All users", users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
