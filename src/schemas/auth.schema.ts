import { ZodType, z } from 'zod';

export type UserRegistrationProps = {
  type: string;
  fullname: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
  otp: string;
};

export const UserRegistrationSchema: ZodType<UserRegistrationProps> = z
  .object({
    type: z.string().min(1),
    fullname: z
      .string()
      .min(4, { message: 'Seu nome completo deve ter mais que 4 caracteres' }),
    email: z.string().email(),
    confirmEmail: z.string().email(),
    password: z
      .string()
      .min(8, { message: 'Sua senha deve ter no minimo 8 caracteres' })
      .max(64, { message: 'Sua senha não pode ter mais que 64 caracteres' })
      .refine(
        (value) => /^[a-zA-Z0-9_.-]*$/.test(value ?? ''),
        'A senha só pode conter apenas letras e numeros'
      ),
    confirmPassword: z.string(),
    otp: z.string().min(6, { message: 'Digite um código com 6 digitos' }),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: 'As senhas não são iguais',
    path: ['confirmPassword'],
  })
  .refine((schema) => schema.email === schema.confirmPassword, {
    message: 'Seu email não estão combinandos',
    path: ['confirmEmail'],
  });
