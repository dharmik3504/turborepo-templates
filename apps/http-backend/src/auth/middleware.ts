import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
export const middleware = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.headers;

  if (typeof token !== "string") {
    return;
  }
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
