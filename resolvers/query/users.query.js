import mongoose from "mongoose";
import { verifyToken } from "../../utils/index.utils.js";
import { readAll, readOne } from "../crud.js";
const User = mongoose.model("User");

export const getAllUsers = async () => {
  const data = await readAll(User);
  return data;
};
export const getSingleUser = async (id) => {
  const user = await readOne(User, id);
  return user;
};
export const getUsers = async () => {
  const users = await readAll(User);
  return users;
};

export const privateRoute = async (bearerToken, cb) => {
  const token = bearerToken.split(" ")[1];
  const user = await verifyToken(token);

  if (!user) return [{}];
  const data = await cb();
  return data;
};
