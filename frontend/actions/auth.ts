'use server';
import { z } from 'zod';

import { SignUpFormSchema, type FormState } from '@/validations/auth';
import { registerUserService } from '@/lib/strapi';

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

    console.log(flattenedErrors);
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

  console.log('Validation successful');

  const response = await registerUserService(validatedFields.data);
  console.log(response, 'response');
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

  console.log('Registration successful');

  return {
    success: true,
    message: 'Validation successful',
    apiErrors: null,
    zodErrors: null,
    data: {
      ...prevState.data,
      ...fields,
    },
  };
}
