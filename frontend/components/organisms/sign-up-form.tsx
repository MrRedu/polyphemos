'use client';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

import { actions } from '@/actions';
import { useActionState } from 'react';
import { type FormState } from '@/validations/auth';
import { FormError } from '../atoms/form-error';

const INITIAL_STATE: FormState = {
  success: undefined,
  message: undefined,
  apiErrors: null,
  zodErrors: null,
  data: {
    username: '',
    email: '',
    password: '',
  },
};

export const SignUpForm = () => {
  const [formState, formAction] = useActionState(
    actions.auth.registerUser,
    INITIAL_STATE
  );

  return (
    <>
      <form
        action={formAction}
        className="flex w-full max-w-sm min-w-sm flex-col items-center gap-y-4 rounded-lg border px-6 py-12 bg-white dark:bg-black/30 dark:backdrop-blur-lg"
      >
        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="username">Username</Label>
          <Input
            placeholder="Username"
            required
            type="text"
            id="username"
            name="username"
            defaultValue={formState.data?.username}
          />
          <FormError error={formState.zodErrors?.username} />
        </div>
        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            placeholder="Email"
            required
            type="email"
            id="email"
            name="email"
            defaultValue={formState.data?.email}
          />
          <FormError error={formState.zodErrors?.email} />
        </div>
        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="Password"
            type="password"
            name="password"
            required
            defaultValue={formState.data?.password}
          />
          <FormError error={formState.zodErrors?.password} />
        </div>
        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            placeholder="Password"
            type="password"
            name="confirmPassword"
            defaultValue={formState.data?.confirmPassword}
            required
          />
          <FormError error={formState.zodErrors?.confirmPassword} />
        </div>
        <Button type="submit">Create Account</Button>
      </form>
      <div className="flex justify-center gap-1 text-sm text-muted-foreground">
        <p>Already a user?</p>
        <Link
          href="/sign-in"
          className="font-medium text-primary hover:underline"
        >
          Sign in
        </Link>
      </div>
    </>
  );
};
