import { Header } from '@/components/landing/header';

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
