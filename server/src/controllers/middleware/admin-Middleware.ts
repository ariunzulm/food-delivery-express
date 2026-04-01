import { NextFunction, Request, Response } from "express";

const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const user = req.user;

  if (user?.role === "USER") {
    next();
  } else {
    res.status(403).json({ message: "Invalid ADMIN" });
  }
};
export default adminMiddleware;
