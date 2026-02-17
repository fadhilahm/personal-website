import type { MySql2Database } from 'drizzle-orm/mysql2';

import { locations } from '../schema';

export async function seedLocations(db: MySql2Database) {
  await db.insert(locations).values([
    { englishCountry: 'Japan', englishProvince: 'Osaka-fu', englishCity: 'Osaka' },
    { englishCountry: 'Japan', englishProvince: 'Aichi-ken', englishCity: 'Nagoya' },
    { englishCountry: 'Indonesia', englishProvince: 'Jakarta', englishCity: 'Jakarta' },
    { englishCountry: 'Indonesia', englishProvince: 'West Java', englishCity: 'Bandung' },
  ]);
}
