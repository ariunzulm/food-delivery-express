import { NextFunction, Request, Response } from "express";

const adminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const user = req.user;

  if (user?.role === "ADMIN") {
    next();
  } else {
    res.status(400).json({ message: "Invalid authentification" });
  }
};
export default adminMiddleware;
