import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
export function createToken(user, time) {
  return jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET, {
    expiresIn: time, // expires in 15 days
  });
}
export function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}
