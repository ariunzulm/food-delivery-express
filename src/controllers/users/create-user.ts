import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {
  const { email, password, phoneNumber, age, role } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password,
        phoneNumber,
        age,
        role,
      },
    });
    res.status(200).json({ message: "A user created successfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
