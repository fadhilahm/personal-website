import type { MySql2Database } from 'drizzle-orm/mysql2';

import { projects } from '../schema';

export async function seedProjects(db: MySql2Database) {
  await db.insert(projects).values([
    { englishName: 'E-dash', isPersonal: false },
    { englishName: 'Cosmos', isPersonal: false },
    { englishName: 'OIDC Authentication Service (e-dash)', isPersonal: false },
    { englishName: 'Electric Current Monitoring Service', isPersonal: false },
    { englishName: 'Stream Monitoring Service', isPersonal: false },
    { englishName: 'OIDC Authentication Service (Traffic Sim)', isPersonal: false },
    { englishName: 'Chemical Huff and Puff Module', isPersonal: false },
    { englishName: 'Machine Learning for Oil & Gas', isPersonal: false },
    { englishName: 'Help - Delivery Aggregation App', isPersonal: false },
    { englishName: 'Microservices Team (USJ)', isPersonal: false },
  ]);
}
