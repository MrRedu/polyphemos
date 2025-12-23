'use client';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export const SignInForm = () => {
  return (
    <>
      <div className="flex w-full max-w-sm min-w-sm flex-col items-center gap-y-4 rounded-lg border px-6 py-12 bg-white dark:bg-black/30 dark:backdrop-blur-lg">
        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input placeholder="Email" required type="email" id="email" />
        </div>
        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <Button type="submit">Sign in</Button>
      </div>
      <div className="flex justify-center gap-1 text-sm text-muted-foreground">
        <p>Need an account?</p>
        <Link
          href="/sign-up"
          className="font-medium text-primary hover:underline"
        >
          Sign up
        </Link>
      </div>
    </>
  );
};
