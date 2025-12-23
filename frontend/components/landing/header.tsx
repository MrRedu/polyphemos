import { Sun } from 'lucide-react';
import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <div
        className="fixed z-50 rounded-r-full top-3 left-0 flex items-center justify-between gap-6 py-6 px-8 
        shadow-xs bg-white
        font-serif font-bold "
      >
        <Link href={'/'}>
          <h1>Polyphemos</h1>
        </Link>
      </div>
      <div
        className="fixed z-50 rounded-l-full top-3 right-0
        flex items-center justify-between gap-6 py-6 px-8 
        shadow-xs bg-white"
      >
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href={'#'}>Desarrollo</Link>
            </li>
            <li>
              <Link href={'#'}>Diseño</Link>
            </li>
            <li>
              <Link href={'#'}>IA</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Sun />
        </div>
        <div>
          <Link href={'#'} className="underline">
            ES
          </Link>
          <span>{' / '}</span>
          <Link href={'#'}>EN</Link>
        </div>
      </div>
    </header>
  );
};
