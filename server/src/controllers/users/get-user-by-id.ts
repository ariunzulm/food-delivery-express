import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    const user = await prisma.user.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User found", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
