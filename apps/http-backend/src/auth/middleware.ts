import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";
export const middleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["token"] ?? "";

  const decoded = jwt.verify(token, JWT_SECRET);
  if (decoded) {
    //@ts-ignore todo :fix this
    req.userId = decoded.userId;
    next();
  } else {
    res.status(403).json({
      message: "unauthorized",
    });
  }
  res.json({ token });
};
