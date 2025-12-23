import { SignUpForm } from '@/components/organisms/sign-up-form';
import { Typography } from '@/components/ui/typography';
import Link from 'next/link';

export default function SignUpPage() {
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
            <SignUpForm />
          </div>
        </div>
      </section>
    </div>
  );
}
