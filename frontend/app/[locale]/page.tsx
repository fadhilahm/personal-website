import { useTranslations } from 'next-intl';

import Contribution from '@components/features/Contribution';
import LanguageSwitcher from '@components/features/i18n/LanguageSwitcher';

export const metadata = {
  title: 'Under Construction',
  description:
    'I&apos;m currently crafting my portfolio to showcase my work. Stay tuned for an exciting collection of projects and experiences!',
};

export default function Home() {
  const t = useTranslations('page.home');

  return (
    <main className="min-h-screen flex items-center justify-center bg-base-200 bg-[url('/grid.png')] bg-repeat p-4">
      <div className="relative w-full max-w-[320px] sm:max-w-[540px] lg:max-w-[720px] text-center space-y-8 p-6 sm:p-12 bg-base-100/90 rounded-xl border-4 border-primary shadow-2xl backdrop-blur-sm">
        <div className="absolute top-4 right-4">
          <LanguageSwitcher />
        </div>

        <div className="w-full max-w-[280px] sm:max-w-[480px] lg:max-w-[640px] mx-auto">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-4">
            {t('contributions')}
          </h2>
          <div className="bg-base-100 p-4 rounded-lg shadow-lg">
            <Contribution />
          </div>
        </div>
      </div>
    </main>
  );
}
