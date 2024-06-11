import { SqlAppointments } from '../models/appointments.model.js'
import { client } from '../db.js'
import { validatePostAppointment, validatePutAppointment } from '../utils/validators/appointmentsValidator.js'

class CtlAppointments extends SqlAppointments {
  /**
   * Funcion encargada de obtener los appointments (citas)
   *
   * @param {Object} req - parametros de request.
   * @param {Object} res - Parametros de response
   * @author Julian Penagos
   */
  get = async (req, res) => {
    let { doctorName, date } = req.query
    let response

    try {
      if (doctorName) {
        doctorName = `%${doctorName}%`
        response = await client.query(this.getAllAppointments, [doctorName])
      } else if (date) {
        response = await client.query(this.getAppointmentsByDate, [date])
      } else {
        doctorName = '%%'
        response = await client.query(this.getAllAppointments, [doctorName])
        console.log(response)

      }

      if (!response.rows.length) {
        return res.status(404).json({ error: 'Appointment not found in DB' })
      }

      return res.status(200).json(response.rows)
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' })
    }
  }

  /**
   * Funcion encargada de eliminar un appointment (cita)
   *
   * @param {Object} req - parametros de request.
   * @param {Object} res - Parametros de response
   * @author Julian Penagos
   */
  delete = async (req, res) => {
    const { date, doctorId, pacientId } = req.query
    if (!(date && doctorId && pacientId)) {
      return res.status(400).json({ error: 'Query not provided' })
    }

    try {
      await client.query(this.deleteAppointment, [date, pacientId, doctorId])
      return res.status(200).json({ success: 'User Deleted Successfully' })
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' })
    }
  }

  /**
   * Funcion encargada de insertar un appointment (cita)
   *
   * @param {Object} req - parametros de request.
   * @param {Object} res - Parametros de response
   * @author Julian Penagos
   */
  post = async (req, res) => {
    const result = validatePostAppointment(req.body)

    if (result.error) {
      return res.status(400).json(result.error.issues)
    }

    const { appointmentDate, userId, doctorId } = result.data

    try {
      await client.query(this.createAppointment, [appointmentDate, userId, doctorId])
      if (result.error) {
        return res.status(400).json({ error: 'Cannot create appointment please check the ID\'s' })
      }
      return res.status(200).json({ success: `The Appointment was set for ${appointmentDate}` })
    } catch (error) {
      return res.status(500).json({ error: 'Cannot create appointment please check the ID\'s' })
    }
  }

  /**
   * Funcion encargada de actualizar un appointment (cita)
   *
   * @param {Object} req - parametros de request.
   * @param {Object} res - Parametros de response
   * @author Julian Penagos
   */
  put = async (req, res) => {
    const result = validatePutAppointment(req.body)

    if (result.error) {
      return res.status(400).json(result.error.issues)
    }
    const { appointmentDate, userId, doctorId, searchDate } = result.data

    try {
      const response = await client.query(this.updateAppointments, [appointmentDate, doctorId, searchDate, userId])
      if (!response.rowCount) {
        return res.status(400).json({ error: 'Appointment not found' })
      }

      return res.status(200).json({ success: 'Appointment updated' })
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}

const ctlAppointments = new CtlAppointments()
export { ctlAppointments }
