import { users } from "../database";

export const updateUserService = (id) => {
  const userFound = users.findIndex((user) => user.id == id);

  if (userFound === -1) {
    throw new Error("User not found");
  }

  users[userFound] = { ...users[userFound], ...userFound };

  return users[userFound];
};
