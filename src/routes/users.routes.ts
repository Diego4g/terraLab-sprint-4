import { Router } from "express";

import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { DeleteUserController } from "../modules/users/useCases/deleteUser/DeleteUserController";
import { ensureAdmin } from "../shared/middlewares/ensureAdmin";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticated";

const usersRouter = Router({
  mergeParams: true,
});

const createUserController = new CreateUserController();
const deleteUserController = new DeleteUserController();

usersRouter.post("/", createUserController.handle);
usersRouter.delete(
  "/:id",
  ensureAuthenticated,
  ensureAdmin,
  deleteUserController.handle
);

export { usersRouter };
