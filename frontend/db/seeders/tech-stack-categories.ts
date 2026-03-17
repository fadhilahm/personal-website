import type { MySql2Database } from 'drizzle-orm/mysql2';

import { techStackCategories } from '../schema';

export async function seedTechStackCategories(db: MySql2Database) {
  await db.insert(techStackCategories).values([
    { englishName: 'Programming Language' },
    { englishName: 'Database' },
    { englishName: 'Framework / Libraries' },
    { englishName: 'Cloud and DevOps' },
    { englishName: 'Others' },
  ]);
}
