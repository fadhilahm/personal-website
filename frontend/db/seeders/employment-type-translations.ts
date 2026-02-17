import type { MySql2Database } from 'drizzle-orm/mysql2';

import { employmentTypeTranslations } from '../schema';

export async function seedEmploymentTypeTranslations(db: MySql2Database) {
  await db.insert(employmentTypeTranslations).values([
    { employmentTypeId: 1, localeId: 1, name: 'Full-time' },
    { employmentTypeId: 2, localeId: 1, name: 'Contract' },
    { employmentTypeId: 3, localeId: 1, name: 'Part-time' },
    { employmentTypeId: 1, localeId: 2, name: '正社員' },
    { employmentTypeId: 2, localeId: 2, name: '契約' },
    { employmentTypeId: 3, localeId: 2, name: 'パートタイム' },
  ]);
}
