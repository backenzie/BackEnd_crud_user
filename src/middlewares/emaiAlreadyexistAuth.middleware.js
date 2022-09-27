import { users } from "../database";

export const emailAlreadyExist = (req, res, next) => {
  const email = req.validatedBody.email;
  const compareEmail = users.find((user) => user.email == email);
  console.log(compareEmail);
  if (compareEmail) {
    return res.status(409).json({
      message: "Email already exist",
    });
  }

  next();
};
