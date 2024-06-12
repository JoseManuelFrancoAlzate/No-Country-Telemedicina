import z from 'zod'

const postAppointmentSchema = z.object({
  appointmentDate: z.string().date(),
  userId: z.number().int().min(1),
  doctorId: z.number().int().min(1),
  searchDate: z.string().date().optional()
})

const putAppointmentSchema = z.object({
  appointmentDate: z.string().date().optional(),
  doctorId: z.number().int().min(1).optional(),
  userId: z.number().int().min(1),
  searchDate: z.string().date()
})

/**
 * Funcion encargada de validar los datos que vienen por medio de objeto
 * @param {{}} object - debe contener un objeto con los datos por lo general un json del req.body
 * @returns
 */
function validatePostAppointment (object) {
  return postAppointmentSchema.safeParse(object)
}

function validatePutAppointment (object) {
  return putAppointmentSchema.safeParse(object)
}

export { validatePostAppointment, validatePutAppointment }
