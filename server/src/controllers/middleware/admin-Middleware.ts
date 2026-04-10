import { NextFunction, Request, Response } from "express";

const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const user = req.user;

  if (user?.role === "ADMIN") {
    next();

  } else {
    res.status(400).json({ message: "Invalid ADMIN" });
  }
};
export default adminMiddleware;
