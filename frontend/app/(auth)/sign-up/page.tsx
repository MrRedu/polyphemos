import { SignUpForm } from '@/components/organisms/sign-up-form';
import { Typography } from '@/components/ui/typography';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <section className="flex flex-col gap-4 min-h-svh w-full items-center justify-center p-6 md:p-10 mt-16">
      <Link href="/">
        <Typography variant="h1">Polyphemos</Typography>
      </Link>

      <div className="w-full max-w-md">
        <SignUpForm />
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
    </section>
  );
}
