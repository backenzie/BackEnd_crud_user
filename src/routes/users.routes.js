import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  findUserController,
  listUsers,
  updateUserController,
} from "../Controllers/users.controller";
import { ensureAuthMiddleware } from "../middlewares/ensure.Auth.middleware";
import { isAdmAuth } from "../middlewares/isAdm.Auth.middleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.middleware";
import { emailAlreadyExist } from "../middlewares/emaiAlreadyexistAuth.middleware";
import { createUserSchema } from "../schemas/user.schema";

const userRoutes = Router();

userRoutes.post(
  "",
  validateSchemaMiddleware(createUserSchema),
  emailAlreadyExist,
  createUserController
);

userRoutes.get("/", ensureAuthMiddleware, isAdmAuth, listUsers);

userRoutes.get("/:id", ensureAuthMiddleware, isAdmAuth, findUserController);

userRoutes.patch("/:id", ensureAuthMiddleware, isAdmAuth, updateUserController);

userRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  isAdmAuth,
  deleteUserController
);

export default userRoutes;
