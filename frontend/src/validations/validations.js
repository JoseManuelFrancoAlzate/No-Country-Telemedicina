import { number, z } from "zod";

export const userSchema = z.object({
  email: z
    .string().email({
      message: "Email is requerid"
    })
    ,password: z.string().min(6, {
    message: "The password must contain a minimum of 6 characters.",
  }),

});
