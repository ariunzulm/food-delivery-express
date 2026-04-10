import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { TokenType } from "../../types/types";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(400).json({ message: "Invalid authorization" });
  }

  const accessToken = authorization?.split(" ")[1];

  const jwtSecret = process.env.JWT_SECRET!;

  if (!accessToken) {
    return res.status(500).json({ message: "Token is not configured" });
  }
  try {
    const decoded = jwt.verify(accessToken, jwtSecret) as TokenType;

    req.user = decoded.data;
    res.status(200).json({ message: "Valid authentification" });

    next();
    
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Invalid authentification" });
  }
};
