import fs from "fs";
import users from "../../user.js";
const createUser = (UserInput) => {
  const newUser = {
    _id: users.length + 1,
    ...UserInput,
  };

  users.push(newUser);
  const saveData = `const user = ${JSON.stringify(
    users
  )}; export default user;`;
  fs.writeFileSync("./user.js", saveData);
  return newUser;
};

export { createUser };
