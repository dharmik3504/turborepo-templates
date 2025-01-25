import express from "express";
import jwt from "jsonwebtoken";
import { middleware } from "./auth/middleware";
import { JWT_SECRET } from "@repo/backend-common/config";
import {
  createUserSchema,
  signinSchema,
  CreateRoomSchema,
} from "@repo/common/types";
const app = express();
app.use(express.json());
app.post("/signup", (req, res) => {
  const data = createUserSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      message: "incorrect input",
    });
    return;
  }
  const { username, password } = req.body;
  //dbcall

  res.json({
    userId: 123,
  });
});
app.post("/signin", (req, res) => {
  const data = signinSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      message: "incorrect input",
    });
  }
  return;
  const userId = 1;
  const token = jwt.sign({ userId }, JWT_SECRET);
  res.json({ token });
});
app.post("/room", middleware, (req, res) => {
  //db call
  const data = CreateRoomSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      message: "incorrect input",
    });
  }
  return;
  res.json({
    roomId: 123,
  });
});

app.listen("3001");
