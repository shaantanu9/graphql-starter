import mongoose from "mongoose";
import { createOne, deleteOne } from "../crud.js";
const User = mongoose.model("User");

const createUser = async (userInput) => {
  const user = await User.findOne({ email: userInput.email });
  if (user) {
    return {
      status: 400,
      message: "User already exists",
    };
  }
  const data = await createOne(User, userInput);
  return data;
};

const deleteSingleUser = async (id) => {
  const data = await deleteOne(User, id);
  return data;
};

const loginUser = async (userInput) => {
  const user = await User.findOne({
    email: userInput.email,
  });
  if (!user) {
    return {
      status: 400,
      message: "User does not exist", // User does not exist
    };
  }
  const isMatch = await user.checkPassword(userInput.password);
  if (!isMatch) {
    return {
      status: 400,
      message: "Incorrect password", // Incorrect password
    };
  }
  return {
    // status: 200,
    // message: "Login successful", // Login successful
    token: "token",
  };
};

export { createUser, deleteSingleUser, loginUser };
