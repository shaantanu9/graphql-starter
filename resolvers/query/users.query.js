import users from "../../user.js";
export const getAllUsers = () => users;
export const getSingleUser = (id) => users.find((user) => user._id === id);
