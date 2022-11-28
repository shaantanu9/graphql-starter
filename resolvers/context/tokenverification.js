import { verifyToken } from "../../utils/index.js";

export const tokenVerification = (token) => {
  const user = verifyToken(token);
  return user;
};
