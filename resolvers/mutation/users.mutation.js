import dotenv from "dotenv";
import mongoose from "mongoose";
import { createToken } from "../../utils/index.utils.js";
import { createOne, deleteOne } from "../crud.js";

// Get User Model from Mongoose
const User = mongoose.model("User");
// Dotenv config
dotenv.config();

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
  const token = createToken(user, 86400 * 10);

  return {
    // status: 200,
    // message: "Login successful", // Login successful
    token,
  };
};



export { createUser, deleteSingleUser, loginUser };
