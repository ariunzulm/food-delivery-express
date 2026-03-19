import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

type TokenType = {
  data: {
    userId: number;
    email: string;
    role: string;
  };
};

export const getOrderByAdmin = async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(400).json({ message: "Invalid credential" });
  }
  const accessToken = authorization?.split(" ")[1];
  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    return res.status(500).json({ message: "JWT_SECRET is not configured" });
  }
  try {
    const decode = jwt.verify(accessToken, jwtSecret) as TokenType;

    const order = await prisma.foodOrder.findMany({
      where: { userId: decode.data.userId },
    });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order", order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
