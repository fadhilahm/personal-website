'use client';

import { useLocale } from 'next-intl';

import { useRouter, usePathname } from '@/i18n/routing';
import { Locale, LANGUAGE_NAMES } from '@constants/i18n';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as Locale;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <select onChange={handleChange} value={locale} className="select select-warning select-sm text-white">
      {Object.entries(LANGUAGE_NAMES).map(([code, name]) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </select>
  );
}
