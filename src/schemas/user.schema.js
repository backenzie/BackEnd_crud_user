import { hashSync } from "bcryptjs";
import { v4 } from "uuid";
import * as yup from "yup";

export const createUserSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .transform((pass) => hashSync(pass, 10))
    .required(),
  isAdm: yup.boolean().required(),
  createdOn: yup
    .string()
    .transform(() => Date())
    .notRequired(),
  updatedOn: yup
    .string()
    .transform(() => Date.now())
    .notRequired(),
  id: yup
    .string()
    .transform(() => v4())
    .default(() => v4())
    .notRequired(),
});

export const userClearSchema = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  isAdm: yup.boolean().notRequired(),
  createdOn: yup.string().notRequired(),
  updatedOn: yup.string().notRequired(),
  id: yup.string().notRequired(),
});

export const usersSchema = yup.array(userClearSchema);
