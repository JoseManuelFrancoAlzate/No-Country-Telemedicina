import  z  from 'zod';

const doctorSchema = z.object({
  licenceNumber: z.string().max(50),
  identification_number: z.string().max(50),
  name: z.string().max(50),
  lastName: z.string().max(50),
  phoneNumber: z.number(),
  email: z.string().email(),
  active: z.boolean(),
  licencePhoto: z.string(),
  profilePicture: z.string(),
  birthDate: z.string().refine(date => !isNaN(Date.parse(date)), {
    message: 'Invalid date format',
  }),
  biography: z.string(),
  speciality:z.string(),
});

const putDoctorSchema = z.object({
  licenceNumber: z.string().max(50),
  identification_number: z.string().max(50),
  name: z.string().max(50).optional(),
  lastName: z.string().max(50).optional(),
  phoneNumber: z.number().optional(),
  email: z.string().email(),
  active: z.boolean().optional(),
  licencePhoto: z.string().optional(),
  profilePicture: z.string().optional(),
  birthDate: z.string().refine(date => !isNaN(Date.parse(date)), {
    message: 'Invalid date format',
  }).optional(),
  biography: z.string().optional(),
  speciality:z.string().optional(),
});

export const validatePostDoctor = (data) => doctorSchema.safeParse(data);

function validatePutDoctor (object) {
  return putDoctorSchema.safeParse(object)
}