import { Request, Response } from "express";
import bcrypt, { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../../lib/prisma";

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const userMatched = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!userMatched) {
      return res.status(500).json({ message: "Invalid email" });
    }
    console.log({ userMatched });

    const match = await bcrypt.compare(password, userMatched.password);
    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
      return res.status(500).json({ message: "Server configuration error" });
    }

    if (match === true) {
      const accessToken = jwt.sign(
        {
          data: {
            email: userMatched.email,
            password: userMatched.password,
            role: userMatched.role,
            userId: userMatched.id,
          },
        },
        jwtSecret,
        { expiresIn: "1h" },
      );
      return res.status(200).json({ message: "Valid credential", accessToken });
    }

    if (!match) {
      return res.status(500).json({ message: "Invalid email or password" });
    }

    res.status(200).json({ message: "Successfully signed in", match });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
