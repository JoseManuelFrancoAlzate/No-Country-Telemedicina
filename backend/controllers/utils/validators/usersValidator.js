import z from 'zod'

const postUsersSchema = z.object({
  
  name: z.string({
    required_error: 'Must provide a Name'
  }),
  lastName: z.string({
    required_error: 'Must provide a Last Name'
  }),
  email: z.string().email(),
  identificationNumber: z.string(),
  birthDate: z.string().date(),
  profilePicture: z.string().url().optional(),
  genre: z.enum(['MALE', 'FEMALE', 'OTHER']),
  countryId: z.number().int().min(1),
  identificationType: z.number().int().min(1)
})

const putUsersSchema = z.object({
  id:z.number(),
  name: z.string({
    required_error: 'Must provide a Name'
  }).optional(),
  lastName: z.string({
    required_error: 'Must provide a Last Name'
  }).optional(),
  email: z.string().email().optional(),
  identificationNumber: z.string().optional(),
  birthDate: z.string().date().optional(),
  profilePicture: z.string().url().optional(),
  genre: z.enum(['MALE', 'FEMALE', 'OTHER']).optional(),
  countryId: z.number().int().min(1).optional(),
  identificationType: z.number().int().min(1).optional()
})

/**
 * Funcion encargada de validar los datos que vienen por medio de objeto
 * @param {{}} object - debe contener un objeto con los datos por lo general un json del req.body
 * @returns
 */
function validatePostUser (object) {
  return postUsersSchema.safeParse(object)
}
/**
 * Funcion encargada de validar los datos que vienen por medio de objeto
 * @param {{}} object - debe contener un objeto con los datos por lo general un json del req.body
 * @returns
 */
function validatePutUser (object) {
  return putUsersSchema.safeParse(object)
}

export { validatePostUser,validatePutUser }
