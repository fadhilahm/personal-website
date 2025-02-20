export const enum Locale {
    English = "en",
    Indonesian = "id",
    Japanese = "ja",
}

export const LOCALES = [Locale.English, Locale.Indonesian, Locale.Japanese] as const;

export const DEFAULT_LOCALE = Locale.English;

export const LANGUAGE_NAMES = {
    [Locale.English]: 'English',
    [Locale.Japanese]: '日本語',
    [Locale.Indonesian]: 'Bahasa Indonesia',
} as const;
  