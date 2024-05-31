import jwt from "jsonwebtoken";
import { IUser } from "../models/user.schema";

export const generateToken = (user: IUser) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET!,
    { expiresIn: "1h" }
  );
};
