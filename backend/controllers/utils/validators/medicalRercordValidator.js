import z from 'zod'

const postMedicalRecordSchema = z.object({
  id:z.number(),
  
    date: z.string({
      required_error: 'Must provide a Date'
    }),
    doctor_id: z.number(),
    consultation_reason: z.string(),
    recomendations: z.string(),
    diagnosis: z.string(),
 
    users_id: z.number()
    
  })

  function validatePostMedicalRecord (object) {
    return postMedicalRecordSchema.safeParse(object)
  }

  export { validatePostMedicalRecord}
