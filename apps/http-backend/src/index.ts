import express from "express";
import jwt from "jsonwebtoken";
import { middleware } from "./auth/middleware";
import { JWT_SECRET } from "./config";

const app = express();
app.use(express.json());
app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  //dbcall

  res.json({
    userId: 123,
  });
});
app.post("/signin", (req, res) => {
  const userId = 1;
  const token = jwt.sign({ userId }, JWT_SECRET);
  res.json({ token });
});
app.post("/room", middleware, (req, res) => {
  //db call
  res.json({
    roomId: 123,
  });
});

app.listen("3001");
