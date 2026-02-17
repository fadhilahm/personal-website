import type { MySql2Database } from 'drizzle-orm/mysql2';

import { workExperienceLocations } from '../schema';

export async function seedWorkExperienceLocations(db: MySql2Database) {
  await db.insert(workExperienceLocations).values([
    { workExperienceId: 1, locationId: 1 },
    { workExperienceId: 2, locationId: 1 },
    { workExperienceId: 3, locationId: 4 },
    { workExperienceId: 4, locationId: 4 },
    { workExperienceId: 5, locationId: 3 },
    { workExperienceId: 6, locationId: 2 },
  ]);
}
