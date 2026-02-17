import type { MySql2Database } from 'drizzle-orm/mysql2';

import { employmentTypes } from '../schema';

export async function seedEmploymentTypes(db: MySql2Database) {
  await db.insert(employmentTypes).values([
    { englishName: 'Full-time' },
    { englishName: 'Contract' },
    { englishName: 'Part-time' },
  ]);
}
