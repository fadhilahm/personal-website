import type { MySql2Database } from 'drizzle-orm/mysql2';

import { projectTechStacks } from '../schema';

export async function seedProjectTechStacks(db: MySql2Database) {
  await db.insert(projectTechStacks).values([
    { projectId: 1, techStackId: 3 },
    { projectId: 1, techStackId: 7 },
    { projectId: 1, techStackId: 16 },
    { projectId: 2, techStackId: 7 },
    { projectId: 2, techStackId: 16 },
    { projectId: 3, techStackId: 3 },
    { projectId: 3, techStackId: 7 },
    { projectId: 3, techStackId: 16 },
    { projectId: 3, techStackId: 21 },
    { projectId: 4, techStackId: 3 },
    { projectId: 4, techStackId: 7 },
    { projectId: 4, techStackId: 16 },
    { projectId: 4, techStackId: 17 },
    { projectId: 4, techStackId: 18 },
    { projectId: 5, techStackId: 2 },
    { projectId: 5, techStackId: 5 },
    { projectId: 5, techStackId: 9 },
    { projectId: 5, techStackId: 16 },
    { projectId: 6, techStackId: 21 },
    { projectId: 7, techStackId: 4 },
    { projectId: 8, techStackId: 4 },
    { projectId: 9, techStackId: 5 },
    { projectId: 9, techStackId: 16 },
    { projectId: 10, techStackId: 2 },
    { projectId: 10, techStackId: 5 },
    { projectId: 10, techStackId: 15 },
  ]);
}
