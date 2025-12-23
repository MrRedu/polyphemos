import { Header, Footer } from '@/components/landing';

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
