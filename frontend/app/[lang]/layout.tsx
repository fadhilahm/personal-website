import { TranslationProvider } from '@/providers/TranslationProvider';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TranslationProvider>
      {children}
    </TranslationProvider>
  );
} 