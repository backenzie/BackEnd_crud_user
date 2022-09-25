import * as yup from "yup";

export const createLoginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
