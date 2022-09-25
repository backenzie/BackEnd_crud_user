import { createUserservice } from "../Services/createUser.service";
import { listUsersService } from "../Services/listUsers.service";
import { findUserService } from "../Services/findUser.service";
import { deleteUserService } from "../Services/deleteUser.service";
import { updateUserService } from "../Services/updtUser.service";

export const createUserController = async (req, res) => {
  const user = req.validatedBody;
  const createdUser = await createUserservice(user);
  return res.status(201).json(createdUser);
};

export const listUsers = async (req, res) => {
  const users = await listUsersService();
  return res.json(users);
};

export const findUserController = (req, res) => {
  try {
    const id = req.params.id;
    const user = findUserService(id);
    return res.json(user);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const deleteUserController = (req, res) => {
  try {
    const id = req.params.id;
    deleteUserService(id);
    return res.status(204).send();
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const updateUserController = (req, res) => {
  try {
    const id = req.params.id;
    const user = req.body;

    const updatedUser = updateUserService(id, user);

    return res.json(updatedUser);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
