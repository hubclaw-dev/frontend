import * as z from "zod";

/**
 * Zod validation form in register (page /register)
 * @usedIn app/register/RegisterForm.tsx
 */
export const registerSchema = z
  .object({
    email: z.string().email({ message: "Incorrect email" }),
    password: z
      .string()
      .min(8, { message: "At least 8 characters" })
      .regex(/[A-Z]/, { message: "At least 1 capital letter" })
      .regex(/[0-9]/, { message: "At least 1 number" }),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords don't match",
    path: ["passwordConfirm"],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;

/**
 * Zod validation form in lofin (/login)
 * checks email and password
 */
export const loginSchema = z.object({
  email: z.string().email({ message: "Incorrect email" }),
  password: z.string().min(1, { message: "Enter password" }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
