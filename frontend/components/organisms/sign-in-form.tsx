'use client';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Field, FieldGroup, FieldLabel } from '../ui/field';
import { actions } from '@/actions';
import { useActionState } from 'react';
import { FormError } from '../atoms/form-error';

const INITIAL_STATE = {
  success: undefined,
  message: undefined,
  apiErrors: null,
  zodErrors: null,
  data: {
    identifier: '',
    password: '',
  },
};

export const SignInForm = () => {
  const [formState, formAction] = useActionState(
    actions.auth.loginUser,
    INITIAL_STATE
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form action={formAction}>
          <FieldGroup>
            <Field className="flex w-full flex-col gap-2">
              <FieldLabel htmlFor="identifier">Email or Username</FieldLabel>
              <Input
                placeholder=""
                required
                type="text"
                id="identifier"
                name="identifier"
                defaultValue={formState.data?.identifier}
              />
              <FormError error={formState.zodErrors?.identifier} />
            </Field>
            <Field className="flex w-full flex-col gap-2">
              {/* <FieldLabel htmlFor="password">Password</FieldLabel> */}
              <div className="flex items-center">
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required name="password" />
              <FormError error={formState.zodErrors?.password} />
            </Field>
            {formState.apiErrors && (
              <div className="text-red-500 text-xs py-2">
                {formState.apiErrors.message}
              </div>
            )}
            <FieldGroup>
              <Button type="submit" className="w-full">
                Sign in
              </Button>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
};
