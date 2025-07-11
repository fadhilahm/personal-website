import { DEFAULT_LOCALE, LOCALES, Locale } from '../constants/i18n';
import enMessages from '../messages/en.json';
import idMessages from '../messages/id.json';
import jaMessages from '../messages/ja.json';

const nextIntlConfig = {
  locale: DEFAULT_LOCALE,
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  messagesByLocale: {
    [Locale.English]: enMessages,
    [Locale.Indonesian]: idMessages,
    [Locale.Japanese]: jaMessages,
  },
};

export default nextIntlConfig;