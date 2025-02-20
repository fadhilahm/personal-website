export const enum Locale {
    ENGLISH = "en",
    INDONESIAN = "id",
    JAPANESE = "ja",
}

export const LOCALES = [Locale.ENGLISH, Locale.INDONESIAN, Locale.JAPANESE] as const;

export const DEFAULT_LOCALE = Locale.ENGLISH;

export const LANGUAGE_NAMES = {
    [Locale.ENGLISH]: 'English',
    [Locale.JAPANESE]: '日本語',
    [Locale.INDONESIAN]: 'Bahasa Indonesia',
} as const;
  