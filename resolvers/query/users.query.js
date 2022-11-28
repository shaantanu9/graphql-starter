import mongoose from "mongoose";
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

export const privateRoute = async (authorization) => {
  console.log(authorization, "authorization");
  return {
    status: 200,
    message: "Private route",
  };
};
