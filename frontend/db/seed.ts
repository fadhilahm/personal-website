/**
 * Seed script based on CV - Fadhilah Metra
 * Run: make seed (from frontend/db) or npx tsx db/seed.ts (from frontend)
 */
import 'dotenv/config';

import {
  seedCompanies,
  seedCompanyTranslations,
  seedEmploymentTypeTranslations,
  seedEmploymentTypes,
  seedLocales,
  seedLocationTranslations,
  seedLocations,
  seedProjectTechStacks,
  seedProjectTranslations,
  seedProjects,
  seedTechStackCategories,
  seedTechStackCategoryTranslations,
  seedTechStacks,
  seedWorkExperienceLocales,
  seedWorkExperienceLocations,
  seedWorkExperienceProjects,
  seedWorkExperienceTechStacks,
  seedWorkExperienceTranslations,
  seedWorkExperiences,
  seedWorkModeTranslations,
  seedWorkModes,
} from './seeders';

import { db } from './index';

async function runSeeder(
  name: string,
  fn: () => Promise<void>
): Promise<void> {
  console.log(`Seeding ${name}...`);
  try {
    await fn();
  } catch (err) {
    console.error(`Failed seeding ${name}:`, err);
    throw err;
  }
}

async function seed() {
  console.log('Seeding database...');

  await runSeeder('locales', () => seedLocales(db));
  await runSeeder('tech stack categories', () => seedTechStackCategories(db));
  await runSeeder('companies', () => seedCompanies(db));
  await runSeeder('locations', () => seedLocations(db));
  await runSeeder('work modes', () => seedWorkModes(db));
  await runSeeder('projects', () => seedProjects(db));
  await runSeeder('employment types', () => seedEmploymentTypes(db));
  await runSeeder('tech stacks', () => seedTechStacks(db));
  await runSeeder('company translations', () => seedCompanyTranslations(db));
  await runSeeder('location translations', () => seedLocationTranslations(db));
  await runSeeder('work mode translations', () => seedWorkModeTranslations(db));
  await runSeeder('employment type translations', () =>
    seedEmploymentTypeTranslations(db)
  );
  await runSeeder('work experiences', () => seedWorkExperiences(db));
  await runSeeder('work experience translations', () =>
    seedWorkExperienceTranslations(db)
  );
  await runSeeder('project translations', () => seedProjectTranslations(db));
  await runSeeder('tech stack category translations', () =>
    seedTechStackCategoryTranslations(db)
  );
  await runSeeder('work experience projects', () =>
    seedWorkExperienceProjects(db)
  );
  await runSeeder('work experience locations', () =>
    seedWorkExperienceLocations(db)
  );
  await runSeeder('work experience tech stacks', () =>
    seedWorkExperienceTechStacks(db)
  );
  await runSeeder('work experience locales', () =>
    seedWorkExperienceLocales(db)
  );
  await runSeeder('project tech stacks', () => seedProjectTechStacks(db));

  console.log('Seed complete.');
  process.exit(0);
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
