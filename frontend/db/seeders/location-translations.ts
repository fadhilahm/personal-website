import type { MySql2Database } from 'drizzle-orm/mysql2';

import { locationTranslations } from '../schema';

export async function seedLocationTranslations(db: MySql2Database) {
  await db.insert(locationTranslations).values([
    { locationId: 1, localeId: 1, country: 'Japan', province: 'Osaka', city: 'Osaka' },
    { locationId: 2, localeId: 1, country: 'Japan', province: 'Aichi', city: 'Nagoya' },
    { locationId: 3, localeId: 1, country: 'Indonesia', province: 'Jakarta', city: 'Jakarta' },
    { locationId: 4, localeId: 1, country: 'Indonesia', province: 'West Java', city: 'Bandung' },
    { locationId: 1, localeId: 2, country: '日本', province: '大阪府', city: '大阪' },
    { locationId: 2, localeId: 2, country: '日本', province: '愛知県', city: '名古屋' },
    {
      locationId: 3,
      localeId: 2,
      country: 'インドネシア',
      province: 'ジャカルタ',
      city: 'ジャカルタ',
    },
    { locationId: 4, localeId: 2, country: 'インドネシア', province: '西ジャワ', city: 'バンドン' },
  ]);
}
