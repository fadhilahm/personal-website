import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

import { DEFAULT_LOCALE, LOCALES } from "@constants/i18n";

export const routing = defineRouting({
    defaultLocale: DEFAULT_LOCALE,
    locales: LOCALES,
});

export const { redirect, usePathname, useRouter } = createNavigation({
    locales: LOCALES,
    defaultLocale: DEFAULT_LOCALE,
});
