import type { MySql2Database } from 'drizzle-orm/mysql2';

import { companies } from '../schema';

export async function seedCompanies(db: MySql2Database) {
  await db.insert(companies).values([
    { englishName: 'e-dash' },
    { englishName: 'Universal Studios Japan (via Allegis Group Japan K.K.)' },
    { englishName: 'PT LAPI ITB' },
    { englishName: 'GADA ENERGI ITB' },
    { englishName: 'PT. Solusi Layanan Digital (Help)' },
    { englishName: 'Traffic Sim Co., Ltd' },
  ]);
}
