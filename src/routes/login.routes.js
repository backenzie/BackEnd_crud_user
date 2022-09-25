import { Router } from "express";
import { loginController } from "../Controllers/login.controller";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.middleware";
import { createLoginSchema } from "../schemas/login.schema";

export const loginRoutes = Router();

loginRoutes.post(
  "",
  validateSchemaMiddleware(createLoginSchema),
  loginController
);
