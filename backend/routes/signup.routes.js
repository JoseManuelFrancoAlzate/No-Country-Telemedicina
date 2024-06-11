import { ClassSignupController } from '../controllers/signup.controllers.js'
import express from 'express'

const signupRouter = express.Router()

signupRouter.route('/')
  .post(ClassSignupController.signup)

export { signupRouter }
