import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-[#d01216] fixed z-50 inset-x-0 p-6 flex justify-between px-8">
      <span className="hidden md:block font-serif font-bold text-lg my-auto">
        Polyphemos
      </span>
      <nav>
        <Link href={'/'}>
          <Image
            src="/polyphemos.png"
            alt="Polyphemos"
            width={64}
            height={64}
            quality={100}
            priority
          />
        </Link>
      </nav>
      <div className="font-bold space-x-4">
        <Link href={'#'} className="underline">
          ES
        </Link>

        <Link href={'#'}>EN</Link>
      </div>
    </header>
  );
};
