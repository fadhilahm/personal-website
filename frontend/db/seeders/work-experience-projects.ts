import type { MySql2Database } from 'drizzle-orm/mysql2';

import { workExperienceProjects } from '../schema';

export async function seedWorkExperienceProjects(db: MySql2Database) {
  await db.insert(workExperienceProjects).values([
    { workExperienceId: 1, projectId: 1 },
    { workExperienceId: 1, projectId: 2 },
    { workExperienceId: 1, projectId: 3 },
    { workExperienceId: 2, projectId: 10 },
    { workExperienceId: 3, projectId: 7 },
    { workExperienceId: 4, projectId: 8 },
    { workExperienceId: 5, projectId: 9 },
    { workExperienceId: 6, projectId: 4 },
    { workExperienceId: 6, projectId: 5 },
    { workExperienceId: 6, projectId: 6 },
  ]);
}
