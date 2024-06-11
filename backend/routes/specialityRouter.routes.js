import express from 'express'
import { ClassSpecialitiesController } from '../controllers/specialities.controller.js'

const specialityRouter = express.Router()

specialityRouter.route('/')
  .get(ClassSpecialitiesController.get)
  


export { specialityRouter }