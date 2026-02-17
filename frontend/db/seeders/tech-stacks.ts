import type { MySql2Database } from 'drizzle-orm/mysql2';

import { techStacks } from '../schema';

export async function seedTechStacks(db: MySql2Database) {
  await db.insert(techStacks).values([
    { name: 'JavaScript', techStackCategoryId: 1 },
    { name: 'TypeScript', techStackCategoryId: 1 },
    { name: 'Go', techStackCategoryId: 1 },
    { name: 'Python', techStackCategoryId: 1 },
    { name: 'Node.js', techStackCategoryId: 3 },
    { name: 'React', techStackCategoryId: 3 },
    { name: 'Next.js', techStackCategoryId: 3 },
    { name: 'Vue.js', techStackCategoryId: 3 },
    { name: 'Nuxt', techStackCategoryId: 3 },
    { name: 'Express', techStackCategoryId: 3 },
    { name: 'PostgreSQL', techStackCategoryId: 2 },
    { name: 'MySQL', techStackCategoryId: 2 },
    { name: 'MongoDB', techStackCategoryId: 2 },
    { name: 'Redis', techStackCategoryId: 2 },
    { name: 'Elasticsearch', techStackCategoryId: 2 },
    { name: 'AWS', techStackCategoryId: 4 },
    { name: 'Terraform', techStackCategoryId: 4 },
    { name: 'Docker', techStackCategoryId: 4 },
    { name: 'Kubernetes', techStackCategoryId: 4 },
    { name: 'GitHub Actions', techStackCategoryId: 4 },
    { name: 'Auth0', techStackCategoryId: 5 },
  ]);
}
