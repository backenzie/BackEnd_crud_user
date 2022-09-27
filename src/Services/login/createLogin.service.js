import * as bcrypt from "bcryptjs";
import { users } from "../../database";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const createLoginService = async (email, password) => {
  const user = users.find((user) => user.email == email);

  if (!user) {
    throw new Error("Email ou Senha invalido!");
  }
  const asSenhasCombinam = bcrypt.compareSync(password, user.password);

  if (!asSenhasCombinam) {
    throw new Error("Email ou Senha invalido!");
  }

  const token = jwt.sign(
    {
      isAdm: user.isAdm,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "24h",
      subject: user.id,
    }
  );
  return token;
};
