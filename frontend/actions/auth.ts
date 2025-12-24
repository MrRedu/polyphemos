'use server';
import { z } from 'zod';

import { SignUpFormSchema, type FormState } from '@/validations/auth';
import { registerUserService } from '@/lib/strapi';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const cookieConfig = {
  maxAge: 60 * 60 * 24 * 7, // 1 week
  path: '/',
  httpOnly: true,
  domain: process.env.HOST ?? 'localhost',
  secure: process.env.NODE_ENV === 'production',
};

export async function registerUserAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const fields = {
    username: formData.get('username') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    confirmPassword: formData.get('confirmPassword') as string,
  };

  const validatedFields = SignUpFormSchema.safeParse(fields);

  if (!validatedFields.success) {
    const flattenedErrors = z.flattenError(validatedFields.error);

    // console.log(flattenedErrors);
    return {
      success: false,
      message: 'Validation failed',
      apiErrors: null,
      zodErrors: flattenedErrors.fieldErrors,
      data: {
        ...prevState.data,
        ...fields,
      },
    };
  }

  // console.log('Validation successful');

  const response = await registerUserService(validatedFields.data);
  // console.log(response, 'response');
  if (!response || response.error) {
    return {
      success: false,
      message: 'Registration failed',
      apiErrors: response?.error,
      zodErrors: null,
      data: {
        ...prevState.data,
        ...fields,
      },
    };
  }

  const cookieStore = await cookies();
  cookieStore.set('jwt', response.jwt, cookieConfig);
  redirect('/dashboard');
}
