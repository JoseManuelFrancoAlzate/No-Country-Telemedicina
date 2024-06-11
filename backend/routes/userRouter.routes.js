import express from "express";
import { ClassUsersController } from "../controllers/users.controller.js";
import { validatePostUser } from "../utils/validators/usersValidator.js";

const userRouter = express.Router();

userRouter
  .route("/")
  .get(ClassUsersController.get)
  .post(ClassUsersController.post)
  .delete(ClassUsersController.delete)
  .put(ClassUsersController.put);

// userRouter.route("/:dni").get(ClassUsersController.get);

userRouter.route("/email").get(ClassUsersController.getUserByEmail);

export { userRouter };
