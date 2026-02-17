import type { MySql2Database } from 'drizzle-orm/mysql2';

import { workModes } from '../schema';

export async function seedWorkModes(db: MySql2Database) {
  await db.insert(workModes).values([
    { englishName: 'On-site' },
    { englishName: 'Remote' },
    { englishName: 'Hybrid' },
  ]);
}
