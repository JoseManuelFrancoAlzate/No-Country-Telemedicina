import { ClassCalendarServices } from '../services/googleCalendar.service.js'

class CalendarController {
  /**
   *
   *
   * @param {{}} req - Se refiere a los parametros que vienen dentro de la request
   * @param {{}} res - Se refiere a la response que envia el servidor
   * @returns {Promise}
   */

  async createEvent (req, res) {
    const { summary, description, startDate, endDate, startTime, endTime } =
        req.body

    try {
      const event = await ClassCalendarServices.createEvent(
        summary,
        description,
        startDate,
        endDate,
        startTime,
        endTime
      )

      return res.status(200).json({
        message: 'Calendar event successfully created.',
        eventLink: event
      })
    } catch (error) {
      console.error('Error creating calendar event:', error)
      return res.status(500).json({
        message:
                'Error al procesar su solicitud, porfavor intentelo nuevamente'
      })
    }
  };
}

const ClassCalendarController = new CalendarController()
export { ClassCalendarController }
