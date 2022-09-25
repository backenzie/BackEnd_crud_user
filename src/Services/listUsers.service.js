import { users } from "../database";
import { usersSchema } from "../schemas/user.schema";

export const listUsersService = async () => {
  return await usersSchema.validate(users, {
    stripUnknown: true,
  });
};
