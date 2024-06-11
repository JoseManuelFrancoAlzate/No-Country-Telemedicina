import { ctlAppointments } from '../controllers/appointments.controller.js'
import express from 'express'

const appointmentsRouter = express.Router()

appointmentsRouter.route('/')
  .get(ctlAppointments.get)
  .delete(ctlAppointments.delete)
  .post(ctlAppointments.post)
  .put(ctlAppointments.put)

export { appointmentsRouter }
