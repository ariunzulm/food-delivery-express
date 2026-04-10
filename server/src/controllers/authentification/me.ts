import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const me = async (req: Request, res: Response) => {
 

  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user?.userId },
      select: {
        email: true,
        phoneNumber: true,
      },
    });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    res.status(200).json({ message: "user verified", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
