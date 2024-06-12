import  z  from 'zod';

const doctorSchema = z.object({
  licenceNumber: z.string().max(50),
  dni: z.string().max(50),
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
});

export const validatePostDoctor = (data) => doctorSchema.safeParse(data);