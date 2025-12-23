// interface SignUpPageProps {}

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Typography } from '@/components/ui/typography';
import Link from 'next/link';

export default function SignUpPage() {
  // props: SignUpPageProps
  return (
    <div className="my-auto flex w-full justify-center">
      <section className="h-screen w-full">
        <div className="flex h-full items-center justify-center">
          <div className="flex flex-col items-center gap-6 lg:justify-start">
            <Link href="/">
              {/* <img
                alt="logo"
                title=""
                className="h-10 dark:invert"
                src=""
              /> */}
              <Typography variant="h1">Polyphemos</Typography>
            </Link>
            <div className="flex w-full max-w-sm min-w-sm flex-col items-center gap-y-4 rounded-lg border px-6 py-12 bg-white">
              <div className="flex w-full flex-col gap-2">
                <Label>Email</Label>
                <Input placeholder="Email" required type="email" />
              </div>
              <div className="flex w-full flex-col gap-2">
                <Label>Password</Label>
                <Input placeholder="Password" type="password" required />
              </div>
              <div className="flex w-full flex-col gap-2">
                <Label>Confirm Password</Label>
                <Input placeholder="Password" required type="password" />
              </div>
              <Button type="submit">Create Account</Button>
            </div>
            <div className="flex justify-center gap-1 text-sm text-muted-foreground">
              <p>Already a user?</p>
              <Link
                href="/sign-in"
                className="font-medium text-primary hover:underline"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
