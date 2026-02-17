import type { MySql2Database } from 'drizzle-orm/mysql2';

import { techStackCategoryTranslations } from '../schema';

export async function seedTechStackCategoryTranslations(db: MySql2Database) {
  await db.insert(techStackCategoryTranslations).values([
    { techStackCategoryId: 1, localeId: 1, name: 'Programming Language' },
    { techStackCategoryId: 2, localeId: 1, name: 'Database' },
    { techStackCategoryId: 3, localeId: 1, name: 'Framework / Libraries' },
    { techStackCategoryId: 4, localeId: 1, name: 'Cloud and DevOps' },
    { techStackCategoryId: 5, localeId: 1, name: 'Others' },
    { techStackCategoryId: 1, localeId: 2, name: 'プログラミング言語' },
    { techStackCategoryId: 2, localeId: 2, name: 'データベース' },
    { techStackCategoryId: 3, localeId: 2, name: 'フレームワーク / ライブラリ' },
    { techStackCategoryId: 4, localeId: 2, name: 'クラウド・DevOps' },
    { techStackCategoryId: 5, localeId: 2, name: 'その他' },
    { techStackCategoryId: 1, localeId: 3, name: 'Bahasa Pemrograman' },
    { techStackCategoryId: 2, localeId: 3, name: 'Basis Data' },
    { techStackCategoryId: 3, localeId: 3, name: 'Framework / Pustaka' },
    { techStackCategoryId: 4, localeId: 3, name: 'Cloud dan DevOps' },
    { techStackCategoryId: 5, localeId: 3, name: 'Lainnya' },
  ]);
}
