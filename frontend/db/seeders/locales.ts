import type { MySql2Database } from 'drizzle-orm/mysql2';

import { locales } from '../schema';

export async function seedLocales(db: MySql2Database) {
  await db.insert(locales).values([
    { englishName: 'English', localizedName: 'English', code: 'en' },
    { englishName: 'Japanese', localizedName: '日本語', code: 'ja' },
    { englishName: 'Indonesian', localizedName: 'Bahasa Indonesia', code: 'id' },
  ]);
}
