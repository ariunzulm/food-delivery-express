import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";

export const deleteUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Invalid ID" });
  }
  try {
    const user = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
    if (!user) return res.status(404).json({ message: "A user not found" });

    res.status(200).json({ message: "A user found", user });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Internal server error" });
  }
};
