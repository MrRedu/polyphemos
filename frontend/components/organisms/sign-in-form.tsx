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

export const SignInForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form>
          <FieldGroup>
            <Field className="flex w-full flex-col gap-2">
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                placeholder="m@example.com"
                required
                type="email"
                id="email"
              />
              {/* <FormError error={formState.zodErrors?.<x>} /> */}
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
              <Input id="password" type="password" required />
              {/* <FormError error={formState.zodErrors?.<x>} /> */}
            </Field>

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
