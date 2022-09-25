import { compare } from "bcryptjs";
import { users } from "../../database";
import { jwt } from "jsonwebtoken";
import "dotenv/config";

export const createLoginService = async (email, password) => {
  const user = users.find((user) => user.email === email);
  if (!user) {
    throw new Error("Email ou Senha invalido!");
  }
  const asSenhasCombinam = await compare(password, user.password);
  if (!asSenhasCombinam) {
    throw new Error("Email ou Senha invalido!");
  }
  const token = jwt.sign({}, process.env.SECRET_KEY, {
    expiresIn: "24h",
    subject: user.id,
  });
};
