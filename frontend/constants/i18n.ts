export const enum Locale {
    ENGLISH = "en",
    INDONESIAN = "id",
    JAPANESE = "ja",
}

export const LOCALES = [Locale.ENGLISH, Locale.INDONESIAN, Locale.JAPANESE] as const;

export const DEFAULT_LOCALE = Locale.ENGLISH;
