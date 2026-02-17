import {
  mysqlTable,
  int,
  varchar,
  text,
  boolean,
  date,
} from 'drizzle-orm/mysql-core';

// ─── Base tables (no foreign keys) ───────────────────────────────────────────

export const locales = mysqlTable('locales', {
  id: int('id').primaryKey().autoincrement(),
  englishName: varchar('english_name', { length: 255 }),
  localizedName: varchar('localized_name', { length: 255 }),
  code: varchar('code', { length: 50 }),
});

export const techStackCategories = mysqlTable('tech_stack_categories', {
  id: int('id').primaryKey().autoincrement(),
  englishName: varchar('english_name', { length: 255 }),
});

export const companies = mysqlTable('companies', {
  id: int('id').primaryKey().autoincrement(),
  englishName: varchar('english_name', { length: 255 }),
});

export const locations = mysqlTable('locations', {
  id: int('id').primaryKey().autoincrement(),
  englishCountry: varchar('english_country', { length: 255 }),
  englishProvince: varchar('english_province', { length: 255 }),
  englishCity: varchar('english_city', { length: 255 }),
});

export const workModes = mysqlTable('work_modes', {
  id: int('id').primaryKey().autoincrement(),
  englishName: varchar('english_name', { length: 255 }),
});

export const projects = mysqlTable('projects', {
  id: int('id').primaryKey().autoincrement(),
  englishName: varchar('english_name', { length: 255 }),
  isPersonal: boolean('is_personal'),
});

export const employmentTypes = mysqlTable('employment_types', {
  id: int('id').primaryKey().autoincrement(),
  englishName: varchar('english_name', { length: 255 }),
});

// ─── Tables with single FK (depend on base) ────────────────────────────────────

export const techStacks = mysqlTable('tech_stacks', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }),
  imageUrl: varchar('image_url', { length: 500 }),
  imageUrlAlt: varchar('image_url_alt', { length: 500 }),
  techStackCategoryId: int('tech_stack_category_id').references(
    () => techStackCategories.id
  ),
});

// ─── Translation tables (depend on base + locales) ────────────────────────────

export const techStackCategoryTranslations = mysqlTable(
  'tech_stack_category_translations',
  {
    id: int('id').primaryKey().autoincrement(),
    techStackCategoryId: int('tech_stack_category_id').references(
      () => techStackCategories.id
    ),
    localeId: int('locale_id').references(() => locales.id),
    name: varchar('name', { length: 255 }),
  }
);

export const companyTranslations = mysqlTable('company_translations', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }),
  description: text('description'),
  localeId: int('locale_id').references(() => locales.id),
  companyId: int('company_id').references(() => companies.id),
});

export const locationTranslations = mysqlTable('location_translations', {
  id: int('id').primaryKey().autoincrement(),
  country: varchar('country', { length: 255 }),
  province: varchar('province', { length: 255 }),
  city: varchar('city', { length: 255 }),
  locationId: int('location_id').references(() => locations.id),
  localeId: int('locale_id').references(() => locales.id),
});

export const workModeTranslations = mysqlTable('work_mode_translations', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }),
  workModeId: int('work_mode_id').references(() => workModes.id),
  localeId: int('locale_id').references(() => locales.id),
});

export const projectTranslations = mysqlTable('project_translations', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }),
  description: text('description'),
  projectId: int('project_id').references(() => projects.id),
  localeId: int('locale_id').references(() => locales.id),
});

export const employmentTypeTranslations = mysqlTable(
  'employment_type_translations',
  {
    id: int('id').primaryKey().autoincrement(),
    name: varchar('name', { length: 255 }),
    employmentTypeId: int('employment_type_id').references(
      () => employmentTypes.id
    ),
    localeId: int('locale_id').references(() => locales.id),
  }
);

// ─── Work experiences (depends on companies, employment_types, work_modes) ────

export const workExperiences = mysqlTable('work_experiences', {
  id: int('id').primaryKey().autoincrement(),
  companyId: int('company_id').references(() => companies.id),
  startDate: date('start_date'),
  endDate: date('end_date'),
  employmentTypeId: int('employment_type_id').references(
    () => employmentTypes.id
  ),
  workModeId: int('work_mode_id').references(() => workModes.id),
});

export const workExperienceTranslations = mysqlTable(
  'work_experience_translations',
  {
    id: int('id').primaryKey().autoincrement(),
    positionTitle: varchar('position_title', { length: 255 }),
    description: text('description'),
    workExperienceId: int('work_experience_id').references(
      () => workExperiences.id
    ),
    localeId: int('locale_id').references(() => locales.id),
  }
);

// ─── Junction tables ────────────────────────────────────────────────────────

export const projectTechStacks = mysqlTable('project_tech_stacks', {
  id: int('id').primaryKey().autoincrement(),
  projectId: int('project_id').references(() => projects.id),
  techStackId: int('tech_stack_id').references(() => techStacks.id),
});

export const workExperienceTechStacks = mysqlTable(
  'work_experience_tech_stacks',
  {
    id: int('id').primaryKey().autoincrement(),
    workExperienceId: int('work_experience_id').references(
      () => workExperiences.id
    ),
    techStackId: int('tech_stack_id').references(() => techStacks.id),
  }
);

export const workExperienceProjects = mysqlTable('work_experience_projects', {
  id: int('id').primaryKey().autoincrement(),
  workExperienceId: int('work_experience_id').references(
    () => workExperiences.id
  ),
  projectId: int('project_id').references(() => projects.id),
});

export const workExperienceLocations = mysqlTable('work_experience_locations', {
  id: int('id').primaryKey().autoincrement(),
  workExperienceId: int('work_experience_id').references(
    () => workExperiences.id
  ),
  locationId: int('location_id').references(() => locations.id),
});

export const workExperienceLocales = mysqlTable('work_experience_locales', {
  id: int('id').primaryKey().autoincrement(),
  workExperienceId: int('work_experience_id').references(
    () => workExperiences.id
  ),
  localeId: int('locale_id').references(() => locales.id),
});
