import { users } from "../database";
import { createUserSchema, userClearSchema } from "../schemas/user.schema";

export const createUserservice = async (userData) => {
  const userSerialized = await createUserSchema.validate(userData, {
    stripUnknown: true,
    abortEarly: false,
  });

  users.push(userSerialized);
  return userClearSchema.validate(userSerialized, {
    stripUnknown: true,
  });
};
