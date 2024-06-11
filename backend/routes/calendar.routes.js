import express from 'express'
import { ClassCalendarController } from '../controllers/calendar.controllers.js'

const calendarRouter = express.Router()

calendarRouter.route('/')
  .post(ClassCalendarController.createEvent)

export { calendarRouter }
