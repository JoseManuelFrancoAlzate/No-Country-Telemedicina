import express from 'express'
import { ClassUsersController } from '../controllers/users.controller.js'

const userRouter = express.Router()

userRouter.route('/')
  .get(ClassUsersController.get)
  .post(ClassUsersController.post)
  .delete(ClassUsersController.delete)

export { userRouter }
