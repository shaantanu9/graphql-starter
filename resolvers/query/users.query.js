import mongoose from "mongoose";
const User = mongoose.model("User");

import users from "../../user.js";
export const getAllUsers = () => users;
export const getSingleUser = (_id) => users.find((user) => user._id === id);

export const getUsers = async () => {
  const users = await User.find();
  console.log(users, "users from db");
  return users;
};
