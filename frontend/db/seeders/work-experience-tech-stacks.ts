import type { MySql2Database } from 'drizzle-orm/mysql2';

import { workExperienceTechStacks } from '../schema';

export async function seedWorkExperienceTechStacks(db: MySql2Database) {
  await db.insert(workExperienceTechStacks).values([
    { workExperienceId: 1, techStackId: 3 },
    { workExperienceId: 1, techStackId: 7 },
    { workExperienceId: 1, techStackId: 16 },
    { workExperienceId: 1, techStackId: 21 },
    { workExperienceId: 2, techStackId: 2 },
    { workExperienceId: 2, techStackId: 5 },
    { workExperienceId: 2, techStackId: 15 },
    { workExperienceId: 3, techStackId: 4 },
    { workExperienceId: 4, techStackId: 4 },
    { workExperienceId: 5, techStackId: 5 },
    { workExperienceId: 5, techStackId: 16 },
    { workExperienceId: 6, techStackId: 3 },
    { workExperienceId: 6, techStackId: 7 },
    { workExperienceId: 6, techStackId: 9 },
    { workExperienceId: 6, techStackId: 5 },
    { workExperienceId: 6, techStackId: 10 },
    { workExperienceId: 6, techStackId: 16 },
    { workExperienceId: 6, techStackId: 17 },
    { workExperienceId: 6, techStackId: 18 },
    { workExperienceId: 6, techStackId: 21 },
  ]);
}
