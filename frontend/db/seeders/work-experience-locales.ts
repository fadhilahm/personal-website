import type { MySql2Database } from 'drizzle-orm/mysql2';

import { workExperienceLocales } from '../schema';

export async function seedWorkExperienceLocales(db: MySql2Database) {
  await db.insert(workExperienceLocales).values([
    { workExperienceId: 1, localeId: 2 },
    { workExperienceId: 2, localeId: 1 },
    { workExperienceId: 2, localeId: 2 },
    { workExperienceId: 3, localeId: 3 },
    { workExperienceId: 4, localeId: 3 },
    { workExperienceId: 5, localeId: 3 },
    { workExperienceId: 6, localeId: 2 },
  ]);
}
