import { z } from "zod";

export const createUserSchema = z.object({
  username: z.string().min(3).max(20),
  passsword: z.string(),
  name: z.string(),
});

export const signinSchema = z.object({
  username: z.string().min(3).max(20),
  passsword: z.string(),
});

export const CreateRoomSchema = z.object({
  name: z.string().min(3).max(20),
});
