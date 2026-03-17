import type { MySql2Database } from 'drizzle-orm/mysql2';

import { workModeTranslations } from '../schema';

export async function seedWorkModeTranslations(db: MySql2Database) {
  await db.insert(workModeTranslations).values([
    { workModeId: 1, localeId: 1, name: 'On-site' },
    { workModeId: 2, localeId: 1, name: 'Remote' },
    { workModeId: 3, localeId: 1, name: 'Hybrid' },
    { workModeId: 1, localeId: 2, name: '出勤' },
    { workModeId: 2, localeId: 2, name: 'リモート' },
    { workModeId: 3, localeId: 2, name: 'ハイブリッド' },
    { workModeId: 1, localeId: 3, name: 'Di kantor' },
    { workModeId: 2, localeId: 3, name: 'Remote' },
    { workModeId: 3, localeId: 3, name: 'Hibrida' },
  ]);
}
