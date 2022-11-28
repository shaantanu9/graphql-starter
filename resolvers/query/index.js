import { getAllUsers, getSingleUser, getUsers } from "./users.query.js";

const Query = {
  user: { getAllUsers, getSingleUser, getUsers },
};

export default Query;
