import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";

export const updateUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { email, password, phoneNumber, age, role } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Invalid ID" });
  }
  try {
    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: {
        email,
        password,
        phoneNumber,
        age,
        role,
      },
    });

    res.status(200).json({ message: "A user found", user });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: "A user not found" });
  }
};
