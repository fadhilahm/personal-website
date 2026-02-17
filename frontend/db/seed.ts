/**
 * Seed script based on CV - Fadhilah Metra
 * Run: make seed (from frontend/db) or npx tsx db/seed.ts (from frontend)
 */
import 'dotenv/config';

import {
  companies,
  companyTranslations,
  employmentTypeTranslations,
  employmentTypes,
  locales,
  locationTranslations,
  locations,
  projectTechStacks,
  projectTranslations,
  projects,
  techStackCategories,
  techStackCategoryTranslations,
  techStacks,
  workExperienceLocales,
  workExperienceLocations,
  workExperienceProjects,
  workExperienceTechStacks,
  workExperienceTranslations,
  workExperiences,
  workModeTranslations,
  workModes,
} from './schema';

import { db } from './index';

async function seed() {
  console.log('Seeding database...');

  // ─── 1. Locales ─────────────────────────────────────────────────────────
  await db.insert(locales).values([
    { englishName: 'English', localizedName: 'English', code: 'en' },
    { englishName: 'Japanese', localizedName: '日本語', code: 'ja' },
    { englishName: 'Indonesian', localizedName: 'Bahasa Indonesia', code: 'id' },
  ]);

  // ─── 2. Tech stack categories ─────────────────────────────────────────────
  await db.insert(techStackCategories).values([
    { englishName: 'Programming Language' },
    { englishName: 'Database' },
    { englishName: 'Framework / Libraries' },
    { englishName: 'Cloud and DevOps' },
    { englishName: 'Others' },
  ]);

  // ─── 3. Companies ───────────────────────────────────────────────────────
  await db.insert(companies).values([
    { englishName: 'e-dash' },
    { englishName: 'Universal Studios Japan (via Allegis Group Japan K.K.)' },
    { englishName: 'PT LAPI ITB' },
    { englishName: 'GADA ENERGI ITB' },
    { englishName: 'PT. Solusi Layanan Digital (Help)' },
    { englishName: 'Traffic Sim Co., Ltd' },
  ]);

  // ─── 4. Locations ─────────────────────────────────────────────────────────
  await db.insert(locations).values([
    { englishCountry: 'Japan', englishProvince: 'Osaka-fu', englishCity: 'Osaka' },
    { englishCountry: 'Japan', englishProvince: 'Aichi-ken', englishCity: 'Nagoya' },
    { englishCountry: 'Indonesia', englishProvince: 'Jakarta', englishCity: 'Jakarta' },
    { englishCountry: 'Indonesia', englishProvince: 'West Java', englishCity: 'Bandung' },
  ]);

  // ─── 5. Work modes ────────────────────────────────────────────────────────
  await db.insert(workModes).values([
    { englishName: 'On-site' },
    { englishName: 'Remote' },
    { englishName: 'Hybrid' },
  ]);

  // ─── 6. Projects ──────────────────────────────────────────────────────────
  await db.insert(projects).values([
    {
      englishName: 'E-dash',
      isPersonal: false,
    },
    {
      englishName: 'Cosmos',
      isPersonal: false,
    },
    {
      englishName: 'OIDC Authentication Service (e-dash)',
      isPersonal: false,
    },
    {
      englishName: 'Electric Current Monitoring Service',
      isPersonal: false,
    },
    {
      englishName: 'Stream Monitoring Service',
      isPersonal: false,
    },
    {
      englishName: 'OIDC Authentication Service (Traffic Sim)',
      isPersonal: false,
    },
    {
      englishName: 'Chemical Huff and Puff Module',
      isPersonal: false,
    },
    {
      englishName: 'Machine Learning for Oil & Gas',
      isPersonal: false,
    },
    {
      englishName: 'Help - Delivery Aggregation App',
      isPersonal: false,
    },
    {
      englishName: 'Microservices Team (USJ)',
      isPersonal: false,
    },
  ]);

  // ─── 7. Employment types ──────────────────────────────────────────────────
  await db.insert(employmentTypes).values([
    { englishName: 'Full-time' },
    { englishName: 'Contract' },
    { englishName: 'Part-time' },
  ]);

  // ─── 8. Tech stacks (categoryId: 1=Programming, 2=DB, 3=Framework, 4=Cloud, 5=Others) ─
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

  // ─── 9. Company translations (en) ───────────────────────────────────────────
  await db.insert(companyTranslations).values([
    {
      companyId: 1,
      localeId: 1,
      name: 'e-dash',
      description:
        'Environmental technology company backed by Mitsui & Co., providing cloud-based CO2 emissions tracking and decarbonization solutions for enterprises and municipalities.',
    },
    {
      companyId: 2,
      localeId: 1,
      name: 'Universal Studios Japan (via Allegis Group Japan K.K.)',
      description:
        'Digital technology company providing entertainment experiences and digital platform services for millions of global visitors.',
    },
    {
      companyId: 3,
      localeId: 1,
      name: 'PT LAPI ITB',
      description: 'Research company that works under the Indonesian government.',
    },
    {
      companyId: 4,
      localeId: 1,
      name: 'GADA ENERGI ITB',
      description:
        'Energy-focused research institute that works under Petroleum Engineering Major.',
    },
    {
      companyId: 5,
      localeId: 1,
      name: 'PT. Solusi Layanan Digital (Help)',
      description:
        'Startup that made an application to aggregate delivery services so users can send items using the cheapest delivery fee.',
    },
    {
      companyId: 6,
      localeId: 1,
      name: 'Traffic Sim Co., Ltd',
      description:
        'Company that provides various services and hardwares for broadcasting companies.',
    },
  ]);

  // ─── 10. Location translations (en) ────────────────────────────────────────
  await db.insert(locationTranslations).values([
    { locationId: 1, localeId: 1, country: 'Japan', province: 'Osaka', city: 'Osaka' },
    { locationId: 2, localeId: 1, country: 'Japan', province: 'Aichi', city: 'Nagoya' },
    { locationId: 3, localeId: 1, country: 'Indonesia', province: 'Jakarta', city: 'Jakarta' },
    { locationId: 4, localeId: 1, country: 'Indonesia', province: 'West Java', city: 'Bandung' },
  ]);

  // ─── 11. Work mode translations (en) ────────────────────────────────────────
  await db.insert(workModeTranslations).values([
    { workModeId: 1, localeId: 1, name: 'On-site' },
    { workModeId: 2, localeId: 1, name: 'Remote' },
    { workModeId: 3, localeId: 1, name: 'Hybrid' },
  ]);

  // ─── 12. Employment type translations (en) ─────────────────────────────────
  await db.insert(employmentTypeTranslations).values([
    { employmentTypeId: 1, localeId: 1, name: 'Full-time' },
    { employmentTypeId: 2, localeId: 1, name: 'Contract' },
    { employmentTypeId: 3, localeId: 1, name: 'Part-time' },
  ]);

  // ─── 13. Work experiences ─────────────────────────────────────────────────
  // Companies: 1=e-dash, 2=USJ, 3=PT LAPI, 4=GADA, 5=Help, 6=Traffic Sim
  // Employment: 1=Full-time, 2=Contract
  // Work modes: 1=On-site, 2=Remote, 3=Hybrid
  await db.insert(workExperiences).values([
    {
      companyId: 1,
      startDate: new Date('2023-10-01'),
      endDate: new Date('2025-10-01'),
      employmentTypeId: 1,
      workModeId: 1,
    },
    {
      companyId: 2,
      startDate: new Date('2025-10-01'),
      endDate: null,
      employmentTypeId: 2,
      workModeId: 1,
    },
    {
      companyId: 3,
      startDate: new Date('2018-08-01'),
      endDate: new Date('2019-08-01'),
      employmentTypeId: 1,
      workModeId: 1,
    },
    {
      companyId: 4,
      startDate: new Date('2018-05-01'),
      endDate: new Date('2018-11-01'),
      employmentTypeId: 1,
      workModeId: 1,
    },
    {
      companyId: 5,
      startDate: new Date('2020-06-01'),
      endDate: new Date('2020-12-01'),
      employmentTypeId: 1,
      workModeId: 2,
    },
    {
      companyId: 6,
      startDate: new Date('2021-01-01'),
      endDate: new Date('2023-10-01'),
      employmentTypeId: 1,
      workModeId: 1,
    },
  ]);

  // ─── 14. Work experience translations (en) ────────────────────────────────
  await db.insert(workExperienceTranslations).values([
    {
      workExperienceId: 1,
      localeId: 1,
      positionTitle: 'Full-stack Software Developer',
      description: `- Worked as a full-stack developer on E-dash (Go, Next.js, AWS) - CO2 emissions calculation and ESG reporting for 460+ companies
- Cosmos: invoice management tool for CS team, comments system, 5000+ invoices monthly
- OIDC Authentication service: user management for 100+ enterprise users, Auth0 integration, mobile-friendly`,
    },
    {
      workExperienceId: 2,
      localeId: 1,
      positionTitle: 'NodeJS Developer',
      description: `- Monitored distributed microservices (Azure Service Bus, Kafka)
- Developed new features and defect triage with global teams (GitLab, JIRA, Confluence)
- Debugged complex distributed system issues using Elasticsearch, Kibana, distributed tracing`,
    },
    {
      workExperienceId: 3,
      localeId: 1,
      positionTitle: 'Software Engineer',
      description: `- Developed Chemical Huff and Puff module for Pertamina's software
- Introduced machine learning for the first time in the software
- Led future ML implementation for other modules`,
    },
    {
      workExperienceId: 4,
      localeId: 1,
      positionTitle: 'Researcher',
      description: `- Researched machine learning in oil and gas industry
- Led team of 3 in creating research paper
- Published in IATMI Journal: "Application of Artificial Neural Network to Identify Potential Zones for Re-perforation"`,
    },
    {
      workExperienceId: 5,
      localeId: 1,
      positionTitle: 'Backend Developer',
      description: `- Developed features and maintained AWS with Node.js
- ShopeePay integration, queueing system, SQL optimization for CMS
- Collaborated with Bitbucket and Jira`,
    },
    {
      workExperienceId: 6,
      localeId: 1,
      positionTitle: 'Software Engineer',
      description: `- Electric Current Monitoring: Full-stack (Go, Next.js), Terraform, ECS, Clean Architecture
- Stream Monitoring: Node.js/TypeScript, Vue.js, improved UX
- OIDC Authentication: 2FA, integrated with company applications`,
    },
  ]);

  // ─── 15. Project translations (en) ──────────────────────────────────────────
  await db.insert(projectTranslations).values([
    {
      projectId: 1,
      localeId: 1,
      name: 'E-dash',
      description:
        'Cloud-based SaaS platform that automates CO2 emissions calculation and ESG reporting for enterprises. Served 460+ companies.',
    },
    {
      projectId: 2,
      localeId: 1,
      name: 'Cosmos',
      description:
        'Tool to help CS team manage invoices. Comments system for team communication. Processes 5000+ invoices monthly.',
    },
    {
      projectId: 3,
      localeId: 1,
      name: 'OIDC Authentication Service (e-dash)',
      description:
        'User management for multiple company services. Auth0 integration, mobile-friendly. Secured 100+ enterprise users.',
    },
    {
      projectId: 4,
      localeId: 1,
      name: 'Electric Current Monitoring Service',
      description:
        'Full-stack system receiving and displaying electric current data for anomaly detection and cost reduction. Go, Next.js, Terraform, ECS.',
    },
    {
      projectId: 5,
      localeId: 1,
      name: 'Stream Monitoring Service',
      description:
        'Devices send stream to server, watchable via web app with low latency. Node.js/TypeScript, Vue.js, AWS.',
    },
    {
      projectId: 6,
      localeId: 1,
      name: 'OIDC Authentication Service (Traffic Sim)',
      description: 'Authentication with 2FA, integrated with all company applications.',
    },
    {
      projectId: 7,
      localeId: 1,
      name: 'Chemical Huff and Puff Module',
      description:
        'Module for Pertamina software. First ML implementation in the system.',
    },
    {
      projectId: 8,
      localeId: 1,
      name: 'Machine Learning for Oil & Gas',
      description: 'Research on ML application. Published paper in IATMI Journal.',
    },
    {
      projectId: 9,
      localeId: 1,
      name: 'Help - Delivery Aggregation App',
      description:
        'App to aggregate delivery services for cheapest fees. ShopeePay, queueing, SQL optimization.',
    },
    {
      projectId: 10,
      localeId: 1,
      name: 'Microservices Team (USJ)',
      description:
        'Monitored microservices, Azure Service Bus, Kafka. Elasticsearch, Kibana, distributed tracing.',
    },
  ]);

  // ─── 16. Work experience ↔ Projects ────────────────────────────────────────
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

  // ─── 17. Work experience ↔ Locations ────────────────────────────────────────
  await db.insert(workExperienceLocations).values([
    { workExperienceId: 1, locationId: 1 },
    { workExperienceId: 2, locationId: 1 },
    { workExperienceId: 3, locationId: 4 },
    { workExperienceId: 4, locationId: 4 },
    { workExperienceId: 5, locationId: 3 },
    { workExperienceId: 6, locationId: 2 },
  ]);

  // ─── 18. Work experience ↔ Tech stacks ───────────────────────────────────
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

  // ─── 19. Work experience ↔ Locales (language used) ────────────────────────
  await db.insert(workExperienceLocales).values([
    { workExperienceId: 1, localeId: 2 },
    { workExperienceId: 2, localeId: 1 },
    { workExperienceId: 2, localeId: 2 },
    { workExperienceId: 3, localeId: 3 },
    { workExperienceId: 4, localeId: 3 },
    { workExperienceId: 5, localeId: 3 },
    { workExperienceId: 6, localeId: 2 },
  ]);

  // ─── 20. Project ↔ Tech stacks ─────────────────────────────────────────────
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

  // ─── 21. Tech stack category translations (en) ───────────────────────────────
  await db.insert(techStackCategoryTranslations).values([
    { techStackCategoryId: 1, localeId: 1, name: 'Programming Language' },
    { techStackCategoryId: 2, localeId: 1, name: 'Database' },
    { techStackCategoryId: 3, localeId: 1, name: 'Framework / Libraries' },
    { techStackCategoryId: 4, localeId: 1, name: 'Cloud and DevOps' },
    { techStackCategoryId: 5, localeId: 1, name: 'Others' },
  ]);

  console.log('Seed complete.');
  process.exit(0);
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
