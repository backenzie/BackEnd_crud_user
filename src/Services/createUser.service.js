import { users } from "../database";
import * as bcript from "bcryptjs";
import { createUserSchema, userClearSchema } from "../schemas/user.schema";

export const createUserservice = async (userData) => {
  const userSerialized = await createUserSchema.validate(userData, {
    stripUnknown: true,
    abortEarly: false,
  });

  const { password } = userData;
  const hashPassword = await bcript.hash(password, 10);
  const newUser = {
    ...userSerialized,
    password: hashPassword,
  };
  users.push(newUser);
  return userClearSchema.validate(newUser, {
    stripUnknown: true,
  });
};
