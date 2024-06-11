import express from 'express'
import { ClassLoginController } from '../controllers/login.controllers.js'

const loginRouter = express.Router()

loginRouter.route('/signup')
  .post(ClassLoginController.post)

  loginRouter.route('/login')
  .post(ClassLoginController.login)

export { loginRouter }
