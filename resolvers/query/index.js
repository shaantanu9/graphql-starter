import {
  getAllUsers,
  getSingleUser,
  getUsers,
  privateRoute,
} from "./users.query.js";

const Query = {
  user: { getAllUsers, getSingleUser, getUsers, privateRoute },
};

export default Query;
