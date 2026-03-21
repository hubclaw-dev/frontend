import * as z from "zod";

/**
 * Zod validation form in register (page /register)
 * @usedIn app/register/RegisterForm.tsx
 */
export const registerSchema = z.object({
  email: z.string().email({ message: "Некорректный email" }),
  password: z
    .string()
    .min(8, { message: "Пароль минимум 8 символов" })
    .regex(/[A-Z]/, { message: "Нужна хотя бы одна заглавная буква" })
    .regex(/[0-9]/, { message: "Нужна хотя бы одна цифра" }),
  passwordConfirm: z.string(),
}).refine((data) => data.password === data.passwordConfirm, {
  message: "Пароли не совпадают",
  path: ["passwordConfirm"],
});

export type RegisterFormValues = z.infer<typeof registerSchema>;

/**
 * Zod validation form in lofin (/login)
 * checks email and password
 */
export const loginSchema = z.object({
  email: z.string().email({ message: "Некорректный email" }),
  password: z.string().min(1, { message: "Введите пароль" }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;