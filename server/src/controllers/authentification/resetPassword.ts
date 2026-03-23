import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";
import bcrypt, { compare } from "bcrypt";

export const resetPassword = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const userMatchedEmail = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!userMatchedEmail) {
      return res.status(500).json({ message: "Invalid email" });
    }
    console.log({ userMatchedEmail });

    const match = await bcrypt.compare(password, userMatchedEmail.password);
    console.log({ match });

    if (!match) {
      return res.status(500).json({ message: "Invalid email or password" });
    }

    res.status(200).json({ message: "Successfully signed in", match });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
