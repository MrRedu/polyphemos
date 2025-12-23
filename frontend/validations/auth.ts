import { z } from 'zod';

// export const SignInFormSchema = z.object({
//   email: z.string().email(),
//   password: z.string().min(8),
// });

export const SignUpFormSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: 'Username must be at least 3 characters' })
      .max(20, { message: 'Username must be at most 20 characters' })
      .regex(/^[a-zA-Z0-9_]+$/, {
        message: 'Username must not contain special characters',
      }),
    email: z.email('Please enter a valid email address'),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' })
      .max(100, { message: 'Password must be at most 100 characters' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type SignUpFormValues = z.infer<typeof SignUpFormSchema>;
// export type signInSchema = z.infer<typeof SignInFormSchema>;

export type FormState = {
  success?: boolean;
  message?: string;
  data?: {
    identifier?: string;
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  };
  apiErrors?: {
    status: number;
    name: string;
    message: string;
    details?: Record<string, string[]>;
  } | null;
  zodErrors?: {
    identifier?: string[];
    username?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  } | null;
};
